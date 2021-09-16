import { layoutElPositionEffect } from '../effects/layoutEffects.js'

const state = {
  menu: {},
  el: null
}

/**
 * 阻止默认事件和冒泡
 * @param { Event } e 事件参数
 * @return { void }
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
 * @return { void }
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
 */
const clickPage = e => {
  const hasMenu = e?.path?.some(node => node === state.menu)
  if (!hasMenu) destroyMenu()
}

/**
 * 销毁菜单栏
 */
const destroyMenu = () => {
  const menuList = document.querySelectorAll('.vue-right-menu')
  menuList.forEach(item => {
    item.parentNode.removeChild(item)
  })
}

/**
 * 渲染菜单栏
 */
const renderMenu = (options) => {
  const menuList = []
  const state = {
    menu: null,
    el: null
  }
  options.forEach(item => {
    switch (item.type) {
      case 'hr': menuList.push(_hr(item)); break
      case 'li': menuList.push(_li(item)); break
      case 'ul': menuList.push(_ul(item, state)); break
      default: return console.error('未知的 type 类型: ' + item.type)
    }
  })
  const res = new CreateDom('ul', { class: 'vue-right-menu' }, menuList).render()
  state.menu = res
  return res
}

const _hr = opt => {
  return new CreateDom('li', { class: 'menu-hr' }).render()
}

const _li = opt => {
  const li = new CreateDom('li', {
    class: (opt.disabled ? ' menu-disabled' : '')
  }, [opt.text]).render()
  if (!opt.disabled && opt.callback) {
    li.addEventListener('mousedown', e => {
      opt.callback(e, state.el)
      destroyMenu()
    })
  }
  return li
}

const _ul = (opt, state) => {
  const li = new CreateDom('li', {
    class: 'menu-list' + (opt.disabled ? ' menu-disabled' : '')
  }, [opt.text]).render()
  li._state = state
  // 添加二级菜单
  if (!opt.disabled && opt.children) {
    const ul = renderMenu(opt.children)
    li.addEventListener('mouseover', e => {
      li.appendChild(ul)
      layoutElPositionEffect(li, ul)
    })
    li.addEventListener('mouseout', (e) => {
      if (e.toElement) {
        if (e.toElement.parentNode !== ul && e.toElement !== ul) {
          li.removeChild(ul)
        }
      }
    })
  }
  return li
}

class CreateDom {
  /**
   * 渲染dom
   * @param { String } [ tagName = 'ul' ] 元素名称
   * @param { Object } [ attrs = {} ] 元素属性对象
   * @param { Array } [ children = [] ] 子元素集合
   */
  constructor (tagName = 'ul', attrs = {}, children = []) {
    this.tagName = tagName
    this.attrs = attrs
    this.children = Array.from(children)
    this.event = event || []
  }

  render () {
    const el = document.createElement(this.tagName)
    // 循环添加属性
    for (const key in this.attrs) {
      el.setAttribute(key, this.attrs[key])
    }
    // 循环绑定事件
    if (this.event.length) {
      this.event.forEach(item => {
        el.addEventListener(item.eventName, item.callBack)
      })
    }
    // append所有子元素
    this.children.forEach(child => {
      if (typeof child === 'string') {
        el.innerHTML = child
      } else {
        el.appendChild(child)
      }
    })
    return el
  }
}
