import type { AlertStatus } from "@yamada-ui/core"
import { isNull, isUndefined } from "@yamada-ui/utils"
import type { Parent as HastParent } from "hast"
import type {
  Break,
  Paragraph,
  PhrasingContent,
  Root,
  Strong,
  Text,
} from "mdast"
import type { ElementContent } from "react-markdown/lib"
import { match, P } from "ts-pattern"
import type { Plugin } from "unified"
import { remove } from "unist-util-remove"
import { visit } from "unist-util-visit"
import { getFragmentPattern } from "./patterns"
import type { ShouldRemoved } from "./utils"
import { shouldRemoved } from "./utils"

const getStatus = (str: string | undefined): AlertStatus => {
  return match(str)
    .with(undefined, () => {
      return "info" as const
    })
    .with("info", () => {
      return "info" as const
    })
    .with("warning", () => {
      return "warning" as const
    })
    .with("error", () => {
      return "error" as const
    })
    .with("success", () => {
      return "success" as const
    })
    .with("loading", () => {
      return "loading" as const
    })
    .with(P._, () => {
      return "info" as const
    })
    .exhaustive()
}

interface OneLineNote extends Text {
  readonly content: string
  readonly status: AlertStatus
}

const oneLineNoteFactory = (textNode: Text): OneLineNote | null => {
  const startFragmentCapturedGroups = getFragmentPattern("start", true).exec(
    textNode.value,
  )

  const endFragmentCapturedGroups = getFragmentPattern("end", true).exec(
    textNode.value,
  )

  const startFragment = startFragmentCapturedGroups?.groups?.startFragment
  const endFragment = endFragmentCapturedGroups?.groups?.endFragment

  if (isUndefined(startFragment) || isUndefined(endFragment)) {
    return null
  }

  return new Proxy(textNode, {
    get: (
      target: Text,
      property: keyof Pick<OneLineNote, "content" | "status">,
    ) => {
      switch (property) {
        case "content":
          return target.value
            .replace(startFragment, "")
            .replace(endFragment, "")
        case "status":
          return getStatus(startFragmentCapturedGroups?.groups?.status)
      }
    },
  }) as OneLineNote
}

interface StartFragment extends Text {
  readonly status: AlertStatus
}

const startFragmentFactory = (textNode: Text): StartFragment | null => {
  const capturedGroups = getFragmentPattern("start", false).exec(textNode.value)

  if (isNull(capturedGroups)) return null

  return new Proxy(textNode, {
    get: (target: Text, property: keyof Pick<StartFragment, "status">) => {
      switch (property) {
        case "status":
          return getStatus(capturedGroups.groups?.status)
      }
    },
  }) as StartFragment
}

interface EndFragment extends Text {}

const endFragmentFactory = (textNode: Text): EndFragment | null => {
  const capturedGroups = getFragmentPattern("end", false).exec(textNode.value)

  if (isNull(capturedGroups)) return null

  return new Proxy(textNode, {}) as EndFragment
}

export const remarkUIComponent: Plugin<[], Root, Root> = () => {
  return (tree) => {
    let nested = 0
    let isMergingChildren = false
    let buf: PhrasingContent[] = []
    let paragraph: Paragraph | undefined
    let status: AlertStatus = "info"

    visit(tree, "paragraph", (node, index) => {
      for (const phrasingContent of node.children) {
        match(phrasingContent)
          .with({ type: "text" }, (textNode) => {
            const oneLineNote = oneLineNoteFactory(textNode)

            if (!isNull(oneLineNote)) {
              if (isMergingChildren) {
                buf.push(textNode)
                return
              }

              const content = oneLineNote.content

              tree.children.splice(index!, 1, {
                ...node,
                type: "custom" as "paragraph",
                data: {
                  hName: "note",
                  hChildren: [
                    {
                      type: "text",
                      value: content,
                    },
                  ],
                  hProperties: {
                    status: oneLineNote.status,
                  },
                },
              })

              return
            }

            const startFragment = startFragmentFactory(textNode)
            if (!isNull(startFragment)) {
              isMergingChildren = true

              status = startFragment.status

              if (buf.length > 0) {
                nested++
              }
            }

            if (!isMergingChildren) {
              return
            }

            buf.push(textNode)

            const endFragment = endFragmentFactory(textNode)
            if (!isNull(endFragment)) {
              if (nested > 0) {
                nested--
                return
              }

              isMergingChildren = false
              paragraph = {
                type: "paragraph",
                children: buf.slice(2, -2),
              }

              buf.length = 0
            }
          })
          .with({ type: "break" }, (breakNode) => {
            if (isMergingChildren) {
              buf.push(breakNode)
            }
          })
          .with({ type: "strong" }, (strongNode) => {
            if (isMergingChildren) {
              buf.push(strongNode)
            }
          })
          .with(P._, () => {})
      }

      if (isMergingChildren) {
        const shouldRemovingNode = {
          ...node,
          shouldRemoved: true,
        } satisfies ShouldRemoved

        tree.children.splice(index!, 1, shouldRemovingNode)

        buf.push({ type: "break" } satisfies Break)
      } else {
        if (!isUndefined(paragraph)) {
          tree.children.splice(index!, 1, {
            ...node,
            type: "custom" as "paragraph",
            data: {
              hName: "note",
              hChildren: paragraph.children as ElementContent[],
              hProperties: {
                status: status,
              },
            },
          })

          paragraph = undefined
        }
      }
    })

    remove(tree, (node) => {
      return shouldRemoved(node)
    })

    if (isMergingChildren) {
      tree.children.push({
        type: "paragraph",
        children: buf,
      })
    }
    isMergingChildren = false
    buf = []
  }
}

export const rehypePlugin: Plugin = () => {
  return (tree) => {
    visit(tree, "break", (_, index, parent: HastParent) => {
      parent.children.splice(index!, 1, {
        type: "element",
        tagName: "br",
        properties: {},
        children: [],
      })
    })

    visit(tree, "strong", (node: Strong, index: number, parent: HastParent) => {
      parent.children.splice(index!, 1, {
        type: "element",
        tagName: "strong",
        properties: {},
        children: [...node.children] as ElementContent[],
      })
    })
  }
}
