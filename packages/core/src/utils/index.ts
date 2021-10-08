import { ATTR_LIST, SPLIT_SYMBOL } from '../config'
import { AttrsType } from '../types'
import { computeRectPosition } from './getInfo'

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
  menu: HTMLElement
): void => {
  // 计算位置
  const { width, height } = computeRectPosition(menu)
  const { x: baseX, y: baseY, width: baseW, height: baseH } = computeRectPosition(base)
  let x = baseX + baseW
  let y = baseY
  console.log(baseX, baseY, baseW, baseH)
  console.log(menu, width, height)

  if (window.innerWidth < menu.offsetWidth + x) {
    x = baseX - width
  }
  if (window.innerHeight < menu.offsetHeight + y) {
    y = baseY + baseH - height
  }
  menu.style.left = x + 'px'
  menu.style.top = y + 'px'
}
