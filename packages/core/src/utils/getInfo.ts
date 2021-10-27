export const setCss = (node: HTMLElement, styles: string): void => {
  node.style.cssText = node.style.cssText
    ? (node.style.cssText += styles)
    : styles
}

export const getWidth: (node: HTMLElement) => number = (node) =>
  node.getBoundingClientRect().width

export const getHeight: (node: HTMLElement) => number = (node) =>
  node.getBoundingClientRect().height

export const getLeft: (node: HTMLElement) => number = (node) =>
  node.getBoundingClientRect().left

export const getRight: (node: HTMLElement) => number = (node) =>
  node.getBoundingClientRect().right

export const getTop: (node: HTMLElement) => number = (node) =>
  node.getBoundingClientRect().top

export const getBottom: (node: HTMLElement) => number = (node) =>
  node.getBoundingClientRect().bottom

export const getX: (node: HTMLElement) => number = (node) =>
  node.getBoundingClientRect().x

export const getY: (node: HTMLElement) => number = (node) =>
  node.getBoundingClientRect().y

/**
 * 获取元素在窗口中的几何属性
 * bottom = y + height = top + height
 * right = x + width = left + width
 * @param { HTMLElement | MouseEvent } node 元素
 * @returns { width, height, left, right, top, bottom, x, y }
 */
export const computeRectPosition: (node: HTMLElement | MouseEvent) => {
  x: number
  y: number
  width: number
  height: number
  left?: number
  right?: number
  top?: number
  bottom?: number
} = (node) => (node as HTMLElement).getBoundingClientRect?.() || node
