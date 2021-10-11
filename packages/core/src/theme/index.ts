
import { systemDarkTheme, systemLightTheme,  skeletonColorLight, skeletonColorDark } from '../config/index'
import { getOperatSystem } from '../utils/system'

import './index.less'
import './theme-mac.less'
import './theme-win10.less'

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

let skeletonColor: Array<string>

const watchSystemThemeChange = () => {
  const rootElement = document.querySelector(':root')
  rootElement && rootElement.setAttribute('style', systemTheme.matches ? systemDarkTheme : systemLightTheme)
  skeletonColor = systemTheme.matches ? skeletonColorDark : skeletonColorLight
}
// 先判断下当前系统的主题
watchSystemThemeChange()

systemTheme.addEventListener('change', watchSystemThemeChange)

export {
  skeletonColor
}

