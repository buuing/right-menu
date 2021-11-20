
# 高级配置

### 不同框架如何配置?

!> 假设我要配置`theme`属性

>> 在 JS 中使用
```js
new RightMenu({
  el: '#box',
  theme: 'mac'
}, options)
```

>> 在 Vue 中使用
```html
<right-menu :options="options" theme="mac">
  <div>hello<div>
</right-menu>
```

>> 在 React 中使用
```jsx
render () {
  return <RightMenu options={options} theme="mac">
    <div>hello</div>
  </RightMenu>
}
```

<br />

### el 绑定的元素

- 类型: `string` | `HTMLElement`
- 可选值: `'#box'` | `document.querySelector('#box')` | `window`
- 必填项

!> 简写时只能接受一个字符串类型, 如果你想传入一个`dom`元素, 请你使用完整写法

```js
// 简写 (我内部会执行 document.querySelector() 方法)
new RightMenu('#box', options)

// 完整写法
new RightMenu({
  // el: '#box'
  // el: document.querySelector('#box')
  // el: window
}, options)
```

<br />

### theme 主题样式

- 类型: `string`
- 可选值: `'win10'` | `'mac'`
- 默认值: 无 (非必填)

默认主题样式是根据操作系统自动切换样式的, 但是你可以通过`theme`属性来指定一个固定的主题, 比如你希望无论是在 windows 还是 mac 上都展示 mac 的主题样式, 那你可以设置`theme: 'mac'`

```js
new RightMenu({
  el: '#box',
  theme: 'mac'
}, options)
```

<br />

### minWidth 最小宽度

- 类型: `string`
- 可选值: `'200px'` | `'5rem'` | `'2vw'`
- 默认值: 无 (非必填)

该属性可以设置菜单栏的最小宽度, 如果你的某个菜单栏文字内容非常少, 菜单栏的宽度同样也会变得非常小

```js
new RightMenu({
  el: '#box',
  minWidth: '180px'
}, options)
```

<br />

### maxWidth 最大宽度

- 类型: `string`
- 可选值: `'200px'` | `'5rem'` | `'2vw'`
- 默认值: 无 (非必填)

该属性可以设置菜单栏的最大宽度, 当文字长度超出最大宽度时, 会以这个形式展现: `'这是一段很长很长很长很...'`

```js
new RightMenu({
  el: '#box',
  maxWidth: '500px'
}, options)
```

<br />

### beforeInit 初始化前

- 类型: `Function`

```js
new RightMenu({
  el: '#box',
  beforeInit: function() {
    console.log('初始化前...')
  }
}, options)
```

<br />

### afterInit 初始化后

- 类型: `Function`

```js
new RightMenu({
  el: '#box',
  afterInit: function() {
    console.log('初始化后...')
  }
}, options)
```


<!-- - el
- maxLevel 可以指定最大渲染到几级菜单
- include?: string[] | RegExp // 包含的元素
- exclude?: string[] | RegExp // 排除的元素
- defaultProps
- beforeShow?: Function // 显示菜单前
- afterShow?: Function // 显示菜单后
- beforeHide?: Function // 隐藏菜单前
- afterHide?: Function // 隐藏菜单后 -->