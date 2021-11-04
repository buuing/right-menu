
# options 菜单选项

你可以把 options 理解为一个`n叉树`, 每一个节点都具有以下属性

| 节点属性 | type | text | callback | disabled | children | class | style | icon |
| :-:     |  :-: |  :-: |  :-:     |  :-:     |  :-:     |  :-:  |  :-:  | :-:  |
| 普通节点  | li   |  √   |  √       |   √      |     ×    |   √   |   √   |  -   |
| 多级菜单  | ul   |  √   |  ×       |   √      |     √    |   √   |   √   |  -   |
| 分割线    | hr   |  ×   |  ×       |   ×      |     ×    |   √   |   √   |  -   |

!> 其中`type`属性为必填项, 因为我会根据每个节点的`type`类型, 来区分渲染的内容

<br />

## 普通节点

- **`type = 'li'`**
  - `text: string` 节点显示的文字内容
  - `callback?: Function` 节点被点击时, 触发回调函数
  - `disabled?: boolean` 节点是否被禁用, 禁用之后回调函数不会触发
  - `class?: string` 额外添加的类名
  - `style?: string` 额外添加的样式

```js
const options = [
  { type: 'li', text: '普通节点' },
  {
    type: 'li',
    text: '可以点击的节点',
    callback: () => alert('Hello RightMenu')
  },
  {
    type: 'li',
    text: '可以跳转的节点',
    callback: () => window.location.href = 'https://100px.net'
  },
  {
    type: 'li',
    text: '被禁用的节点',
    disabled: true
  },
]
```

<br />


## 多级菜单

- `type = 'ul'`
  - `text: string` 节点显示的文字内容
  - `disabled?: boolean` 节点是否被禁用, 禁用之后回调函数不会触发
  - `children?: Array<object>` 用来渲染多级菜单
  - `class?: string` 额外添加的类名
  - `style?: string` 额外添加的样式

```js
// children 可以无限向下渲染子菜单, 但是估计没人用得到吧
const options = [
  {
    type: 'ul',
    text: '一级菜单',
    children: [{
      type: 'ul',
      text: '二级菜单',
      children: [{
        type: 'li',
        text: '三级菜单',
        children: []
      }]
    }]
  }
]
```

<br />

## 分割线

分割线只是充当一个摆件的作用, 所以他不需要任何属性, 但是你依然可以通过`class`或者`style`来改变他的样式

- `type = 'hr'`
  - `class?: string` 额外添加的类名
  - `style?: string` 额外添加的样式

```js
// 你最好不要把分割线放在开头或者结尾, 因为那样会很丑
const options = [
  { type: 'li', text: '普通节点' },
  { type: 'hr' }, // 分割线
  { type: 'li', text: '普通节点' },
]
```

