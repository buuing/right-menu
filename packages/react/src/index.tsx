export { default as default } from './component'
export { useRightMenu } from './hook'

/*

component组件的使用方式：

import RightMenu from '@right-menu/react'

const options = [
  {
    { type: 'li', text: '普通节点' },
    { type: 'hr' },
    { type: 'li', text: '普通节点' },
  }
]

<RightMenu options={options} theme="mac" onAfterInit={() => {}}>...</RightMenu >

*/

