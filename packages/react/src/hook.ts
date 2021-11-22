import { useEffect,useRef } from 'react';
import { default as Menu, ConfigType as OringinConfigType, OptionsType } from '@right-menu/core';

export type ConfigType = Omit<OringinConfigType,'el'>;

export function useRightMenu<T extends HTMLElement = HTMLDivElement>(
  config: ConfigType,
  options: OptionsType,
):React.MutableRefObject<T|null> {
  const domRef = useRef<T>(null);
  useEffect(()=>{
    const menu = new Menu({
      ...config,
      el: domRef.current as HTMLElement
    },options);
    return ()=>{
      menu.destroyMenu();
    }
  },[]);
  return domRef;
}
