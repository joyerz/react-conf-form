/**
 * return promise that resolve it later after duration seconds
 * @param duration (seconds)
 * @return {Promise}
 */
export const delay = (duration: number = 1): Promise<any> => new Promise(reslove => {
  setTimeout(() => reslove(), duration * 1000)
})

/**
 * promise 检查条件成立后返回resolve
 * @param condition
 * @param times
 * @return {Promise}
 */
export const isReady = (condition: () => boolean, times = 0): Promise<any> =>
  new Promise(resolve => {
    let count = 0
    const checkReady = () => {
      if (condition()) {
        resolve()
      } else {
        count += 1
        if (times === 0) {
          setTimeout(checkReady, 200)
        } else if (count < times) {
          setTimeout(checkReady, 200)
        }
      }
    }
    checkReady()
  })

/**
 * @param  target {array} 拆分目标值
 * @return {array}
 */
export function getSelectItems(target: any): Array<any> {
  const alarmRulesItems: any[] = []
  Object.keys(target).forEach(k => alarmRulesItems.push({ label: target[ k ], value: k }))
  return alarmRulesItems
}

/**
 *  下划线转驼峰
 * @param name
 */
export const underScoreToCamel = (name: string): string => name
  .split('_')
  .map((item, index) => {
    if (item.length > 0) {
      if (index === 0) {
        return item.toLowerCase()
      }
      return item[0].toUpperCase() + item.substring(1).toLowerCase()
    }
    return ''
  })
  .join('')

/**
 *  指定字数后显示...
 * @param {text} 指定字符串
 * @param {num} 指定数字
 */
export const stringFormat = (text: string, num: number): string => {
  let newText = text
  if (text.length > num) {
    newText = text.substring(0, num)
    newText += '...'
  }
  return newText
}

/**
 * 换行符转换<br />
 * @param str
 * @return {string}
 */
export const brConvert = (str: string) => str.replace(/\n/g, '<br />')

/**
 * 换行符转换成','连接
 * @param str
 * @return {string}
 */
export const br2arr = (str: string): Array<string> => {
  let handleString = str.replace(/\r\n/gi, ',')
  handleString = handleString.replace(/\n/gi, ',')
  const arr = handleString.split(',')
  const result: any[] = []
  arr.forEach(i => {
    const v = i.trim()
    if (v) {
      result.push(v)
    }
  })
  return result
}

/**
 * 换行符转换成','连接
 * @param str
 * @return {string}
 */
export const br2semi = (str: string): string => {
  const result = br2arr(str)
  return result.join(',')
}

/**
 * 过滤字符串非字母数字的字符，并且转换为大写
 * @param str
 * @return {string}
 */
export const upperCaseNumberCharacter = (str: string | number): string => {
  let handleString = str.toString()
  handleString = handleString.replace(/[\W_]/ig, '')
  handleString = handleString.toUpperCase()
  return handleString
}

/**
 * 防抖
 * @param {*} func 执行的方法
 * @param {*} wait 间隔时间
 */
export const debounce = (fn: Function, wait?: number): Function => {
  let timer: number | null = null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, wait || 200)
  }
}

/**
 * 节流
 * @param {*} func
 * @param {*} wait
 */
export const throttle = (fn: Function, wait?: number): Function => {
  let prevTime = Date.now()
  const waitTime = wait || 200
  return () => {
    const now = Date.now()
    if (now > prevTime + waitTime) {
      fn()
      prevTime = now
    }
  }
}

/**
 * document信息 （滚动条位置、可视区域高度、文档高度）
 */
const documentScrollInfo = {
  // 获取滚动条当前的位置
  getScrollTop: () => {
    let scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    }
    return scrollTop
  },

  // 获取当前可视范围的高度
  getClientHeight: () => {
    let clientHeight = 0
    const { body, documentElement } = document
    if (body.clientHeight && documentElement.clientHeight) {
      clientHeight = Math.min(body.clientHeight, documentElement.clientHeight)
    } else {
      clientHeight = Math.max(body.clientHeight, documentElement.clientHeight)
    }
    return clientHeight
  },
  // 获取文档完整的高度
  getScrollHeight: () => {
    const { body, documentElement } = document
    return Math.max(body.scrollHeight, documentElement.scrollHeight)
  },
}

type LoadMoreT = {
  target?: any,
  handler: Function,
  threshold?: number,
  immediately?: boolean,
}

/**
 * 上拉加载更多
 * @param {DOM} params.target   // 监听目标 默认document.body
 * @param {Function} params.handler   // 滚动到底部触发的事件 handler(resolev, reject),事件完成
 * @param {number} params.threshold   // 距底部多远时（单位 px），触发 handler 事件 默认 30px
 * @param {Boolean} params.immediately   // 立即执行
 * @return {Function} // 返回清除listener方法
 */
export const loadMore = (params: LoadMoreT): Function => {
  const {
    threshold = 100,
    handler,
    immediately,
  } = params
  if (!handler) return

  if (immediately) handler()

  let target = params.target
  const targetCache: any = target

  const scorllFn = throttle(() => {
    let scrollTop
    let clientHeight
    let scrollHeight
    if (targetCache) {
      ({ scrollTop, clientHeight, scrollHeight } = targetCache)
    } else {
      // 没有传目标 获取浏览器的滚动条信息
      scrollTop = documentScrollInfo.getScrollTop()
      clientHeight = documentScrollInfo.getClientHeight()
      scrollHeight = documentScrollInfo.getScrollHeight()
    }

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      handler()
    }
  }, 10)

  target = target || document

  target.addEventListener('scroll', scorllFn, false)

  return ():void => {
    target = target || document
    target.removeEventListener('scroll', scorllFn, false)
  }
}

export const notEmptyValue = (value: string | number) => value !== '' && value !== undefined && value !== null

// /*// 开启全屏
// export function launchFullscreen (domId: string) {
//   const element = document.getElementById(domId)
//   if (element.requestFullscreen) {
//     element.requestFullscreen()
//   } else if (element.mozRequestFullScreen) {
//     element.mozRequestFullScreen()
//   } else if (element.msRequestFullscreen) {
//     element.msRequestFullscreen()
//   } else if (element.webkitRequestFullscreen) {
//     element.webkitRequestFullScreen()
//   }
// }
// // 退出全屏
// export function existFullScreen () {
//   document.exitFullscreen()
// }*/
//
// /*
// export const launchFullscreen = (domId: string) => {
//   const element = document.getElementById(domId)
//   if (element.requestFullscreen) {
//     element.requestFullscreen()
//   } else if (element.mozRequestFullScreen) {
//     element.mozRequestFullScreen()
//   } else if (element.msRequestFullscreen) {
//     element.msRequestFullscreen()
//   } else if (element.webkitRequestFullscreen) {
//     element.webkitRequestFullScreen()
//   }
// }
//
// export const existFullScreen = () => {
//   document.exitFullscreen()
// }*/
