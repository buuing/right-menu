import { ConnectOffset } from '../config'
import { computeRectPosition } from '../utils/getInfo'
import { filterAttrs, renderMenu, destroyMenu } from './index'
import { ItemType, AttrsType } from '../types/index'

/**
 * 渲染dom
 * @param { String } [ tagName = 'ul' ] 元素名称
 * @param { Object } [ attrs = {} ] 元素属性对象
 * @param { Array } [ children = [] ] 子元素集合
 * @returns { HTMLElement }
 */
export const createDom = (
  tagName = 'ul',
  attrs: AttrsType = {},
  children: Array<HTMLElement | string> = []
): HTMLElement => {
  const dom = document.createElement(tagName)
  // 循环添加属性
  Object.keys(attrs).forEach(key => {
    dom.setAttribute(key, attrs[key])
  })
  // append所有子元素
  // [TODO:]bug here  innerHTML 会清除之前 append 的所有 child
  children.forEach(child => {
    if (typeof child === 'string') {
      dom.innerHTML += child
    } else if (child.nodeType === 1) {
      dom.appendChild(child)
    }
  })
  return dom
}

export const createHr = (opt: ItemType): HTMLElement => {
  const attrs = { class: 'menu-hr' }
  return createDom('li', filterAttrs(opt, attrs))
}

export const createLi = (opt: ItemType): HTMLElement => {
  const span = createDom('span', {}, [opt.text])
  const attrs = { class: opt.disabled ? 'menu-disabled' : '' }
  const li = createDom('li', filterAttrs(opt, attrs), [span])
  if (!opt.disabled && opt.callback) {
    li.addEventListener('mousedown', e => {
      opt.callback(e)
      destroyMenu()
    })
  }
  return li
}

export const createUl = (
  opt: ItemType,
  state: { menu: HTMLElement | null}
): HTMLElement => {
  const span = createDom('span', {}, [opt.text])
  const attrs = { class: 'menu-list' + (opt.disabled ? ' menu-disabled' : '') }
  const li = createDom('li', filterAttrs(opt, attrs), [span])
  li['_state'] = state
  // 添加二级菜单
  if (opt.children && opt.children.length) {
    const ul = renderMenu(opt.children)
    li.addEventListener('mouseover', e => {
      li.appendChild(ul)
      layoutMenuPositionEffect({
        baseEl: li,
        menu: ul
      })
    })
    li.addEventListener('mouseout', (e: MouseEvent) => {
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

const layoutMenuPositionEffect = ({
  baseEl,
  menu
}: { [key: string]: HTMLElement }): void => {
  const { menu: baseMenu } = baseEl['_state']
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
