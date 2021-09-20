export default (event, options = [], router) => {
  return [
    {
      type: 'li',
      text: '首页',
      callback: () => router.push('/')
    },
    {
      type: 'ul',
      text: `使用`,
      children: [
        {
          type: 'li',
          text: '在 JS 中使用',
          callback: () => router.push('/usage/js')
        },
        {
          type: 'li',
          text: '在 Vue 中使用',
          callback: () => router.push('/usage/vue')
        },
        {
          type: 'li',
          text: '在 React 中使用',
          callback: () => router.push('/usage/react')
        },
        {
          type: 'li',
          text: '在 Electron 中使用',
          disabled: true
        },
      ]
    },
    {
      type: 'li',
      text: '文档',
      callback: () => router.push('/docs')
    },
    { type: 'hr' },
    {
      type: 'ul',
      text: `关于 right-menu`,
      children: [
        {
          type: 'li',
          text: `version 2.0.3`,
          disabled: true
        },
        { type: 'hr' },
        {
          type: 'li',
          text: 'Github 仓库',
          callback: async () => window.open('https://github.com/buuing/right-menu')
        },
        {
          type: 'li',
          text: 'Bug 反馈',
          callback: () => window.open('https://github.com/buuing/right-menu/issues/new')
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
          callback: () => window.open('https://github.com/buuing/right-menu/blob/master/LICENSE')
        }
      ]
    }
  ]
}
