import axios from 'axios'

export function request(config) {
  // 创建实例
  const interface1 = axios.create({
    baseURL: 'http://123.207.32.32:7888/api/hy66',
    timeout: 8000
  })

  // 设置拦截器
  interface1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  interface1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 发送网络请求
  return interface1(config)
}


