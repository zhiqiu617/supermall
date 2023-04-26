<template>
  <div class="cart-list">
    <cart-list-item v-for="item in getCartList" :item-info="item"></cart-list-item>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  import CartListItem from "./CartListItem.vue";

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters([
        'getCartList'
      ])
    }
  }
</script>

<style scoped>
  .cart-list {
    width: 100%;
  }
</style>
