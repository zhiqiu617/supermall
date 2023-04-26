<template>
  <swiper>
    <swiper-item v-for="(item, id) in banner" :key="id">
      <a :href="item.link"><img :src="item.image" alt="轮播图" @load="bannerImageLoad"></a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  methods: {
    // 监听图片加载情况
    bannerImageLoad() {
      // 节流——当有一张加载完成的时候就发射事件出去，后面的图片即使加载了也不用发送
      if(!this.isLoaded) {
        this.$emit('bannerImageLoad')
        this.isLoaded = true
      }
    }
  }
}
</script>

<style scoped>

</style>
