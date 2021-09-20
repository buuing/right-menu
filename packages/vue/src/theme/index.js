
import { systemDarkTheme, systemLightTheme } from '../config/index'

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

const watchSystemThemeChange = () => {
  const rootElement = document.querySelector(':root')
  rootElement && rootElement.setAttribute('style', systemTheme.matches ? systemDarkTheme : systemLightTheme)
}
// 先判断下当前系统的主题
watchSystemThemeChange()

systemTheme.addEventListener('change', watchSystemThemeChange)
