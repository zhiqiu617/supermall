<template>
  <div id="detail">
    <detail-navbar class="detail-navbar" ref="detailNav" @detailNavClick="navItemClick"></detail-navbar>
    <b-scroll class="detail-bscroll" ref="scroll"
              @getScrollPosition="contentScroll" :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goodsBaseInfo"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-info :goodsDetail="goodsDetail" @detailImgLoad="detailImgLoad"></detail-goods-info>
      <detail-params-info ref="params" :paramsInfo="paramsInfo"></detail-params-info>
      <detail-comment ref="comment" :commentInfo="commentInfo"></detail-comment>
      <goods-list ref="recommend" class="recommend-goods" :goodsList="recommendData"></goods-list>
    </b-scroll>
    <!--  监听组件的原生事件，需要使用.native修饰符（Vue3中已废弃）  -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavbar from "./childComponents/DetailNavbar.vue";
  import DetailSwiper from "./childComponents/DetailSwiper.vue";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
  import DetailShopInfo from "./childComponents/DetailShopInfo.vue";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo.vue";
  import DetailParamsInfo from "./childComponents/DetailParamsInfo.vue";
  import DetailComment from "./childComponents/DetailComment.vue";
  import DetailBottomBar from "./childComponents/DetailBottomBar.vue";

  import BScroll from "components/common/scroll/BScroll.vue";
  import GoodsList from "components/content/goods/GoodsList.vue";
  import BackTop from "components/content/backTop/BackTop.vue";

  import { getGoodsDetail, getRecommend, Goods, Shop, Params } from "@/network/detail";
  import { mapActions } from "vuex";

  import { debounce } from '@/common/util';
  import { mixinImageLoad, mixinBackTop } from "@/common/mixin";

  export default {
    name: "Detail",
    components: {
      DetailNavbar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailComment,
      DetailBottomBar,
      BScroll,
      GoodsList,
      BackTop
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goodsBaseInfo: {},
        shopInfo: {},
        goodsDetail: {},
        paramsInfo: {},
        commentInfo: [],
        recommendData: [],
        navItemY: [],   // 记录导航栏对应的展示内容的offsetTop
        getNavItemY: null   // 获取导航栏对应的展示内容的offsetTop的方法
      }
    },

    // 挂载混入对象
    mixins: [mixinImageLoad, mixinBackTop],

    created() {
      this.iid = this.$route.params.iid

      // 获取商品细节数据
      getGoodsDetail(this.iid).then(res => {
        console.log('detail:', res)
        const data = res
        // 获取轮播图数据
        this.topImages = data.result.itemInfo.topImages
        // 获取商品基础信息
        this.goodsBaseInfo = new Goods(data.result.itemInfo, data.result.columns, data.result.shopInfo.services)
        // 获取店铺信息
        this.shopInfo = new Shop(res.result.shopInfo)
        // 获取商品详细信息
        this.goodsDetail = data.result.detailInfo
        // 获取商品参数
        this.paramsInfo = new Params(data.result.itemParams.rule, data.result.itemParams.info)
        // 获取商品评价
        if (data.result.rate.cRate !== 0) {
          this.commentInfo = data.result.rate.list
        }
      })

      // 获取推荐数据
      getRecommend().then(res => {
        console.log('recommend:', res)
        this.recommendData = res.data.list
      })
    },
    mounted() {
      // 获取导航栏选项对应的页面内容的offsetTop，并通过防抖函数进行性能优化
      this.getNavItemY = debounce(() => {
        this.navItemY = []
        this.navItemY.push(0)
        this.navItemY.push(this.$refs.params.$el.offsetTop)
        this.navItemY.push(this.$refs.comment.$el.offsetTop)
        this.navItemY.push(this.$refs.recommend.$el.offsetTop)
        this.navItemY.push(Number.MAX_VALUE)
        console.log(this.navItemY)
      }, 200)
    },
    destroyed() {
      // 路由离开时取消总线事件监听
      this.$bus.$off('goodsItemImgLoad', this.itemImgListener)
    },

    methods: {
      ...mapActions(['addToCart']),

      // better-scroll滚动条刷新
      refresh() {
        this.$refs.scroll && this.$refs.scroll.refresh()
        console.log('refresh')
      },
      // 监听商品详情图片加载
      detailImgLoad() {
        debounce(this.refresh, 800)
        console.log(this.navItemY)
        this.getNavItemY()
      },
      // 监听导航栏点击
      navItemClick(index) {
        this.getNavItemY()
        this.$refs.scroll && this.$refs.scroll.backClick(0, -this.navItemY[index],300)
      },
      // 监听滚动条移动情况
      contentScroll(position) {
        // 检查是否显示回到顶部图标
        this.showBackTop(position)

        // 判断当前滚动的位置，同步改变导航栏高亮选项
        let currentIndex = this.$refs.detailNav.currentIndex
        let currentPositionY = -position.y
        for (let i = 0; i < this.navItemY.length - 1; i++) {
          // 先比较遍历下标与当前记录的导航栏选项是否一致，一致则不继续判断
          if ((i !== currentIndex) && (currentPositionY >= this.navItemY[i] && currentPositionY < this.navItemY[i + 1])) {
            currentIndex = i
            this.$refs.detailNav.currentIndex = currentIndex
          }
        }
      },

      // 添加商品至购物车
      addCart() {
        let obj = {}
        obj.iid = this.iid
        obj.image = this.topImages[0]
        obj.title = this.goodsBaseInfo.title
        obj.desc = this.goodsDetail.desc
        obj.realPrice = this.goodsBaseInfo.realPrice

        this.addToCart(obj).then(res => {
          this.$toast.showToast(res, 1500)
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
    font-size: 14px;
  }
  .detail-navbar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-bscroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .recommend-goods {
    margin-top: 20px;
  }
</style>
