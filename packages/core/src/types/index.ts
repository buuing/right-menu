
export type HrType = {
  type: 'hr'
}

export type LiType = {
  type: 'li'
  text: string
  disabled?: boolean
  callback: EventListener
}

export type UlType = {
  type: 'ul'
  text: string
  disabled?: boolean
  children: ItemType[]
}

export interface AttrsType {
  class?: string,
  style?: string
}

export type ItemType = AttrsType & (
  HrType | LiType | UlType
)

export type ConfigType = {
  el: string
  theme?: string // 主题样式, 默认为auto
  beforeInit?: Function // 初始化前
  afterInit?: Function // 初始化后
  beforeShow?: Function // 显示菜单前
  afterShow?: Function // 显示菜单后
  beforeHide?: Function // 隐藏菜单前
  afterHide?: Function // 隐藏菜单后
}

type RequireKeys = 'el'

export enum LayoutMenuDirection {
  Left = -1,
  Right = 1
}
