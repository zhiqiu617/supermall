<template>
  <div class="account-info">
    <div class="info-item">
      <div>
        <span class="text-number">0.00</span>
        <span>元</span>
      </div>
      <div class="item-text">余额</div>
    </div>
    <div class="info-item center-item">
      <div>
        <span class="text-number">0</span>
        <span>个</span>
      </div>
      <div class="item-text">优惠券</div>
    </div>
    <div class="info-item">
      <div>
        <span class="text-number">0</span>
        <span>分</span>
      </div>
      <div class="item-text">积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAccountInfo"
}
</script>

<style scoped>
  .account-info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border-bottom: #f6f6f6 12px solid;
    font-size: 14px;
  }
  .info-item {
    flex: 1;
    text-align: center;
  }
  .center-item {
    border-left: #e6e6e6 1px solid;
    border-right: #e6e6e6 1px solid;
  }
  .text-number {
    color: var(--color-high-text);
    font-size: 22px;
    margin-right: 3px;
  }
  .item-text {
    margin-top: 5px;
  }
</style>
