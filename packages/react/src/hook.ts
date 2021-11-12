import { useEffect,useRef } from 'react';
import { default as Menu, ConfigType, OptionsType } from '@right-menu/core';

export function useRightMenu<T extends HTMLElement = HTMLDivElement>(
  options: OptionsType,
  config: Omit<ConfigType,'el'>,
):React.MutableRefObject<Element|undefined>  {
  const domRef = useRef<T>();
  useEffect(()=>{
    new Menu({
      ...config,
      el: domRef.current as HTMLElement
    },options)
  },[]);
  return domRef;
}
