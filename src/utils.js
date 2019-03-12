const utils = {

  /**
   * 阻止默认事件和冒泡
   * @param { Event } e 事件参数
   */
  preventDefault: (e) => {
    // 阻止冒泡
    window.event ? window.event.cancelBubble = true : e.stopPropagation()
    // 阻止默认事件
    e.preventDefault ? e.preventDefault() : window.event.returnValue == false
  },

  /**
   * 初始化遮罩层
   */
  initMask: () => {
    let mask = document.createElement('div')
    mask.id = 'ldq-mask'
    mask.style.width = window.innerWidth + 'px'
    mask.style.height =  window.innerHeight + 'px'
    mask.style.background = 'rgba(0, 0, 0, 0.1)'
    mask.style.position = 'absolute'
    mask.style.display = 'block'
    mask.style.top = 0 + 'px'
    mask.style.left = 0 + 'px'
    mask.style.zIndex = 9999998
    document.body.appendChild(mask)
    mask.addEventListener('click', e => {
      utils.clearMask()
      utils.clearMenu()
    })
    mask.addEventListener('contextmenu', e => {
      utils.clearMask()
      utils.clearMenu()
      e.preventDefault ? e.preventDefault() : window.event.returnValue == false
    })
  },

  /**
   * 卸载遮罩层
   */
  clearMask: () => {
    const temp = document.getElementById('ldq-mask')
    if (temp) {
      temp.parentNode.removeChild(temp)
    }
  },

  /**
   * 卸载菜单栏
   */
  clearMenu: () => {
    const menuList = document.querySelectorAll('.ldq-menu')
    menuList.forEach(item => {
      console.log(item.parentNode.removeChild(item))
    })
  },

  /**
   * 渲染菜单栏
   */
  render: (options) => {
    const menuList = []
    options.forEach(item => {
      switch (item.type) {
        case 'a': menuList.push(utils._a(item)); break;
        case 'hr': menuList.push(utils._hr(item)); break;
        case 'li': menuList.push(utils._li(item)); break;
        case 'ul': menuList.push(utils._ul(item)); break;
        default: return
      }
    })
    return new utils.DomIfy('ul', {class: 'ldq-menu'}, menuList).render()
  },

  _a: (opt) => {
    const a = new utils.DomIfy('a', {
      href: opt.href,
      target: '_blank'
    }, [opt.title]).render()
    const li = new utils.DomIfy('li', {
      class: 'ldq-menu-li ldq-menu-a'
    }, [a]).render()
    return li
  },

  _hr: (opt) => {
    return new utils.DomIfy('li', {class: 'ldq-menu-hr'}).render()
  },

  _li: (opt) => {
    const li = new utils.DomIfy('li', {
      class: 'ldq-menu-li' + (opt.disabled ? ' ldq-menu-disabled' : '')
    }, [opt.title]).render()
    if (!opt.disabled) {
      li.addEventListener('click', e => {
        opt.func(e)
      })
    }
    return li
  },

  _ul: (opt) => {
    const li = new utils.DomIfy('li', {
      class: 'ldq-menu-li' + (opt.disabled ? ' ldq-menu-disabled' : '')
    }, [opt.title]).render()
    if (!opt.disabled) {
      li.addEventListener('mouseover', e => {
        console.log('0-0')
      })
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
      for (let key in this.attrs) {
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
        // console.log(el, child)
        if (typeof child === 'string') {
          el.innerHTML = child
        } else {
          // console.log('---'+child+'----')
          el.appendChild(child)
        }
      })
      return el
    }

    // addEvent (eventName, callBack) {
		// 	this.event.push({
		// 		eventName: eventName,
		// 		callBack: callBack
		// 	})
		// 	return this
    // }
  },
}

export default utils
