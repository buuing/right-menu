import { getOperatSystem } from '../utils/system'

import './index.less'
import './theme-mac.less'
import './theme-win10.less'

// const watchSystemThemeChange = () => {
//   const rootElement = document.querySelector(':root')
//   rootElement &&
//     rootElement.setAttribute(
//       'style',
//       systemTheme.matches ? systemDarkTheme : systemLightTheme,
//     )
// }

// // 先判断下当前系统的主题
// watchSystemThemeChange()

// systemTheme.addEventListener('change', watchSystemThemeChange)

export const OperatSystem = getOperatSystem()
