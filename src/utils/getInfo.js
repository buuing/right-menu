export const setCss = (node, styles) => {
  node.style.cssText = node.style.cssText ? node.style.cssText += styles : styles
}

export const getWidth = (node) => {
  return node.getBoundingClientRect().width
}

export const getHeight = (node) => {
  return node.getBoundingClientRect().height
}

export const getBottom = (node) => {
  return node.getBoundingClientRect().bottom
}

export const getX = (node) => {
  return node.getBoundingClientRect().x
}

export const getY = (node) => {
  return node.getBoundingClientRect().y
}
