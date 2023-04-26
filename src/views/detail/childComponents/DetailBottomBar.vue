<template>
  <div class="bottom-bar">
    <div class="service">
      <i class="bar-icon"></i>
      <span>客服</span>
    </div>
    <div class="shop">
      <i class="bar-icon"></i>
      <span>店铺</span>
    </div>
    <div class="collect">
      <i class="bar-icon"></i>
      <span>收藏</span>
    </div>
    <div class="cart" @click="addCart">加入购物车</div>
    <div class="purchase">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    bottom: 0;
    height: 49px;
    display: flex;
    width: 100%;
    background-color: #fff;
    align-items: center;
    text-align: center;
  }
  .bar-icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .service, .shop, .collect {
    flex: 1;
    font-size: 13px;
  }
  .service .bar-icon {
    background-position: 0 -54px;
  }
  .shop .bar-icon {
    background-position: 0 -98px;
  }

  .cart {
    flex: 2;
    color: #000;
    background-color: #fffb72;
    line-height: 49px;
  }
  .purchase {
    flex: 2;
    color: #fff;
    background-color: #ff8407;
    line-height: 49px;
  }
</style>
