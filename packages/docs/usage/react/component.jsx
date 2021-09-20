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
