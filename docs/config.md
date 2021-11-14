
# 高级配置

### 如何使用高级配置

!> 假设我要使用高级配置的`theme`属性

>> 在 JS 中使用
```js
new RightMenu({
  el: '#box',
  theme: 'mac'
}, options)
```

>> 在 Vue 中使用
```html
<RightMenu :options="options" theme="mac">
  <div>hello<div>
</RightMenu>
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

### theme 主题样式

- 类型: `string`
- 可选值: `'win10'` | `'mac'`
- 默认值: 无 (非必填)

默认主题样式是根据操作系统自动切换样式的, 但是你可以通过`theme`属性来指定一个固定的主题, 比如你希望无论是在 windows 还是 mac 上都展示 mac 的主题样式, 那你可以设置`theme: 'mac'`

<br />

### minWidth 最小宽度

- 类型: `string`
- 可选值: `'200px'` | `'5rem'` | `'2vw'`
- 默认值: 无 (非必填)

该属性可以设置菜单栏的最小宽度, 如果你的某个菜单栏文字内容非常少, 菜单栏的宽度同样也会变得非常小

<br />

### maxWidth 最大宽度

- 类型: `string`
- 可选值: `'200px'` | `'5rem'` | `'2vw'`
- 默认值: 无 (非必填)

该属性可以设置菜单栏的最大宽度, 当文字长度超出最大宽度时, 会以这个形式展现: `'这是一段很长很长很长很...'`

<br />

<!-- - el
- maxLevel 可以指定最大渲染到几级菜单
- include?: string[] | RegExp // 包含的元素
- exclude?: string[] | RegExp // 排除的元素
- defaultProps
- beforeInit?: Function // 初始化前
- afterInit?: Function // 初始化后
- beforeShow?: Function // 显示菜单前
- afterShow?: Function // 显示菜单后
- beforeHide?: Function // 隐藏菜单前
- afterHide?: Function // 隐藏菜单后 -->