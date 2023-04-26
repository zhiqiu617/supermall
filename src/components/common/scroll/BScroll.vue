<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
export default {
  name: "BScroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bscroll: null
    }
  },
  methods: {
    // 滚动条到达指定位置，time设置默认值是300ms，代表在300ms内移动完成
    backClick(x, y, time=300) {
      // 使用逻辑与先判断this.bscroll是否已经有值，在进行下一步
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    // 上拉加载数据完成后调用finishPullUp()告知加载结束
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp()
    },
    /*  Better-Scroll在每次加载数据之后都会根据内容计算可滚动的高度(scrollHeight)，
     *  但是由于图片是异步加载的，可能出现BS计算高度先于图片完成加载，导致计算的可滚动高度有误，用户上拉不成功
     *  为解决此问题，可以在加载数据之后，调用BScroll.refresh()方法进行一次刷新，重新计算 better-scroll，确保滚动的效果正常
     * */
    refresh() {
      this.bscroll && this.bscroll.refresh()
    },
    // 获取滚动坐标y值
    getPositionY() {
      return this.bscroll ? this.bscroll.y : 0
    }
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType
    })
    // 监听滚动
    this.bscroll.on('scroll', (position) => {
      this.$emit('getScrollPosition', position)
    })
    // 监听上拉至底部
    this.bscroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>

</style>
