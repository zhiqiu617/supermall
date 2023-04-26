import {
  ADD_COUNT,
  ADD_NEW_PRODUCT
} from './mutation_types';

export default {
  // 添加商品到购物车
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 检查当前加入的商品是否已经存在于购物车，存在则数量加一，不存在则添加商品
      let oldProduct = context.state.goodsInCart.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
      } else {
        payload.count = 1
        payload.checked = false
        context.commit(ADD_NEW_PRODUCT, payload)
      }
      resolve('已添加至购物车')
    })
  }
}
