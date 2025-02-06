import { LayoutMenuDirection } from './config'
import { OperatSystem } from './theme/index'
import { ConfigType, OptionsType, ItemType, LiType, AttrsType } from './types'
import {
  preventDefault,
  layoutMenuPositionEffect,
  filterAttrs,
  handleStyle,
  getValue,
} from './utils'
import { version } from '../package.json'

export { ConfigType, OptionsType }

export default class RightMenu {
  private version: string = version
  private menu: HTMLElement | null = null
  private config: ConfigType
  private options: OptionsType
  private eventList: Array<[Window | Document, string, LiType['callback']]> = []
  private menuStyle = {
    'min-width': '',
    'max-width': '',
  }

  private bindEl: Element | null = null

  constructor(
    el: ConfigType,
    options: OptionsType,
  ) {
    const config = this.config = typeof el === 'string' ? { el } : el
    // 设置主题
    config.theme = config.theme || OperatSystem.toLowerCase().replace(/is/, '') || 'mac'
    // 如果用户输入的主题名称里包含了 'theme-' 则删除
    if (config.theme.indexOf('theme-') === 0) {
      config.theme = config.theme.slice(6)
    }
    // 设置菜单最大/最小宽度
    if (config.minWidth) {
      this.menuStyle['min-width'] = getValue(config.minWidth)
    }
    if (config.maxWidth) {
      this.menuStyle['max-width'] = getValue(config.maxWidth)
    }
    this.options = options

    // 获取dom并绑定事件
    const dom = typeof config.el === 'string' ? document.querySelector(config.el) : config.el
    this.bindEl = dom

    this.contextMenuHandler = this.contextMenuHandler.bind(this)

    dom?.addEventListener('contextmenu', this.contextMenuHandler)
  }

  contextMenuHandler(e: Event) {
    const { options, config } = this
    const res = typeof options === 'function' ? options(e, config) : options
    this.init(e as MouseEvent, res)
  }

  destroy() {
    this.bindEl?.removeEventListener('contextmenu', this.contextMenuHandler)
  }

  /**
   * 组件初始化
   * @param e 鼠标事件参数
   * @param thenable 菜单列表
   * @returns { Promise<void> }
   */
  async init(
    e: MouseEvent,
    thenable: ItemType[] | Promise<ItemType[]>,
  ): Promise<void> {
    // 触发生命周期
    this.config.beforeInit?.call(this)

    // 开始就要阻止本身的默认事件
    preventDefault(e)

    // 先移除之前的菜单
    this.destroyMenu()

    // 创建菜单骨架
    this.initSkeleton(e)

    // // 统计异步创建前, 有没有点击事件
    let flag = false
    const countClick = () => (flag = true)
    document.addEventListener('mousedown', countClick)
    // 异步获取到菜单配置项 options
    const options = await Promise.resolve(thenable)
    // 清除异步前创建的事件
    document.removeEventListener('mousedown', countClick)
    // // 如果异步前有点击次数, 则打断逻辑, 不创建菜单
    if (flag) return

    // 再次移除骨架屏
    this.destroyMenu()

    // 开始创建菜单栏
    this.menu = this.renderMenu(options)
    // 渲染菜单栏
    this.initMenu(e, this.menu)

    // 触发生命周期
    this.config.afterInit?.call(this)
  }

  /**
   * 初始化菜单栏
   * @param { Event } e 事件参数
   * @param menu { HTMLElement } 菜单标签
   * @returns { void }
   */
  initMenu(e: MouseEvent, menu: HTMLElement): void {
    // 添加到页面上
    document.body.appendChild(menu)
    // 计算一级菜单栏的位置
    layoutMenuPositionEffect(e, menu, LayoutMenuDirection.Right)

    // 防止菜单组件里点出系统菜单
    menu.addEventListener('contextmenu', preventDefault)
    // 窗口 blur 时销毁菜单栏
    this.addEvent(window, 'blur', this.destroyMenu.bind(this))
    // 窗口 resize 时销毁菜单栏
    this.addEvent(window, 'resize', this.destroyMenu.bind(this))
    // 页面点击时销毁菜单栏
    this.addEvent(document, 'mousedown', (e) => {
      const hasMenu = e['path']?.some((node: HTMLDivElement) => node === menu)
      if (!hasMenu) this.destroyMenu()
    })
  }

  /**
   * 创建菜单骨架
   * @param e 鼠标点击事件
   */
  initSkeleton(e: MouseEvent): void {
    // 创建 dom 元素
    const children = new Array(3).fill(null).map(() => {
      return this.createDom('li', { class: 'skeleton' })
    })
    const skeleton = this.createDom(
      'ul',
      {
        class: `right-menu-list theme-${this.config.theme}`,
        style: this.menuStyle,
      },
      children,
    )
    // 初始化菜单骨架
    this.initMenu(e, skeleton)
  }

  /**
   * 销毁菜单栏/骨架屏
   * @returns { void }
   */
  destroyMenu(): void {
    const menuList = document.querySelectorAll('.right-menu-list')
    // 清除所有菜单栏, 有多少清多少
    menuList && menuList.forEach((item) => {
      item.parentNode?.removeChild(item)
    })
    // 移除所有事件
    this.removeEvent()
    this.menu = null
  }

  /**
   * 添加事件
   * @param { Window | Document } target 目标事件源
   * @param { string } eventName 事件名称
   * @param { Function } callback 事件回调
   * @returns { void }
   */
  addEvent(
    target: Window | Document,
    eventName: string,
    callback: LiType['callback'],
  ): void {
    target.addEventListener(eventName, callback)
    this.eventList.push([target, eventName, callback])
  }

  /**
   * 移除所有事件
   * @returns { void }
   */
  removeEvent(): void {
    while (this.eventList.length) {
      const [target, eventName, callback] = this.eventList.shift()!
      target.removeEventListener(eventName, callback)
    }
  }

  /**
   * 渲染菜单栏
   * @param { object[] } options
   * @returns { HTMLElement }
   */
  renderMenu(options: ItemType[]): HTMLElement {
    const children = options.map((item) => {
      switch (item.type) {
        case 'hr':
          return this.createHr(item)
        case 'li':
          return this.createLi(item)
        case 'ul':
          return this.createUl(item)
        default:
          throw new Error('未知的 type 类型 => ' + item['type'])
      }
    })
    return this.createDom(
      'ul',
      {
        class: `right-menu-list theme-${this.config.theme}`,
        style: this.menuStyle,
      },
      children,
    )
  }

  /**
   * 渲染dom
   * @param { String } [ tagName = 'ul' ] 元素名称
   * @param { Object } [ attrs = {} ] 元素属性对象
   * @param { Array } [ children = [] ] 子元素集合
   * @returns { HTMLElement }
   */
  createDom(
    tagName = 'ul',
    attrs: AttrsType = {},
    children: Array<HTMLElement | string> = [],
  ): HTMLElement {
    const dom = document.createElement(tagName)
    // 循环添加属性
    ;(Object.keys(attrs) as (keyof AttrsType)[]).forEach((key) => {
      const value = attrs[key]
      if (!value) return
      let res = ''
      switch (key) {
        case 'style':
          res = handleStyle(value)
          break
        // [TODO:] 这里很奇怪, 按理说 key=class 的时候只剩 string 类型了
        case 'class':
          res = value as string
          break
      }
      dom.setAttribute(key, res)
    })
    // append所有子元素
    // [TODO:]bug here  innerHTML 会清除之前 append 的所有 child
    children.forEach((child) => {
      if (typeof child === 'string') {
        dom.innerHTML += child
      } else if (child.nodeType === 1) {
        dom.appendChild(child)
      }
    })
    return dom
  }

  createHr<T extends ItemType & { type: 'hr' }>(opt: T): HTMLElement {
    const attrs = { class: 'menu-hr' }
    return this.createDom('li', filterAttrs(opt, attrs))
  }

  createLi<T extends ItemType & { type: 'li' | 'ul' }>(opt: T): HTMLElement {
    const span = this.createDom('span', {}, [String(opt.text)])
    const attrs = {
      class: [
        opt.disabled ? 'menu-disabled' : '',
        opt.type === 'ul' ? 'menu-ul' : '',
      ].join(' '),
    }
    const li = this.createDom('li', filterAttrs(opt, attrs), [span])
    if (!opt.disabled && opt.type === 'li' && opt.callback) {
      li.addEventListener('mousedown', (e) => {
        opt.callback(e)
        this.destroyMenu()
      })
    }
    return li
  }

  createUl<T extends ItemType & { type: 'ul' }>(opt: T): HTMLElement {
    const li = this.createLi(opt)
    // 添加二级菜单
    if (opt.children && opt.children.length) {
      const ul = this.renderMenu(opt.children)
      li.addEventListener('mouseenter', (e) => {
        li.appendChild(ul)
        layoutMenuPositionEffect(li, ul)
      })
      li.addEventListener('mouseleave', (e: MouseEvent) => {
        if (!e['toElement']) return
        let curr = e['toElement']
        while (curr) {
          // 如果路径里存在 ul 标签, 就不需要销毁
          if (curr === ul) return
          curr = curr.parentNode
        }
        li.removeChild(ul)
      })
    }
    return li
  }
}
