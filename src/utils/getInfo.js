export const setCss = (node, styles) => {
  node.style.cssText = node.style.cssText ? node.style.cssText += styles : styles
}

export const getWidth = node => node.getBoundingClientRect().width

export const getHeight = node => node.getBoundingClientRect().height

export const getBottom = node => node.getBoundingClientRect().bottom

export const getX = node => node.getBoundingClientRect().x

export const getY = node => node.getBoundingClientRect().y
