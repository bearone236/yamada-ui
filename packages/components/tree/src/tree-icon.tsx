import type { CSSUIObject } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { ChevronIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import type { PropsWithChildren, FC } from "react"
import { useTreeContext } from "./tree"
import { useTreeItemContext } from "./tree-item"

export type TreeIconOptions = PropsWithChildren<IconProps> & {
  hidden?: boolean
}

export const TreeIcon: FC<TreeIconOptions> = ({
  className,
  children,
  hidden,
  ...rest
}) => {
  const { isOpen, isDisabled, onChange } = useTreeItemContext()
  const { styles, isSelectable } = useTreeContext()

  const css: CSSUIObject = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
    visibility: hidden ? "hidden" : undefined,
    ...styles.icon,
  }

  if (children)
    return (
      <ui.span
        className={cx("ui-tree__icon", className)}
        __css={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          visibility: hidden ? "hidden" : undefined,
        }}
        onClick={() => {
          if (isSelectable) onChange(!isOpen)
        }}
      >
        {children}
      </ui.span>
    )

  return (
    <ChevronIcon
      className={cx("ui-tree__icon", className)}
      __css={css}
      onClick={() => {
        if (isSelectable) onChange(!isOpen)
      }}
      {...rest}
    />
  )
}
