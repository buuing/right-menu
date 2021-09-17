import { layoutMenuPositionEffect } from '../effects/layoutEffects'
import { attrList, splitSymbol } from '../config'

const state = {
  menu: null,
  el: null,
  eventList: []
}

/**
 * 阻止默认事件和冒泡
 * @param { Event } e 事件参数
 * @returns { void }
 */
export const preventDefault = e => {
  // 阻止冒泡
  window.event ? window.event.cancelBubble = true : e.stopPropagation()
  // 阻止默认事件
  e.preventDefault ? e.preventDefault() : window.event.returnValue = false
}

/**
 * 初始化菜单栏
 * @param { Promise<object[]> | object[]} thenable 菜单列表
 * @param { HTMLDivElement } el 绑定指令的元素
 * @param { Event } e 事件参数
 * @returns { void }
 */
export const initMenu = async (thenable, el, e) => {
  // 统计异步创建前, 有没有点击事件
  let flag = false
  const countClick = () => (flag = true)
  document.addEventListener('mousedown', countClick)
  addEvent(document, 'mousedown', countClick)
  // 异步获取到菜单配置项 options
  const options = await Promise.resolve(thenable)
  // 清除异步前创建的事件
  removeEvent()
  // 如果异步前有点击次数, 则打断逻辑, 不创建菜单
  if (flag) return
  // 先移除之前的菜单（若有）
  destroyMenu()
  // 开始创建菜单栏
  const menu = renderMenu(options)
  state.menu = menu
  state.el = el
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
  // 窗口 blur 时销毁菜单栏
  addEvent(window, 'blur', destroyMenu)
  // 窗口 resize 时销毁菜单栏
  addEvent(window, 'resize', destroyMenu)
  // 页面点击时销毁菜单栏
  addEvent(document, 'mousedown', clickPage)
  // 防止菜单组件里点出系统菜单
  menu.addEventListener('contextmenu', preventDefault)
}

/**
 * 添加事件
 * @param { Window | Document } target 目标事件源
 * @param { string } eventName 事件名称
 * @param { Function } callback 事件回调
 * @returns { void }
 */
const addEvent = (target, eventName, callback) => {
  target.addEventListener(eventName, callback)
  state.eventList.push([target, eventName, callback])
}

/**
 * 移除所有事件
 * @returns { void }
 */
const removeEvent = () => {
  while (state.eventList.length) {
    const [target, eventName, callback] = state.eventList.shift()
    target.removeEventListener(eventName, callback)
  }
}

/**
 * 点击页面时销毁菜单栏
 * @param { Event } e 事件参数
 * @returns { void }
 */
const clickPage = e => {
  const hasMenu = e?.path?.some(node => node === state.menu)
  if (!hasMenu) destroyMenu()
}

/**
 * 销毁菜单栏
 * @returns { void }
 */
const destroyMenu = () => {
  const menuList = document.querySelectorAll('.vue-right-menu')
  // 清除所有菜单栏, 有多少清多少
  menuList && menuList.forEach(item => {
    item.parentNode.removeChild(item)
  })
  // 移除所有事件
  removeEvent()
  state.el = null
  state.menu = null
}

/**
 * 过滤合法的 dom 属性
 * @param { object } opt 菜单的item
 * @returns { object }
 */
export const filterAttrs = (options, params) => {
  const res = {}
  attrList.forEach(key => {
    if (options[key]) {
      res[key] = options[key]
    }
    if (params[key]) {
      if (res[key]) {
        res[key] += (splitSymbol[key] + params[key])
      } else {
        res[key] = params[key]
      }
    }
  })
  return res
}

/**
 * 渲染菜单栏
 * @param { object[] } options
 * @returns { HTMLDivElement }
 */
const renderMenu = (options) => {
  const menuList = []
  const state = {
    menu: null,
    el: null
  }
  options.forEach(item => {
    switch (item.type) {
      case 'hr': menuList.push(createHr(item)); break
      case 'li': menuList.push(createLi(item)); break
      case 'ul': menuList.push(createUl(item, state)); break
      default: return console.error('未知的 type 类型: ' + item.type)
    }
  })
  state.menu = createDom('ul', { class: 'vue-right-menu' }, menuList)
  return state.menu
}

/**
 * 渲染dom
 * @param { String } [ tagName = 'ul' ] 元素名称
 * @param { Object } [ attrs = {} ] 元素属性对象
 * @param { Array } [ children = [] ] 子元素集合
 * @returns { HTMLDivElement }
 */
const createDom = (tagName = 'ul', attrs = {}, children = []) => {
  const el = document.createElement(tagName)
  // 循环添加属性
  Object.keys(attrs).forEach(key => {
    el.setAttribute(key, attrs[key])
  })
  // append所有子元素
  children.forEach(child => {
    if (typeof child === 'string') {
      el.innerHTML = child
    } else {
      el.appendChild(child)
    }
  })
  return el
}

const createHr = opt => {
  const attrs = { class: 'menu-hr' }
  return createDom('li', filterAttrs(opt, attrs))
}

const createLi = opt => {
  const span = createDom('span', {}, [opt.text])
  const attrs = { class: opt.disabled ? 'menu-disabled' : '' }
  const li = createDom('li', filterAttrs(opt, attrs), [span])
  if (!opt.disabled && opt.callback) {
    li.addEventListener('mousedown', e => {
      opt.callback(e, state.el)
      destroyMenu()
    })
  }
  return li
}

const createUl = (opt, state) => {
  const span = createDom('span', {}, [opt.text])
  const attrs = { class: 'menu-list' + (opt.disabled ? ' menu-disabled' : '') }
  const li = createDom('li', filterAttrs(opt, attrs), [span])
  li._state = state
  // 添加二级菜单
  if (!opt.disabled && opt.children) {
    const ul = renderMenu(opt.children)
    li.addEventListener('mouseover', e => {
      li.appendChild(ul)
      layoutMenuPositionEffect({
        baseEl: li,
        menu: ul
      })
    })
    li.addEventListener('mouseout', (e) => {
      if (!e.toElement) return
      const path = []
      let curr = e.toElement
      while (curr) {
        // 如果路径里存在 ul 标签, 就不需要销毁
        if (curr === ul) return
        path.push(curr)
        curr = curr.parentNode
      }
      li.removeChild(ul)
    })
  }
  return li
}
