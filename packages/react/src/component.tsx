import React, { CSSProperties, memo, useEffect,useRef } from 'react'
import type { ReactElement } from 'react'
import RightMenu, { default as Menu, ConfigType, OptionsType } from '@right-menu/core'


interface Props {
  options: OptionsType; // 菜单选项
  config: ConfigType; // 高级配置
  children: ReactElement;
  style?: CSSProperties
  className?: string
}
const RightMenuComponent: React.FC<Props> = (props) => {
  const { options, config, children, style, className, ...otherProps } = props;

  const contentRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<RightMenu>()

  // 子元素的更换对右键菜单的调起不影响，因此初始化即可
  useEffect(() => {
    if (contentRef.current) {
      menuRef.current = new Menu({
        el: contentRef.current
      }, options)
    }

    return () => {
      if (menuRef.current) {
        menuRef.current.destroyMenu()
        menuRef.current = undefined
      }
    }
  }, [])


  return (
    // 这里有个问题，就是react不能轻易拿到chidren的dom节点
    // 有ReactDOM.findDOMNode，但是对函数组件不能使用；也不推荐使用：https://zh-hans.reactjs.org/docs/react-dom.html#finddomnode
    // 因此使用div包裹作为当前方案，若有更好的解决方案，还请issue；也欢迎讨论，感谢！
    <div style={style} ref={contentRef} className={className}>
      {children}
    </div>
  )
}

export default memo(RightMenuComponent)
