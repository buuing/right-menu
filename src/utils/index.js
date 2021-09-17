import { layoutMenuPositionEffect } from '../effects/layoutEffects.js'
import { computeRectPosition } from './getInfo.js'

const state = {
  menu: null,
  el: null
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
  const options = await Promise.resolve(thenable)
  // 先移除之前的菜单（若有）
  destroyMenu()

  const menu = renderMenu(options)
  state.menu = menu
  state.el = el
  document.body.appendChild(menu)

  // 计算 menu 的位置
  const { clientX: x0, clientY: y0 } = e
  const { width } = computeRectPosition(menu)

  const x1 = window.innerWidth - x0
  const y1 = window.innerHeight - y0

  menu.style[['left', 'right'][+(x1 < width)]] = [x0, x1][+(x1 < width)] + 'px'
  menu.style[['top', 'bottom'][+(y1 < width)]] = [y0, y1][+(y1 < width)] + 'px'

  // 防止菜单组件里点出系统菜单
  menu.addEventListener('contextmenu', preventDefault)

  // 窗口 blur 时销毁菜单栏
  window.addEventListener('blur', destroyMenu)
  // 窗口 resize 时销毁菜单栏
  window.addEventListener('resize', destroyMenu)
  // 页面点击时销毁菜单栏
  document.addEventListener('click', clickPage)
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
  // 在已有菜单的情况下才进行清除
  if (state.menu) {
    // 移除菜单后把监听事件移除，以免事件仍在激活状态
    window.removeEventListener('blur', destroyMenu)
    window.removeEventListener('resize', destroyMenu)
    document.removeEventListener('click', clickPage)
  }
  state.el = null
  state.menu = null
}

/**
 * 渲染菜单栏
 * @param { object[] } options
 * @returns { HTMLDivElement }
 */

const renderMenu = (options) => {
  const cache = { hr: createHr, li: createLi, ul: createUl }

  try {
    const state = {
      menu: null,
      el: null
    }

    state.menu = createDom('ul', { class: 'vue-right-menu' }, options.map(item => cache[item.type](item, state)))

    return state.menu
  } catch (e) {
    throw new Error('未知的 type 类型')
  }
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
  // 循环绑定事件
  // if (event.length) {
  //   event.forEach(item => {
  //     el.addEventListener(item.eventName, item.callBack)
  //   })
  // }
  // append所有子元素
  // [TODO:]bug here  innerHTML 会清除之前 append 的所有 child
  children.forEach(child => {
    if (typeof child === 'string') {
      el.innerHTML += child
    } else if (child.nodeType === 1) {
      el.appendChild(child)
    }
  })
  return el
}

const createHr = opt => {
  return createDom('li', { class: 'menu-hr' })
}

const createLi = opt => {
  if (opt.disabled) {
    return createDom('li', { class: (opt.disabled ? 'menu-disabled' : '') }, [createDom('span', {}, [opt.text, '测试'])])
  }

  // [TODO:] 每一项非禁止的菜单项目都应该对应一个回调函数
  // if (!opt.callback) {
  //   throw new Error('菜单选项对应的事件未添加')
  // }
  const li = createDom('li', { class: (opt.disabled ? 'menu-disabled' : '') }, [createDom('span', {}, [opt.text, '测试'])])

  li.addEventListener('mousedown', e => {
    opt.callback(e, state.el)
    destroyMenu()
  })

  return li
}

const createUl = (opt, state) => {
  if (opt.disabled) {
    return createDom('li', { class: 'menu-list menu-disabled' }, [createDom('span', {}, [opt.text])])
  }

  const li = createDom('li', { class: 'menu-list' + (opt.disabled ? ' menu-disabled' : '') }, [createDom('span', {}, [opt.text])])
  li._state = state
  // 添加二级菜单
  if (opt.children) {
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
      // const path = []  why defined a path here ?
      let curr = e.toElement
      while (curr) {
        // 如果路径里存在 ul 标签, 就不需要销毁
        if (curr === ul) return
        // path.push(curr)
        curr = curr.parentNode
      }
      li.removeChild(ul)
    })
  }
  return li
}
