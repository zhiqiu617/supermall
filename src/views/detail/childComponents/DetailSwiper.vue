<template>
  <swiper class="detail-swiper">
    <swiper-item class="detail-swiper-item" v-for="item in topImages">
      <img :src="item" alt="详情页轮播图">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
  }
  .detail-swiper-item {
    width: 100%;
    height: 100%;
  }
</style>
