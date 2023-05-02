import {
  ADD_COUNT,
  ADD_NEW_PRODUCT,
  CHANGE_CHECKED_ATTR,
  SUB_COUNT
} from './mutation_types';

export default {
  // 购物车已有商品数量加一
  [ADD_COUNT](state, payload) {
    payload.count++
  },
  // 添加新商品到购物车
  [ADD_NEW_PRODUCT](state, payload) {
    state.goodsInCart.push(payload)
  },
  // 修改checked属性值
  [CHANGE_CHECKED_ATTR](state, payload) {
    state.goodsInCart.forEach(item => item.checked = payload)
  },

  // 商品数量减一
  [SUB_COUNT](state, payload) {
    if (payload.count > 1) {
      payload.count--
    }
  }
}
