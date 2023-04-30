<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template #center>分类</template>
    </nav-bar>
    <div class="category-content">
      <b-scroll ref="left-scroll">
        <category-title-list :titleList="leftTitleList"></category-title-list>
      </b-scroll>
      <b-scroll ref="right-scroll">
        <category-detail-list></category-detail-list>
      </b-scroll>
    </div>
  </div>
</template>

<script>
import {getCategoryTitle} from "@/network/category";

import NavBar from "components/common/navbar/NavBar.vue";
import BScroll from "components/common/scroll/BScroll.vue";

import CategoryTitleList from "./childComponents/CategoryTitleList.vue";
import CategoryDetailList from "./childComponents/CategoryDetailList.vue";

  export default {
    name: "Category",
    components: {
      NavBar,
      BScroll,
      CategoryTitleList,
      CategoryDetailList
    },
    data() {
      return {
        leftTitleList: []
      }
    },

    mounted() {
      getCategoryTitle().then(res => {
        this.leftTitleList = res.data.category.list
        console.log('category title', res)
      })
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
    width: 100%;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .category-content {
    display: flex;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
