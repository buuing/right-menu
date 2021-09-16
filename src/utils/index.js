import { getWidth, getHeight, getBottom, getX, getY } from './getInfo.js'

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
  destroyMenu()
  const menu = renderMenu(options)
  state.menu = menu
  state.el = el
  document.body.appendChild(menu)
  // 计算位置
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
  window.removeEventListener('blur', destroyMenu)
  window.addEventListener('blur', destroyMenu)
  document.removeEventListener('click', clickPage)
  document.addEventListener('click', clickPage)
  menu.addEventListener('contextmenu', e => {
    // destroyMenu()
    preventDefault(e)
  })
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
  menuList.forEach(item => {
    item.parentNode.removeChild(item)
  })
}

/**
 * 渲染菜单栏
 * @param { object[] } options
 * @returns { HTMLDivElement }
 */
const renderMenu = (options) => {
  const menuList = []
  options.forEach(item => {
    switch (item.type) {
      case 'hr': menuList.push(createHr(item)); break
      case 'li': menuList.push(createLi(item)); break
      case 'ul': menuList.push(createUl(item)); break
      default: return console.error('未知的 type 类型: ' + item.type)
    }
  })
  return createDom('ul', { class: 'vue-right-menu' }, menuList)
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
  return createDom('li', { class: 'menu-hr' })
}

const createLi = opt => {
  const span = createDom('span', {}, [opt.text])
  const li = createDom('li', { class: (opt.disabled ? 'menu-disabled' : '') }, [span])
  if (!opt.disabled && opt.callback) {
    li.addEventListener('mousedown', e => {
      opt.callback(e, state.el)
      destroyMenu()
    })
  }
  return li
}

const createUl = opt => {
  const span = createDom('span', {}, [opt.text])
  const li = createDom('li', { class: 'menu-list' + (opt.disabled ? ' menu-disabled' : '') }, [span])
  // 添加二级菜单
  if (!opt.disabled && opt.children) {
    const ul = renderMenu(opt.children)
    li.addEventListener('mouseover', e => {
      li.appendChild(ul)
      ul.style.position = 'fixed'
      // 计算位置
      let x = getX(state.menu) + getWidth(state.menu) - 5
      const y = getY(li)
      if (window.innerWidth - x < ul.offsetWidth) {
        x -= getWidth(state.menu) + getWidth(ul) - 10
      }
      if (window.innerHeight - y < ul.offsetHeight) {
        ul.style.top = getBottom(li) - getHeight(ul) + 5 + 'px'
      } else {
        ul.style.top = getY(li) - 5 + 'px'
      }
      ul.style.left = x + 'px'
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
