
### 通过 import 使用 (React)

#### 1. 安装插件

```shell
# 通过 npm 安装
npm install @right-menu/react

# 通过 yarn 安装
yarn add @right-menu/react
```

#### 2. 使用插件

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
    return <RightMenu options={options}>
      <div style="height: 300px; background-color: #ccc"></div>
    </RightMenu>
  }
}
```

<br />

### 通过 script 标签使用 (React)

```html
<script src="https://cdn.jsdelivr.net/npm/@right-menu/react/dist/index.umd.js"></script>
```
