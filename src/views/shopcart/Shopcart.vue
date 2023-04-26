<template>
  <div id="shopcart">
    <nav-bar class="nav-bar">
      <template #center>购物车({{getCartListLength}})</template>
    </nav-bar>
    <b-scroll class="shopcart-scroll" ref="scroll">
      <cart-list></cart-list>
    </b-scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  /* mapGetters 辅助函数，将 store 中的 getter 映射到局部计算属性 */
  import { mapGetters } from "vuex";

  import NavBar from "components/common/navbar/NavBar.vue";
  import BScroll from "components/common/scroll/BScroll.vue";

  import CartList from "./childComponents/CartList.vue";
  import CartBottomBar from "./childComponents/CartBottomBar.vue";

  export default {
    name: "Shopcart",
    components: {
      NavBar,
      BScroll,
      CartList,
      CartBottomBar
    },
    activated() {
      // 重新进入页面时刷新，从而获取新的滚动条可滚动高度
      this.$refs.scroll.refresh()
    },
    computed: {
      // 将store中的getters映射到此处作为组件的计算属性
      ...mapGetters([
        'getCartListLength'
      ])
    }
  }
</script>

<style scoped>
  #shopcart {
    height: 100vh;
    width: 100%;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .shopcart-scroll {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>
