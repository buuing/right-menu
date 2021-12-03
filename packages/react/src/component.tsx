import React, { memo, useEffect, useRef } from 'react'
import type { ReactElement } from 'react'
import RightMenu, { default as Menu, ConfigType, OptionsType } from '@right-menu/core'

interface Props {
  options: OptionsType
  theme: ConfigType['theme']
  minWidth: ConfigType['minWidth']
  maxWidth: ConfigType['maxWidth']
  onBeforeInit: ConfigType['beforeInit']
  onAfterInit: ConfigType['afterInit']
  children: ReactElement
}

const RightMenuComponent: React.FC<Props> = (props) => {
  const { options, children, ...config } = props
  const menuRef = useRef<RightMenu[]>([])
  const childrenRef = useRef<any[]>([])
  // 子元素的更换对右键菜单的调起不影响，因此初始化即可
  useEffect(() => {
    // 兼容有一个子元素/多个子元素的情况
    if (childrenRef.current && childrenRef.current.length) {
      childrenRef.current.forEach((item, index) => {
        menuRef.current[index] = new Menu({
          ...config,
          el: item
        }, options)
      })
    }
    return () => {
      if (menuRef.current && menuRef.current.length) {
        menuRef.current.forEach(item => {
          item.destroyMenu()
        })
        menuRef.current.length = 0
        // console.warn('RightMenu组件因参数变动，触发了刷新；若非主动修改传入参数，建议将参数通过state/memo等方式保存，以减少RightMenu组件的重新构建')
      }
    }
  }, [options, config])
  return (
    <>
      { React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { ref: (element: any) => childrenRef.current[index] = element })
      })}
    </>
  )
}

export default memo(RightMenuComponent)
