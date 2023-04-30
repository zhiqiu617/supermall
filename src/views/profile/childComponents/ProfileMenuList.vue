<template>
  <div>
    <div class="menu-list-item">
      <img src="~assets/img/profile/message_active.svg" alt="" class="item-icon">
      <span>消息通知</span>
      <img src="~assets/img/common/arrow-left-gray.svg" alt="" class="arrow-left">
    </div>
    <div class="menu-list-item">
      <img src="~assets/img/common/collect_active.svg" alt="" class="item-icon">
      <span>收藏</span>
      <img src="~assets/img/common/arrow-left-gray.svg" alt="" class="arrow-left">
    </div>
    <div class="menu-list-item">
      <img src="~assets/img/profile/vip_interests_active.svg" alt="" class="item-icon">
      <span>会员权益</span>
      <img src="~assets/img/common/arrow-left-gray.svg" alt="" class="arrow-left">
    </div>
    <div class="menu-list-item">
      <img src="~assets/img/profile/credits_exchange_active.svg" alt="" class="item-icon">
      <span>积分兑换</span>
      <img src="~assets/img/common/arrow-left-gray.svg" alt="" class="arrow-left">
    </div>
    <div class="menu-list-item">
      <img src="~assets/img/profile/service_chat_active.svg" alt="" class="item-icon">
      <span>客服聊天</span>
      <img src="~assets/img/common/arrow-left-gray.svg" alt="" class="arrow-left">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMenuList"
}
</script>

<style scoped>
  .menu-list-item {
    position: relative;
    height: 46px;
    line-height: 46px;
    border-bottom: #d6d6d6 1px solid;
  }
  .item-icon {
    width: 20px;
    margin: 0 5px 0 8px;
    vertical-align: middle;
  }
  .menu-list-item span {
    vertical-align: middle;
  }
  .arrow-left {
    position: absolute;
    right: 10px;
    top: 14px;
    width: 19px;
  }
</style>
