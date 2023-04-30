<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template #center>个人中心</template>
    </nav-bar>
    <b-scroll ref="profile-scroll" class="profile-scroll">
      <profile-user-info></profile-user-info>
      <profile-account-info></profile-account-info>
      <profile-shopping-order></profile-shopping-order>
      <profile-menu-list></profile-menu-list>
    </b-scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  import BScroll from "components/common/scroll/BScroll.vue";

  import ProfileUserInfo from "./childComponents/ProfileUserInfo.vue";
  import ProfileAccountInfo from "./childComponents/ProfileAccountInfo.vue";
  import ProfileShoppingOrder from "./childComponents/ProfileShoppingOrder.vue";
  import ProfileMenuList from "./childComponents/ProfileMenuList.vue";

  export default {
    name: "Profile",
    components: {
      NavBar,
      BScroll,
      ProfileUserInfo,
      ProfileAccountInfo,
      ProfileShoppingOrder,
      ProfileMenuList
    }
  }
</script>

<style scoped>
  #profile {
    height: 100vh;
    width: 100%;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .profile-scroll {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
