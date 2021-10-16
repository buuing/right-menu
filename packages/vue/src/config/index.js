
export const defaultOptions = [{
  type: 'ul',
  text: '关于 ${}',
  children: [
    {
      type: 'li',
      text: 'version ${}',
      disabled: true
    },
    { type: 'hr' },
    {
      type: 'li',
      text: 'Github 仓库',
      callback: async () => window.open('https://github.com/buuing/vue-right-menu')
    },
    {
      type: 'li',
      text: 'Bug 反馈',
      callback: () => window.open('https://github.com/buuing/vue-right-menu/issues/new')
    },
    { type: 'hr' },
    {
      type: 'li',
      text: '入门教程',
      disabled: true
    },
    {
      type: 'li',
      text: '高级配置',
      disabled: true
    },
    { type: 'hr' },
    {
      type: 'li',
      text: '查看历史更新',
      disabled: true
    },
    { type: 'hr' },
    {
      type: 'li',
      text: '📋 开源协议 License MIT',
      callback: () => window.open('https://github.com/buuing/vue-right-menu/blob/master/LICENSE')
    }
  ]
}]