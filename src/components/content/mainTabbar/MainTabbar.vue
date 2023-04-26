<template>
  <tabbar>
    <tabbar-item path="/home">
      <template #item_img><img src="~assets/img/tabbar/home.svg" alt="home"></template>
      <template #item_img_active><img src="~assets/img/tabbar/home_active.svg" alt="home"></template>
      <template #item_text><div>首页</div></template>
    </tabbar-item>
    <tabbar-item path="/category">
      <template #item_img><img src="~assets/img/tabbar/category.svg" alt="category"></template>
      <template #item_img_active><img src="~assets/img/tabbar/category_active.svg" alt="category"></template>
      <template #item_text><div>分类</div></template>
    </tabbar-item>
    <tabbar-item path="/shopcart">
      <template #item_img><img src="~assets/img/tabbar/shopcart.svg" alt="shopcart"></template>
      <template #item_img_active><img src="~assets/img/tabbar/shopcart_active.svg" alt="shopcart"></template>
      <template #item_text><div>购物车</div></template>
    </tabbar-item>
    <tabbar-item path="/profile">
      <template #item_img><img src="~assets/img/tabbar/profile.svg" alt="profile"></template>
      <template #item_img_active><img src="~assets/img/tabbar/profile_active.svg" alt="profile"></template>
      <template #item_text><div>档案</div></template>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import Tabbar from "@/components/common/tabbar/Tabbar.vue";
  import TabbarItem from "@/components/common/tabbar/TabbarItem.vue";

  export default {
    name: "MainTabbar",
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>
