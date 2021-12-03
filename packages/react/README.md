
# 一个基于react的右键菜单插件

## 官网

- [官方文档 - 首页](https://buuing.github.io/right-menu/)

## 通过 import 使用

### 安装

```shell
npm i @right-menu/react
```

### 使用

```jsx
import RightMenu from '@right-menu/react'

render () {
  return <RightMenu options={[{
    type: 'li',
    text: 'Hello RightMenu',
  }]}>
    <div style="height: 300px; background: #ccc">测试右键菜单</div>
  </RightMenu>
}
```

```jsx
import { useRightMenu } from '@right-menu/react'

function App(){
  const menuRef = useRightMenu([
    {
      type: 'li',
      text: 'Hello RightMenu'
    }
  ])
  return <div ref={menuRef}>测试右键菜单</div>
}
```
