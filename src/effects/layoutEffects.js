import { ConnectOffset } from '../config'
import { getBottom, getHeight, getX, getY, getWidth } from '../utils/getInfo'

export const layoutMenuPositionEffect = ({
  baseEl,
  menu
}) => {
  const { menu: baseMenu } = baseEl._state
  menu.style.position = 'fixed'
  // 计算位置
  const { right: baseRight, left: baseLeft } = computeRectPosition(baseMenu)
  const { top: baseElTop, bottom: baseElBot } = computeRectPosition(baseEl)
  const { width: menuW, height: menuH } = computeRectPosition(menu)
  let x = baseX + baseW
  let y = baseElY
  if (window.innerWidth < menu.offsetWidth + x) {
    x = baseX - menuW + ConnectOffset
  } else {
    x -= ConnectOffset
  }
  if (window.innerHeight < menu.offsetHeight + y) {
    y = baseElBot - menuH + ConnectOffset
  } else {
    y -= ConnectOffset
  }
  menu.style.top = y + 'px'
  menu.style.left = x + 'px'
}
