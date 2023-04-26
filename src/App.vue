<template>
  <div id="app">
    <!--  增加keep-alive组件使页面内容得到缓存  -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from "@/components/content/mainTabbar/MainTabbar.vue";

  export default {
    name: 'App',
    components: {
      MainTabbar
    }
  }
</script>

<style>
  @import '@/assets/css/base.css';
</style>
