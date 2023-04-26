import Vue from 'vue';
import Vuex from 'vuex';

import mutations from "./mutations";
import actions from "./actions";
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goodsInCart: []   // 存放加入购物车的商品
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})

export default store
