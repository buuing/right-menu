
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
