import {request} from "@/network/request";

// 商品详细信息请求
export function getGoodsDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

// 商品基础信息整合
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopId = shopInfo.shopId
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
  }
}

export class Params {
  constructor(rule, info) {
    this.sizeInfo = rule
    this.productInfo = info
  }
}
