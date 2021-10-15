import { ATTR_LIST, SPLIT_SYMBOL } from '../config'
import { AttrsType, LayoutMenuDirection } from '../types'
import { computeRectPosition } from './getInfo'

let currentLayoutDirection = LayoutMenuDirection.Right;

/**
 * 阻止默认事件和冒泡
 * @param { Event } e 事件参数
 * @returns { void }
 */
export const preventDefault = (e: Event) => {
  // 阻止冒泡
  window.event ? window.event.cancelBubble = true : e.stopPropagation()
  // 阻止默认事件
  e.preventDefault ? e.preventDefault() : (window as any).event.returnValue = false
}

/**
 * 过滤合法的 dom 属性
 * @param { object } opt 菜单的item
 * @returns { object }
 */
export const filterAttrs = (
  options: AttrsType,
  params: AttrsType & { [key: string]: any }
): AttrsType => {
  const res = {}
  ATTR_LIST.forEach(key => {
    if (options[key]) {
      res[key] = options[key]
    }
    if (params[key]) {
      if (res[key]) {
        res[key] += (SPLIT_SYMBOL[key] + params[key])
      } else {
        res[key] = params[key]
      }
    }
  })
  return res
}

export const layoutMenuPositionEffect = (
  base: HTMLElement | MouseEvent,
  menu: HTMLElement,
  direction: LayoutMenuDirection = currentLayoutDirection
): void => {
  // 计算位置
  const { width, height } = computeRectPosition(menu)
  const { x: baseX, y: baseY, width: baseW = 0, height: baseH = 0} = computeRectPosition(base)

  currentLayoutDirection = direction;

  const layoutToRight = () => {
    let x = baseX + baseW
    // 尝试向右布局，判断菜单最右端是否超出屏幕右边缘（视窗宽度）
    if (menu.offsetWidth + x > window.innerWidth) {
      x = baseX - width
      // 右 -> 左
      currentLayoutDirection = LayoutMenuDirection.Left
    }
    return x;
  }
  const layoutToLeft = () => {
    let x = baseX - width;
    // 尝试向左布局，判断菜单最左端是否超出屏幕左边缘（0）
    if (x < 0) {
      x =  baseX + baseW
      // 左 -> 右
      currentLayoutDirection = LayoutMenuDirection.Right;
    }
    return x
  }
  const layoutToTop = () => {
    let y = baseY
    // 尝试向上布局，判断菜单最顶端是否超出屏幕上边缘（视窗高度）
    if  (menu.offsetHeight + y > window.innerHeight) {
      y = baseY + baseH - height
    }
    return y;
  }

  let x, y;
  switch (currentLayoutDirection) {
    case LayoutMenuDirection.Left:
      x = layoutToLeft()
      break
    case LayoutMenuDirection.Right:
      x = layoutToRight()
      break
    default:
      throw new Error(`Unsupported direction: ${currentLayoutDirection}`)
  }
  y = layoutToTop()
  updatePosition(menu, x, y)
}

const updatePosition = (el: HTMLElement, x: number, y: number) => {
  el.style.left = x + 'px'
  el.style.top = y + 'px'
}