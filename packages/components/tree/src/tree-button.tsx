import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { cx, isArray } from "@yamada-ui/utils"
import type { FC, PropsWithChildren, ReactNode } from "react"
import { useTreeContext } from "./tree"
import { TreeIcon } from "./tree-icon"
import { useTreeItemContext } from "./tree-item"

type TreeButtonOptions = {
  /**
   * Specifies the icon for the tree button. Can be a ReactNode or a function that returns a ReactNode.
   */
  icon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * Specifies the left icon for the tree button. Can be a ReactNode or a function that returns a ReactNode.
   */
  leftIcon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * Specifies the level of the tree button in the tree structure.
   */
  level: number
  /**
   * Specifies the index of the tree button in its level.
   */
  index: number
  /**
   * If set to `true`, the tree button is at the last level of the tree structure.
   */
  lastLevel: boolean
}

export type TreeButtonProps = HTMLUIProps<"button"> & TreeButtonOptions

export const TreeButton = forwardRef<TreeButtonProps, "button">(
  (
    {
      className,
      icon: customIcon,
      leftIcon: customLeftIcon,
      level,
      index,
      lastLevel,
      children,
      ...rest
    },
    ref,
  ) => {
    const {
      isOpen,
      isDisabled = false,
      icon: supplementIcon,
      leftIcon: supplementLeftIcon,
      iconHidden: supplementIconHidden,
      getButtonProps,
      selectedBg: supplementSelectedBg,
      selectedBackground: supplementSelectedBackground,
    } = useTreeItemContext()
    const {
      icon: generalIcon,
      leftIcon: generalLeftIcon,
      iconHidden,
      styles,
      selectedIndex,
      selectedBg: generalSelectedBg,
      selectedBackground: generalSelectedBackground,
    } = useTreeContext()

    const selected = isArray(selectedIndex)
      ? selectedIndex.includes(index)
      : selectedIndex === index

    const css: CSSUIObject = {
      display: "inline-flex",
      alignItems: "center",
      outline: 0,
      width: "100%",
      bg: selected
        ? supplementSelectedBg ??
          supplementSelectedBackground ??
          generalSelectedBg ??
          generalSelectedBackground ?? ["blackAlpha.200", "whiteAlpha.100"]
        : undefined,
      ...styles.button,
    }

    return (
      <ui.button
        {...getButtonProps(rest, ref)}
        className={cx("ui-tree__button", className)}
        __css={css}
      >
        <ui.div data-level={level} __css={{ width: `${level * 1.5}rem` }} />
        {!iconHidden ? (
          <TreeIcon hidden={lastLevel}>
            {getIcon(
              [customIcon, supplementIcon, generalIcon],
              isOpen,
              isDisabled,
            )}
          </TreeIcon>
        ) : null}
        {!iconHidden && !supplementIconHidden ? (
          <TreeLeftIcon>
            {getIcon(
              [customLeftIcon, supplementLeftIcon, generalLeftIcon],
              isOpen,
              isDisabled,
            )}
          </TreeLeftIcon>
        ) : null}
        {children}
      </ui.button>
    )
  },
)

type IconType =
  | ReactNode
  | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)

export const getIcon = (
  [supplementIcon, customIcon, generalIcon]: IconType[],
  isOpen: boolean,
  isDisabled: boolean,
): ReactNode => {
  const cloneSupplementIcon =
    typeof supplementIcon === "function"
      ? supplementIcon({
          isExpanded: isOpen,
          isDisabled,
        })
      : supplementIcon

  const cloneCustomIcon =
    typeof customIcon === "function"
      ? customIcon({
          isExpanded: isOpen,
          isDisabled,
        })
      : customIcon

  const cloneGeneralIcon =
    typeof generalIcon === "function"
      ? generalIcon({
          isExpanded: isOpen,
          isDisabled,
        })
      : generalIcon

  return cloneSupplementIcon ?? cloneCustomIcon ?? cloneGeneralIcon
}

type TreeLeftIconOptions = PropsWithChildren<IconProps> & {}

export const TreeLeftIcon: FC<TreeLeftIconOptions> = ({
  className,
  children,
}) => {
  if (children)
    return (
      <ui.span
        className={cx("ui-tree__left-icon", className)}
        __css={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </ui.span>
    )

  return null
}
