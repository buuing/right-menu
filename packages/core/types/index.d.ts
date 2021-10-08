declare type HrType = {
    type: 'hr';
};
declare type LiType = {
    type: 'li';
    text: string;
    disabled?: boolean;
    callback: EventListener;
};
declare type UlType = {
    type: 'ul';
    text: string;
    disabled?: boolean;
    children: ItemType[];
};
interface AttrsType {
    class?: string;
    style?: string;
}
declare type ItemType = AttrsType & (HrType | LiType | UlType);
declare type ConfigType = {
    el: string;
    theme?: string;
    beforeInit?: Function;
    afterInit?: Function;
    beforeShow?: Function;
    afterShow?: Function;
    beforeHide?: Function;
    afterHide?: Function;
};

declare class RightMenu {
    private menu;
    private config;
    private eventList;
    constructor(config: ConfigType, options: ItemType[] | ((e: Event, config: ConfigType) => ItemType[] | Promise<ItemType[]>));
    /**
     * 初始化菜单栏
     * @param { Event } e 事件参数
     * @param { object[] | Promise<object[]> } thenable 菜单列表
     * @returns { void }
     */
    initMenu(e: MouseEvent, thenable: ItemType[] | Promise<ItemType[]>): Promise<void>;
    /**
     * 渲染菜单栏
     * @param { object[] } options
     * @returns { HTMLElement }
     */
    renderMenu(options: ItemType[]): HTMLElement;
    /**
     * 销毁菜单栏
     * @returns { void }
     */
    destroyMenu(): void;
    /**
     * 添加事件
     * @param { Window | Document } target 目标事件源
     * @param { string } eventName 事件名称
     * @param { Function } callback 事件回调
     * @returns { void }
     */
    addEvent(target: Window | Document, eventName: string, callback: LiType['callback']): void;
    /**
     * 移除所有事件
     * @returns { void }
     */
    removeEvent(): void;
    /**
     * 渲染dom
     * @param { String } [ tagName = 'ul' ] 元素名称
     * @param { Object } [ attrs = {} ] 元素属性对象
     * @param { Array } [ children = [] ] 子元素集合
     * @returns { HTMLElement }
     */
    createDom(tagName?: string, attrs?: AttrsType, children?: Array<HTMLElement | string>): HTMLElement;
    createHr<T extends ItemType & {
        type: 'hr';
    }>(opt: T): HTMLElement;
    createLi<T extends ItemType & {
        type: 'li';
    }>(opt: T): HTMLElement;
    createUl<T extends ItemType & {
        type: 'ul';
    }>(opt: T): HTMLElement;
}

export { RightMenu as default };
