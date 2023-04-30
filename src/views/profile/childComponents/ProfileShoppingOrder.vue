<template>
  <div class="shopping-order">
    <div class="all-order">
      <span>我的订单</span>
      <img src="~assets/img/common/arrow-left-gray.svg" alt="">
    </div>
    <div class="order-nav">
      <div class="order-nav-item">
        <img src="~assets/img/profile/wait_for_paying.svg" alt="">
        <div>待付款</div>
      </div>
      <div class="order-nav-item">
        <img src="~assets/img/profile/wait_for_deliver.svg" alt="">
        <div>待发货</div>
      </div>
      <div class="order-nav-item">
        <img src="~assets/img/profile/wait_for_receiving.svg" alt="">
        <div>待收货</div>
      </div>
      <div class="order-nav-item">
        <img src="~assets/img/profile/wait_for_comment.svg" alt="">
        <div>待评价</div>
      </div>
      <div class="order-nav-item">
        <img src="~assets/img/profile/after_sale.svg" alt="">
        <div>退款/售后</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileShoppingOrder"
}
</script>

<style scoped>
  .shopping-order {
    border-bottom: #f6f6f6 15px solid;
  }
  .all-order {
    position: relative;
    padding: 12px 10px;
    border-bottom: #d6d6d6 1px solid;
  }
  .all-order span, .all-order img {
    vertical-align: middle;
  }
  .all-order img {
    position: absolute;
    right: 10px;
    width: 22px;
  }

  .order-nav {
    display: flex;
    align-items: center;
    height: 80px;
    font-size: 13px;
  }
  .order-nav-item {
    flex: 1;
    text-align: center;
    line-height: 18px;
  }
  .order-nav-item img {
    width: 20px;
  }
</style>
