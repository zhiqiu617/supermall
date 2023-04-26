<template>
  <!-- 先判断是否有商品信息再展示 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title">{{goods.title}}</div>
    <div class="price-desc">
      <span class="price">{{goods.price}}</span>
      <span v-show="oldPriceShow" class="old-price">{{goods.oldPrice}}</span>
      <div v-show="goods.discountDesc" class="discount-desc"><span>{{goods.discountDesc}}</span></div>
    </div>
    <div class="columns">
      <span class="salves">{{goods.columns[0]}}</span>
      <span class="collect">{{goods.columns[1]}}</span>
      <span class="last-service">{{goods.services[0].name}}</span>
    </div>
    <div class="services">
      <span class="services-item" v-for="index in goods.services.length - 1">
        <img :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    oldPriceShow() {
      return !this.goods.price.toString().includes(this.goods.oldPrice)
    }
  }
}
</script>

<style scoped>
  .base-info {
    padding: 10px;
    border-bottom: #f6f6f6 6px solid;
  }
  .title {
    color: #000;
    font-size: 16px;
  }
  .price-desc, .columns {
    display: flex;
    position: relative;
    margin: 18px 0 8px;
    height: 18px;
    line-height: 18px;
  }
  .price {
    color: var(--color-high-text);
    font-size: 20px;
  }
  .old-price {
    padding: 2px 8px 0 4px;
    text-decoration: line-through;
  }
  .discount-desc {
    background-color: var(--color-high-text);
    border-radius: 8px;
    color: #fff;
    text-align: center;
    font-size: 12px;
  }
  .discount-desc span {
    margin: 0 5px;
  }

  .columns span {
    flex: 1;
    text-align: center;
  }
  .salves {
    position: absolute;
    left: 0;
  }
  .last-service {
    position: absolute;
    right: 0;
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    padding-top: 12px;
    width: 100%;
    border-top: #c6c6c6 1px solid;
  }
  .services-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    color: #888;
  }
  .services img {
    width: 14px;
    margin: 0 2px;
  }

</style>
