<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, id) in goodsList" :goodsItem="item" :key="id"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem.vue";
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
