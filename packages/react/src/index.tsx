import React, { memo, useEffect,useRef } from 'react'
import type {ReactElement} from 'react'
import RightMenu from '@right-menu/core'

type IReactRightMenuProps = {
  options: any,// TODO 引入core包type
  children: ReactElement
}
const ReactRightMenu = memo((props:IReactRightMenuProps)=> {
  const myRef = useRef<HTMLElement>()
  useEffect(()=>{
    new RightMenu({
      el: myRef.current as HTMLElement
    }, props.options)
  },[myRef])
  return (
    <>
      {
        React.Children.map(props.children, (element:any) => {
          return (React.createElement('div', { className: 'container', ref: myRef }, element))
        })
      }
    </>
  )
})

export default ReactRightMenu
