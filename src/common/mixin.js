import { debounce } from "@/common/util";

/* mixin混入：用于分发 Vue 组件中的可复用功能
*  一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
* */

// 创建用于混入的对象
// 图片加载的混入封装
export const mixinImageLoad =  {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.refresh, 100)
    this.itemImgListener = () => {
      refresh()
    }
    /* 监听商品图片加载情况
    *  通过 $bus.$on() 可以监听到事件总线中的事件
    *  为了让图片加载之后Better-Scroll能重新计算可滚动高度，在组件创建完成后开始监听图片的加载情况，
    *  当有一张图片加载完成时，触发事件监听，调用BScroll.refresh()方法进行刷新，让Better-Scroll重新计算高度
    * */
    this.$bus.$on('goodsItemImgLoad', this.itemImgListener)
  }
}

// 回到顶部图标显示的混入封装
export const mixinBackTop = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 让better-scroll滚动条回到顶部
    backClick() {
      this.$refs.scroll.backClick(0, 0, 500)
    },
    // 当上拉到指定位置之后，显示回到顶部的图标
    showBackTop(position) {
      // 当上拉距离超过1000的时候，更新显示backTop图标的标记变量
      this.isShowBackTop = Math.abs(position.y) > 1000
    }
  }
}
