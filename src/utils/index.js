import {
  getWidth,
  getHeight,
  getBottom,
  getX,
  getY
} from './getInfo.js'

const utils = {
  mask: {},
  menu: {},
  /**
   * 阻止默认事件和冒泡
   * @param { Event } e 事件参数
   */
  preventDefault: (e) => {
    // 阻止冒泡
    window.event ? window.event.cancelBubble = true : e.stopPropagation()
    // 阻止默认事件
    e.preventDefault ? e.preventDefault() : window.event.returnValue = false
  },

  /**
   * 初始化遮罩层
   */
  initMask: () => {
    utils.unMaskAndMenu()
    const mask = document.createElement('div')
    mask.id = 'vue-right-mask'
    mask.style.width = window.innerWidth + 'px'
    mask.style.height = window.innerHeight + 'px'
    mask.style.background = 'rgba(0, 0, 0, 0)'
    mask.style.position = 'fixed'
    mask.style.left = 0 + 'px'
    mask.style.top = 0 + 'px'
    mask.style.zIndex = 9999998
    document.body.appendChild(mask)
    utils.mask = mask
    mask.addEventListener('click', e => {
      utils.unMaskAndMenu()
    })
    mask.addEventListener('contextmenu', e => {
      utils.unMaskAndMenu()
      e.preventDefault ? e.preventDefault() : window.event.returnValue = false
    })
  },

  /**
   * 初始化菜单栏
   */
  initMenu: (options, el, e) => {
    const menu = utils.render(options)
    utils.menu = menu
    utils.el = el
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
    menu.addEventListener('contextmenu', e => {
      utils.unMaskAndMenu()
      e.preventDefault ? e.preventDefault() : window.event.returnValue = false
    })
    // console.log(menu)
  },

  /**
   * 卸载遮罩层和菜单栏
   */
  unMaskAndMenu: () => {
    const temp = document.getElementById('vue-right-mask')
    if (temp) {
      temp.parentNode.removeChild(temp)
    }
    const menuList = document.querySelectorAll('.vue-right-menu')
    menuList.forEach(item => {
      item.parentNode.removeChild(item)
    })
  },

  /**
   * 渲染菜单栏
   */
  render: (options) => {
    const menuList = []
    options.forEach(item => {
      switch (item.type) {
        case 'a': menuList.push(utils._a(item)); break
        case 'hr': menuList.push(utils._hr(item)); break
        case 'li': menuList.push(utils._li(item)); break
        case 'ul': menuList.push(utils._ul(item)); break
        default: return false
      }
    })
    return new utils.DomIfy('ul', { class: 'vue-right-menu' }, menuList).render()
  },

  _a: (opt) => {
    const a = new utils.DomIfy('a', {
      href: opt.href,
      target: '_blank'
    }, [opt.title]).render()
    const li = new utils.DomIfy('li', {
      class: 'vue-right-menu-li vue-right-menu-a'
    }, [a]).render()
    return li
  },

  _hr: (opt) => {
    return new utils.DomIfy('li', { class: 'vue-right-menu-hr' }).render()
  },

  _li: (opt) => {
    const li = new utils.DomIfy('li', {
      class: 'vue-right-menu-li' + (opt.disabled ? ' vue-right-menu-disabled' : '')
    }, [opt.title]).render()
    if (!opt.disabled && opt.func) {
      li.addEventListener('click', e => {
        opt.func(e, utils.el)
        utils.unMaskAndMenu()
      })
    }
    return li
  },

  _ul: (opt) => {
    const li = new utils.DomIfy('li', {
      class: 'vue-right-menu-li vue-right-menu-list' + (opt.disabled ? ' vue-right-menu-disabled' : '')
    }, [opt.title]).render()
    // 添加二级菜单
    if (!opt.disabled && opt.children) {
      const ul = utils.render(opt.children)
      li.addEventListener('mouseover', e => {
        li.appendChild(ul)
        ul.style.position = 'fixed'
        // 计算位置
        let x = getX(utils.menu) + getWidth(utils.menu)
        const y = getY(li)
        if (window.innerWidth - x < ul.offsetWidth) {
          x -= getWidth(utils.menu) + getWidth(ul)
        }
        if (window.innerHeight - y < ul.offsetHeight) {
          ul.style.top = getBottom(li) - getHeight(ul) + 'px'
        } else {
          ul.style.top = getY(li) + 'px'
        }
        ul.style.left = x + 'px'
      })
      li.addEventListener('mouseout', (e) => {
        if (e.toElement) {
          if (e.toElement.parentNode !== ul && e.toElement !== ul) {
            li.removeChild(ul)
          }
        }
      })
      // utils.mask.addEventListener('mouseover', e => {
      //   li.removeChild(ul)
      // })
    }
    return li
  },

  DomIfy: class DomIfy {
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
}

export default utils
