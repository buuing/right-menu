
import {
  createHr,
  createLi,
  createUl,
  createDom,
} from './dom'
import { ATTR_LIST, SPLIT_SYMBOL } from '../config'
import { ItemType, AttrsType } from '../types/index'

const state = {
  menu: null as HTMLElement | null,
  eventList: [] as Array<[Window | Document, string, ItemType['callback']]>
}

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
 * 初始化菜单栏
 * @param { Event } e 事件参数
 * @param { Promise<object[]> | object[]} thenable 菜单列表
 * @returns { void }
 */
export const initMenu = async (
  e: MouseEvent,
  thenable: Promise<ItemType[]> | ItemType[]
): Promise<void> => {
  // 统计异步创建前, 有没有点击事件
  let flag = false
  const countClick = () => (flag = true)
  document.addEventListener('mousedown', countClick)
  // 异步获取到菜单配置项 options
  const options = await Promise.resolve(thenable)
  // 清除异步前创建的事件
  document.removeEventListener('mousedown', countClick)
  // 如果异步前有点击次数, 则打断逻辑, 不创建菜单
  if (flag) return
  // 先移除之前的菜单（若有）
  destroyMenu()

  // 开始创建菜单栏
  const menu = renderMenu(options)
  state.menu = menu
  document.body.appendChild(menu)

  // 计算一级菜单栏的位置
  let x = e.clientX
  let y = e.clientY
  if (window.innerWidth - x < menu.offsetWidth) {
    x -= menu.offsetWidth
  }
  if (window.innerHeight - y < menu.offsetHeight) {
    y -= menu.offsetHeight
  }
  menu.style.left = x + 'px'
  menu.style.top = y + 'px'

  // 阻止本身的默认事件
  preventDefault(e)
  // 防止菜单组件里点出系统菜单
  menu.addEventListener('contextmenu', preventDefault)
  // 窗口 blur 时销毁菜单栏
  addEvent(window, 'blur', destroyMenu)
  // 窗口 resize 时销毁菜单栏
  addEvent(window, 'resize', destroyMenu)
  // 页面点击时销毁菜单栏
  addEvent(document, 'mousedown', clickPage)
}

/**
 * 添加事件
 * @param { Window | Document } target 目标事件源
 * @param { string } eventName 事件名称
 * @param { Function } callback 事件回调
 * @returns { void }
 */
const addEvent = (
  target: Window | Document,
  eventName: string,
  callback: ItemType['callback']
): void => {
  target.addEventListener(eventName, callback)
  state.eventList.push([target, eventName, callback])
}

/**
 * 移除所有事件
 * @returns { void }
 */
const removeEvent = (): void => {
  while (state.eventList.length) {
    const [target, eventName, callback] = state.eventList.shift()!
    target.removeEventListener(eventName, callback)
  }
}

/**
 * 点击页面时销毁菜单栏
 * @param { Event } e 事件参数
 * @returns { void }
 */
const clickPage: EventListener = e => {
  const hasMenu = e['path']?.some((node: HTMLDivElement) => node === state.menu)
  if (!hasMenu) destroyMenu()
}

/**
 * 渲染菜单栏
 * @param { object[] } options
 * @returns { HTMLElement }
 */
export const renderMenu = (options: ItemType[]): HTMLElement => {
  const _state = {
    menu: null as HTMLElement | null,
  }
  const children = options.map(item => {
    switch (item.type) {
      case 'hr': return createHr(item)
      case 'li': return createLi(item)
      case 'ul': return createUl(item, _state)
      default: throw new Error('未知的 type 类型 => ' + item.type)
    }
  })
  return (_state.menu = createDom('ul', { class: 'vue-right-menu' }, children))
}

/**
 * 销毁菜单栏
 * @returns { void }
 */
export const destroyMenu = (): void => {
  const menuList = document.querySelectorAll('.vue-right-menu')
  // 清除所有菜单栏, 有多少清多少
  menuList && menuList.forEach(item => {
    item['parentNode']?.removeChild(item)
  })
  // 移除所有事件
  removeEvent()
  state.menu = null
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
