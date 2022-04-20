
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

<div id="react-esm-demo"></div>


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

<script>
  new MiniSandbox({
    el: '#react-esm-demo',
    files: {
      'app.jsx': {
        defaultValue: `import React from 'react'
import ReactDOM from 'react-dom'
import RightMenu from '@right-menu/react'

function App () {
  const options = [{
    type: 'li', // type为li是普通按钮
    text: '复制(C)', // 按钮的名称
    callback: () => alert('点击了复制') // 回调函数
  }]
  return <div>
    <RightMenu options={options}>
      <div style={{ height: '100px', background: '#ccc' }}>
        点击右键
      </div>
    </RightMenu>
  </div>
}

ReactDOM.render(<App />, document.getElementById("root"))
`,
        importMap: {
          "imports": {
            "react": "https://ga.jspm.io/npm:react@17.0.2/index.js",
            "react-dom": "https://ga.jspm.io/npm:react-dom@17.0.2/index.js",
            "@right-menu/react": "https://cdn.jsdelivr.net/npm/@right-menu/react@0.0.5/dist/index.esm.js"
          },
          "scopes": {
            "https://ga.jspm.io/": {
              "object-assign": "https://ga.jspm.io/npm:object-assign@4.1.1/index.js",
              "scheduler": "https://ga.jspm.io/npm:scheduler@0.20.2/index.js",
              "scheduler/tracing": "https://ga.jspm.io/npm:scheduler@0.20.2/tracing.js"
            }
          }
        }
      },
    },
    loaders: {
      '.jsx': SandboxReactLoader
    },
    defaultConfig: {
      height: '460px',
      editorWidth: '58%'
    }
  })
</script>