
export interface ItemType extends AttrsType {
  type: 'li' | 'ul' | 'hr'
  text: string
  disabled?: boolean
  children?: ItemType[]
  callback: EventListener
}

export interface AttrsType {
  class?: string,
  style?: string
}
