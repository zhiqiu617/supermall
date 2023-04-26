// 防抖动处理
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // apply(thisArg, argsArray)方法实现函数的重用
      // 第一个参数传入this将func函数的this指向转为当前作用域，第二个参数可选，传入的值null或者undefined表示不需要传入参数
      func.apply(this, args)
    }, delay)
  }
}

// 日期格式化
export function dateFormat(date, fmt) {
  // 转换年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substring(4 - RegExp.$1.length))
  }

  // 转换日期剩余部分
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

// 为日期的月日时分秒补零
function padLeftZero (str) {
  return ('00' + str).substring(str.length)
}
