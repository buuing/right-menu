export const setCss = (node, styles) => {
  node.style.cssText = node.style.cssText ? node.style.cssText += styles : styles
}

export const getWidth = node => node.getBoundingClientRect().width

export const getHeight = node => node.getBoundingClientRect().height

export const getLeft = node => node.getBoundingClientRect().left

export const getRight = node => node.getBoundingClientRect().right

export const getTop = node => node.getBoundingClientRect().top

export const getBottom = node => node.getBoundingClientRect().bottom

export const getX = node => node.getBoundingClientRect().x

export const getY = node => node.getBoundingClientRect().y

// bottom = y + height = top + height
// right = x + width = left + width
export const computeRectPosition = node => {
  const {
    bottom,
    height,
    left,
    right,
    top,
    width,
    x,
    y
  } = node.getBoundingClientRect()

  return { bottom, height, left, right, top, width, x, y }
}
