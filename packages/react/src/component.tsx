import React, { memo, useEffect,useRef } from 'react'
import type { ReactElement } from 'react'
import { default as Menu, ConfigType, OptionsType } from '@right-menu/core'

const RightMenu = memo((props: {
  options: OptionsType,
  config: ConfigType
  children: ReactElement,
}) => {
  const { options, config, children, ...otherProps } = props;
  const myRef = useRef<HTMLElement>()
  useEffect(() => {
    new Menu({
      el: myRef.current as HTMLElement
    }, props.options)
  }, [myRef])
  return (
    <>
      {
        React.Children.map(children, (element: any) => {
          return (React.createElement('div', { ref: myRef, ...otherProps }, element))
        })
      }
    </>
  )
})

export default RightMenu
