<template>
  <div class="goods-info">
    <div class="desc" v-if="goodsDetail.desc">{{goodsDetail.desc}}</div>
    <div>
      <div v-for="(item, index) in goodsDetail.detailImage">
        <div class="desc" v-if="item.desc">{{item.desc}}</div>
        <div v-for="img in item.list">
          <img :src="img" alt="" class="goods-detail-img" @load="detailImgLoad(index)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsDetail: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      imgCount: 0
    }
  },
  computed: {
    imgListLength() {
      return function (index) {
        return this.goodsDetail.detailImage[index].list.length
      }
    }
  },
  methods: {
    // 监听图片加载，在一组图片加载完时发射一次事件
    detailImgLoad(index) {
      if(++this.imgCount === this.imgListLength(index)) {
        this.$emit('detailImgLoad')
      }
    }
  }
}
</script>

<style scoped>
  .goods-info {
    padding: 20px 5px;
    border-bottom: #f6f6f6 6px solid;
  }
  .desc {
    margin: 20px;
    padding: 15px 20px;
    border-top: #000 1px;
    border-bottom: #000 1px;
    border-style: inset;
  }
  .goods-detail-img {
    width: 100%;
  }
</style>
