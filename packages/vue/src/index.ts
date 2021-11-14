import { isVue2 } from 'vue-demi'
import RightMenu from './component'
import initDirective, { NewConfigType, NewOptionsType } from './directive'

const install = (app: any, config: NewConfigType = {}, options?: NewOptionsType) => {
  app.component('RightMenu', RightMenu)
  app.directive('menu', {
    bind: (el: HTMLElement, binding: any) => initDirective(el, binding, config, options),
    beforeMounted: (el: HTMLElement, binding: any) => initDirective(el, binding, config, options)
  })
}

if (typeof window !== 'undefined' && (window as any).Vue && isVue2) {
  install((window as any).Vue)
}

export {
  RightMenu,
  install,
  install as default
}
