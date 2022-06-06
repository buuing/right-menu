
# 高级配置

### 不同框架如何配置?

!> 假设我要配置`theme`属性

<div id="my-sandbox"></div>

<br />

### el 绑定的元素

- 类型: `string` | `HTMLElement`
- 可选值: `'#box'` | `document.querySelector('#box')` | `window`
- 必填项

!> 简写时只能接受一个字符串类型, 如果你想传入一个`dom`元素, 请你使用完整写法


```html [index.html]
<div class="right-menu">点击右键</div>

<script>
  const options = [{ type: 'li', text: '测试111' }]

  // 简写 (我内部会执行 document.querySelector 方法)
  new RightMenu('.right-menu', options)

  // 完整写法
  // new RightMenu({
  //   el: '.right-menu',
  //   el: document.querySelector('.right-menu'),
  //   el: window,
  // }, options)
</script>
```

<br />

### theme 主题样式

- 类型: `string`
- 可选值: `'win10'` | `'mac'`
- 默认值: 无 (非必填)

**默认主题样式是根据操作系统自动切换样式的**, 但是你可以通过`theme`属性来指定一个固定的主题, 比如你希望无论是在 windows 还是 mac 上都展示 mac 的主题样式, 那你可以设置`theme: 'mac'`


```html [index.html]
<div class="right-menu demo1">win10主题</div>
<br />
<div class="right-menu demo2">mac主题</div>

<script>
  const options = [{ type: 'li', text: '测试111' }]

  // 指定主题样式为win10
  new RightMenu({
    el: '.demo1',
    theme: 'win10'
  }, options)

  // 指定主题样式为mac
  new RightMenu({
    el: '.demo2',
    theme: 'mac'
  }, options)
</script>
```

<br />

### minWidth 最小宽度

- 类型: `string`
- 可选值: `'200px'` | `'5rem'` | `'2vw'`
- 默认值: 无 (非必填)

该属性可以设置菜单栏的最小宽度, 如果你的某个菜单栏文字内容非常少, 菜单栏的宽度同样也会变得非常小

```html [index.html]
<div class="right-menu">点击右键</div>

<script>
  const options = [{ type: 'li', text: '哈哈' }]

  new RightMenu({
    el: '.right-menu',
    minWidth: 'auto'
  }, options)
</script>
```

<br />

### maxWidth 最大宽度

- 类型: `string`
- 可选值: `'200px'` | `'5rem'` | `'2vw'`
- 默认值: 无 (非必填)

该属性可以设置菜单栏的最大宽度, 当文字长度超出最大宽度时, 会以这个形式展现: `'这是一段很长很长很长很...'`

```html [index.html]
<div class="right-menu">点击右键</div>

<script>
  const options = [{
    type: 'li',
    text: '这是一段很长很长很长很长的文字'
  }]

  new RightMenu({
    el: '.right-menu',
    maxWidth: '200px'
  }, options)
</script>
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

<script>
  new MiniSandbox({
    el: '#my-sandbox',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `<script>
  new RightMenu({
    el: '#box',
    theme: 'mac' // 在js中设置theme属性
  }, options)
<\/script>
`,
      },
      'App.vue': {
        title: 'Vue',
        defaultValue: `<template>
  <right-menu :options="options" theme="mac"><!-- 在vue中设置theme属性 -->
    <div>hello</div>
  </right-menu>
</template>
`,
      },
      'App.jsx': {
        title: 'React',
        defaultValue: `render () {
  return <RightMenu options={options} theme="mac">{/* 在react中设置theme属性 */}
    <div>hello</div>
  </RightMenu>
}
`,
      }
    },
    defaultConfig: {
      editorRange: '100%',
      draggable: false,
    },
    loaders: {
      '.html': () => {},
      '.vue': () => {},
      '.jsx': () => {},
    }
  })
</script>
