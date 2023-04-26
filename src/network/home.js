/* 对应Home组件中的网络请求进行统一封装管理 */
import {request} from "@/network/request";

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  })
}
