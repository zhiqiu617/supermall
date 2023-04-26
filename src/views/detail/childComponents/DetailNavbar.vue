<template>
  <nav-bar class="navbar">
    <template #left>
      <div class="navbar-left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="详情页导航栏">
      </div>
    </template>
    <template #center>
      <div class="navbar-center">
        <div class="navbar-center-item" v-for="(item, index) in title"
             @click="navTitleClick(index)" :class="currentIndex === index ? 'active-nav-title' : {}">
          {{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  export default {
    name: "DetailNavbar",
    components: {
      NavBar
    },
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      // 返回上一页
      backClick() {
        this.$router.back()
      },
      // 监听导航栏点击哪一个title
      navTitleClick(index) {
        this.currentIndex = index
        this.$emit('detailNavClick', index)
      }
    }
  }
</script>

<style scoped>
  .navbar {
    border-bottom: #f6f6f6 2px solid;
    font-size: 16px;
  }
  .navbar-left {
    margin-top: 6px;
  }
  .navbar-center {
    display: flex;
    font-size: 14px;
  }
  .navbar-center-item {
    flex: 1;
  }
  .active-nav-title {
    color: var(--color-high-text)
  }
</style>
