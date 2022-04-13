
# 官方示例 - Examples

?> 提供一些比较常见的应用场景, 如果你有其他的想法, 欢迎通过 PR / ISSUES 提交

### 如何传递参数

你可以写一个 function 来给不同的区域传参

```html [index.html]
<div class="right-menu demo1">测试区域1</div>
<br />
<div class="right-menu demo2">测试区域2</div>

<script>
  const getOptions = (msg) => [
    {
      type: 'li',
      text: '点我',
      callback: () => alert('你点击了' + msg)
    },
  ]
  new RightMenu('.demo1', getOptions('区域1'))
  new RightMenu('.demo2', getOptions('区域2'))
</script>
```

<br />

### 多级菜单

这里我借助递归生成了 100 级菜单, 但是实际使用一般不会超过三级菜单

```html [index.html]
<div class="right-menu">点击右键</div>

<script>
  const options = [
    {
      type: 'ul',
      text: '100',
      children: dfs(99)
    },
  ]
  new RightMenu({
    el: '.right-menu',
    minWidth: 'auto'
  }, options)
  // 生成 n 级菜单
  function dfs (max) {
    if (max === 0) return null
    return [{
      text: max,
      type: 'ul',
      children: dfs(max - 1)
    }]
  }
</script>
```

<br />

### 异步渲染菜单

这里我使用 `Promise` + `setTimeout` 来模拟接口异步请求

```html [index.html] { js: "" }
<div class="right-menu">点击右键</div>

<script>
  new RightMenu('.right-menu', async () => {
    const res = await http('xxx')
    return res
  })
  // 模拟异步请求接口数据
  function http() {
    return new Promise(resolve => {
      setTimeout(_ => resolve(
        [{
          type: 'li',
          text: '异步 800ms',
          callback: () => {}
        }]
      ), 800)
    })
  }
</script>
```
