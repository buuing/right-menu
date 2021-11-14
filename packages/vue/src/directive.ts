import RightMenu from '@right-menu/core'
import type { ConfigType as OldConfigType, OptionsType } from '@right-menu/core'

export type NewConfigType = Omit<OldConfigType, 'el'>
export type NewOptionsType = (el: HTMLElement, val: OptionsType) => OptionsType

function getType<T>(val: unknown): string {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}

export default function initDirective(
  el: HTMLElement,
  binding: any,
  config: NewConfigType,
  options?: NewOptionsType
): void {
  // 处理 config
  if (getType(config) !== 'object') config = {}
  // 处理 options
  new Promise<OptionsType>(resolve => {
    if (typeof options === 'function') {
      Promise.resolve(options(el, binding.value)).then(resolve)
    } else if (!options) {
      resolve(binding.value)
    } else {
      resolve(options)
    }
  }).then(options => {
    new RightMenu({
      ...config,
      el
    }, options)
  })
}
