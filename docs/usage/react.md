
### 通过 import 使用 (React)

#### 1. 安装插件

```shell
# 通过 npm 安装
npm install @right-menu/react@0.0.5

# 通过 yarn 安装
yarn add @right-menu/react@0.0.5
```

#### 2. 使用插件

!> `<RightMenu>`组件只能包裹普通 dom 标签或 class 组件, **如果是 function 组件则需要套一个 dom 标签**

```jsx
import React from 'react'
import RightMenu from '@right-menu/react'

export default class Demo extends React.Component {
  render () {
    const options = [{
      type: 'li', // type为li是普通按钮
      text: '复制(C)', // 按钮的名称
      callback: () => alert('点击了复制') // 回调函数
    }]
    return <RightMenu theme="mac" options={options}>
      <div style="height: 300px; background-color: #ccc"></div>
    </RightMenu>
  }
}
```

<br />

### 通过 script 标签使用 (React) 不推荐

```html
<div id="root"></div>
<!-- react -->
<script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
<!-- 引入 right-menu -->
<script src="https://cdn.jsdelivr.net/npm/@right-menu/react@0.0.5"></script>
<script type="text/babel">
  function Test () {
    return (
      <div>
        <RightMenu.default theme="mac" options={[
          { type: 'li', text: 'win10' }
        ]}>
          <div style={{ height: '200px', background: '#ccc' }}>hello RightMenu</div>
        </RightMenu.default>
      </div>
    )
  }
  ReactDOM.render(
    <React.StrictMode>
      <Test />
    </React.StrictMode>,
    document.getElementById('root')
  )
</script>
```
