import { ATTR_LIST, SPLIT_SYMBOL, ConnectOffset } from '../config'
import { AttrsType, HTMLListElement } from '../types'
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
  baseEl: HTMLListElement,
  menu: HTMLElement
): void => {
  const { menu: baseMenu } = baseEl['_state']
  if (!baseMenu) return
  menu.style.position = 'fixed'
  // 计算位置
  const { x: baseX, width: baseW } = computeRectPosition(baseMenu)
  const { y: baseElY, bottom: baseElBot } = computeRectPosition(baseEl)
  const { height: menuH, width: menuW } = computeRectPosition(menu)
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
