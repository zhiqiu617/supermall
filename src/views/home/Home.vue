<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center><div>购物街</div></template></nav-bar>
    <!--  为了解决better-scroll带来的tabControl无法固定的问题，增加一个一般情况下被遮盖在下方的tabControl  -->
    <tab-control :title="['流行', '新款', '精选']" @tabClick="tabClick"
                 ref="fixedTabControl"
                 class="fixed-tab-control" v-show="isTabControlFixed"></tab-control>

    <!--  使用better-scroll插件重写scroll  -->
    <b-scroll class="content" ref="scroll"
              :probe-type="3" @getScrollPosition="refreshTabControlOffsetTop"
              :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banner="banner" @bannerImageLoad="bannerImageLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <!--  原tabControl  -->
      <tab-control :title="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl"
                   v-show="!isTabControlFixed"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </b-scroll>

    <!--  监听组件的原生事件，需要使用.native修饰符（Vue3中已废弃）  -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import TabControl from "components/content/tabControl/TabControl.vue";
  import GoodsList from "components/content/goods/GoodsList.vue";
  import BScroll from 'components/common/scroll/BScroll.vue';
  import BackTop from "components/content/backTop/BackTop.vue";

  import HomeSwiper from "./childComponents/HomeSwiper.vue";
  import RecommendView from "./childComponents/RecommendView.vue";
  import FeatureView from "./childComponents/FeatureView.vue";

  import {getHomeMultiData, getHomeGoodsData} from "@/network/home";

  import { mixinImageLoad, mixinBackTop } from "@/common/mixin";

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      BScroll,
      BackTop,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        tabControlOffsetTop: 0,
        isTabControlFixed: false,
        saveY: 0   // 记录离开页面前的滚动坐标y值
      }
    },

    // 挂载混入对象
    mixins: [mixinImageLoad, mixinBackTop],

    created() {
      // 在组件被创建好之后发起网络请求，获取数据
      this.getHomeMultiData()

      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    mounted() {
    },

    // 路由活跃时修复离开前的滚动坐标y值
    activated() {
      this.$refs.scroll.backClick(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 路由离开时记录滚动坐标y值
      this.saveY = this.$refs.scroll.getPositionY()
      // 路由离开时取消总线事件监听
      // $bus.$off()用于取消总线事件监听，传入事件及需要取消的方法
      this.$bus.$off('goodsItemImgLoad', this.itemImgListener)
    },

    computed: {
      // 根据当前类型显示商品
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /*
      * 事件监听相关方法
      * */
      // better-scroll滚动条刷新
      refresh() {
        this.$refs.scroll && this.$refs.scroll.refresh()
        console.log('refresh')
      },
      // 监听banner图片加载情况，记录tabControl所在位置的offsetTop
      bannerImageLoad() {
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      // 切换商品展示区的tab
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        // 同步两个tabControl当前点击位置
        this.$refs.tabControl.currentIndex = index
        this.$refs.fixedTabControl.currentIndex = index
      },
      // 当上拉到指定位置之后，显示回到顶部的图标
      refreshTabControlOffsetTop(position) {
        // 检查是否显示回到顶部图标
        this.showBackTop(position)
        // 当上拉距离超过tabControl的offsetTop偏移量时，更新固定tabControl的标记变量
        this.isTabControlFixed = Math.abs(position.y) > this.tabControlOffsetTop
      },
      // 上拉加载更多
      loadMore() {
        this.getHomeGoodsData(this.currentType)
        this.$refs.scroll.finishPullUp()
        // 数据加载后刷新一次better-scroll，重新计算可滚动高度
        this.$refs.scroll.refresh()
      },

      /*
       * 网络请求相关方法
       * */
      // 请求横幅、精选分类等数据
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      // 请求首页商品展示数据
      getHomeGoodsData(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = page
        })
      }
    }
  }
</script>

<!-- scoped代表作用域，设置了之后，style中的样式只会在本文件中起作用-->
<style scoped>
  #home {
    position: relative;
    /* 设置高度为100%的视口高度 */
    height: 100vh;
  }
  .home-nav {
    /* 因滚动使用了Better-scroll重构，所以不再需要利用固定定位固定顶部导航栏 */
    /*position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;*/
    /* 使用定义好的变量设置背景颜色 */
    background-color: var(--color-tint);
    color: #fff;
  }

  /**
   *  粘性定位是使用在默认scroll上的，因为使用了better-scroll插件，所以粘性定位不在起效
   */
  /*.tab-control {*/
  /*  !* 粘性定位(相对定位和固定定位的混合)。元素在跨越特定阈值(top/right/bottom/left产生)前为相对定位，之后为固定定位 *!*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*}*/
  /* 重写tabControl（固定的tabControl）的样式 */
  .fixed-tab-control {
    position: relative;
    z-index: 1;
  }

  /* 滚动区域设置——方式一 */
  /*.content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }*/
  /* 滚动区域设置——方式二 */
  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>
