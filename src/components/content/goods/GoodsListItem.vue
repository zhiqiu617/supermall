<template>
  <div class="goods-list-item" @click="goodsItemClick">
    <!--  @load是Vue中定义的一个用于监听加载情况的事件，此处用来监听图片的加载情况  -->
    <!--  v-lazy是vue-lazyload插件的使用方法，用来替换图片本来的src属性，从而让懒加载起效  -->
    <!--  为了使刷新的时候，懒加载图片也一起刷新，可以绑定一个key  -->
    <img v-lazy="showGoodsImage" :key="showGoodsImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="goods-fav"><img src="~assets/img/common/collect.svg" alt="">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showGoodsImage() {
      // 由于首页和详情页引用时提供的数据结构不同，所以需要判断一下，保证都能显示
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    /* 监听图片的加载情况
    *  监听到图片加载完成时，发射一个事件到事件总线（$bus）
    *  事件总线中的事件不限制组件关系即可访问，
    *  通过这个方式，可以让其他组件监听到这里发射出去的事件，得知图片已加载
    * */
    imageLoad() {
      this.$bus.$emit('goodsItemImgLoad')
    },
    // 监听商品点击
    goodsItemClick() {
      // 路由跳转至详情页，附带商品id
      this.$router.push({
        path: '/detail/' + this.goodsItem.iid
      })
    }
  }
}
</script>

<style scoped>
  .goods-list-item {
    position: relative;
    width: 46%;
    padding-bottom: 40px;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12px;
    font-size: 12px;
  }
  .goods-info p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-info .goods-price {
    margin-left: 2px;
    color: var(--color-high-text)
  }
  .goods-info .goods-fav {
    position: absolute;
    right: 3px;
  }
  .goods-fav img {
    position: relative;
    top: 2px;
    width: 14px;
    height: 14px;
  }
</style>
