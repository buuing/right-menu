import React, { memo, useEffect,useRef } from 'react'
import type {ReactElement} from 'react'
import RightMenu from '@right-menu/core'
import { ConfigType,  OptionsType} from "@right-menu/core/src/types";
type IReactRightMenuProps = {
  options: OptionsType,
  config: ConfigType
  children: ReactElement,
}
const ReactRightMenu = memo((props:IReactRightMenuProps)=> {
  const {options,config,children,...otherProps} = props;
  const myRef = useRef<HTMLElement>()
  useEffect(()=>{
    new RightMenu({
      el: myRef.current as HTMLElement
    }, props.options)
  },[myRef])
  return (
    <>
      {
        React.Children.map(children, (element:any) => {
          return (React.createElement('div', { ref: myRef, ...otherProps }, element))
        })
      }
    </>
  )
})

export default ReactRightMenu
