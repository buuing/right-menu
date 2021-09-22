import './theme/index.js'
import { ItemType } from './types'
import { initMenu } from './utils'

export default class RightMenu {
  constructor (el: string, options: ItemType[]) {
    const dom = document.querySelector(el)
    dom?.addEventListener('contextmenu', e => {
      initMenu(e as MouseEvent, options)
    })
  }
}
