const userAgent = navigator.userAgent

export const isWin =
  navigator.platform === 'Win32' || navigator.platform === 'Windows'
export const isMac =
  navigator.platform === 'Mac68K' ||
  navigator.platform === 'MacPPC' ||
  navigator.platform === 'Macintosh' ||
  navigator.platform === 'MacIntel'

export const isUnix = navigator.platform === 'X11' && !isWin && !isMac
export const isLinux = String(navigator.platform).indexOf('Linux') > -1

export const isWin2000 =
  userAgent.indexOf('Windows NT 5.0') > -1 ||
  userAgent.indexOf('Windows 2000') > -1
export const isWinXP =
  userAgent.indexOf('Windows NT 5.1') > -1 ||
  userAgent.indexOf('Windows XP') > -1
export const isWin2003 =
  userAgent.indexOf('Windows NT 5.2') > -1 ||
  userAgent.indexOf('Windows 2003') > -1
export const isWinVista =
  userAgent.indexOf('Windows NT 6.0') > -1 ||
  userAgent.indexOf('Windows Vista') > -1
export const isWin7 =
  userAgent.indexOf('Windows NT 6.1') > -1 ||
  userAgent.indexOf('Windows 7') > -1

export const isWin8 =
  userAgent.indexOf('Windows NT 8') > -1 || userAgent.indexOf('Windows 8') > -1
export const isWin10 =
  userAgent.indexOf('Windows NT 10') > -1 ||
  userAgent.indexOf('Windows 10') > -1

export const getOperatSystem = () => {
  const osList = {
    isWin10,
    isMac,
    isWin7,
    isWin8,
    isWin2003,
    isWin2000,
    isWinXP,
    isWinVista,
    isWin,
    isUnix,
    isLinux,
  }
  for (const key in osList) {
    if (osList[key]) {
      return key
    }
  }
  // 如果没有对应的主题样式，默认引入mac的样式
  return 'isMac'
}
