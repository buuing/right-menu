const { navZh, navEn } = require('./config/nav.js')
const { sidebarZh, sidebarEn } = require('./config/sidebar.js')
const headConfig = require('./config/head.js')
const plugins = require('./config/plugins.js')

module.exports = {
  base: '/right-menu/',
  head: headConfig,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'right-menu 右键菜单插件',
      description: 'right-menu 右键菜单插件'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: '',
    //   description: ''
    // }
  },
  themeConfig: {
    mode: 'light',
    noFoundPageByTencent: false,
    modePicker: false,
    nextLinks: false,
    prevLinks: false,
    subSidebar: 'auto',
    locales: {
      '/': {
        nav: navZh,
        sidebar: sidebarZh,
        sidebarDepth: 3,
      },
      '/en/': {
        nav: navEn,
        sidebar: sidebarEn,
        sidebarDepth: 3,
      }
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
  },
  plugins,
  markdown: {
    lineNumbers: true
  },
}
