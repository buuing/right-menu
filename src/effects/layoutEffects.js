import { getBottom, getHeight, getX, getY, getWidth } from '../utils/getInfo'

export const layoutElPositionEffect = (parent, child) => {
  child.style.position = 'fixed'
  // 计算位置
  const state = parent._state
  let x = getX(state.menu) + getWidth(parent)
  let y = getY(parent)
  if (window.innerWidth - x < child.offsetWidth) {
    x -= getWidth(state.menu) + getWidth(child) - 10
  }
  if (window.innerHeight - y < child.offsetHeight) {
    y = getBottom(parent) - getHeight(child) + 5
  } else {
    y -= 5
  }
  child.style.top = y + 'px'
  child.style.left = x + 'px'
}
