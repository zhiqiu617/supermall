export default {
  getCartListLength(state) {
    return state.goodsInCart.length
  },
  getCartList(state) {
    return state.goodsInCart
  }
}
