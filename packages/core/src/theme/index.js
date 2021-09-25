
import { systemDarkTheme, systemLightTheme } from '../config/index'
import { getOperatSystem } from '../utils/system'

import './index.less'
// import './theme-mac.less'

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

const watchSystemThemeChange = () => {
  const rootElement = document.querySelector(':root')
  rootElement && rootElement.setAttribute('style', systemTheme.matches ? systemDarkTheme : systemLightTheme)
}
// 先判断下当前系统的主题
watchSystemThemeChange()

systemTheme.addEventListener('change', watchSystemThemeChange)

// // 添加的主题都按照theme-mac.less theme-win10.less theme-win8.less 的方式来命名
// // [TODO:] 还有一些主题样式暂时缺失，所以这里 try catch 下
try {
  require('./theme-' + getOperatSystem().toLowerCase().replace(/is/, '') + '.less')
} catch (e) {
  require('./theme-mac.less')
}
