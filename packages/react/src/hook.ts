import { useEffect, useRef } from 'react'
import { default as Menu, ConfigType as OringinConfigType, OptionsType } from '@right-menu/core'

export type ConfigType = Omit<OringinConfigType, 'el'>

function useRightMenu<T extends HTMLElement>(config: ConfigType, options: OptionsType): React.MutableRefObject<T | null> {
  const domRef = useRef<T>(null)
  // 如果没有输入第二个参数, 我就认为第一个参数是 options
  if (!options) {
    options = config as OptionsType
    config = {}
  }
  useEffect(() => {
    const menu = new Menu({
      ...config,
      el: domRef.current as HTMLElement
    }, options)
    return () => {
      menu.destroyMenu()
    }
  }, [])
  return domRef
}

export { useRightMenu }
