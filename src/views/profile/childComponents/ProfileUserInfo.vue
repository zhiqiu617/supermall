<template>
  <div class="user-info">
    <div class="info-left">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="info-center">
      <div>
        <span>登录</span>
        <span>/</span>
        <span>注册</span>
      </div>
      <div class="user-phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="info-right">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUserInfo"
}
</script>

<style scoped>
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    background-color: var(--color-tint);
    color: #fff;
  }

  .info-left {
    padding: 10px;
    width: 80px;
    line-height: 90px;
  }
  .info-left img {
    display: block;
    width: 60px;
  }

  .info-center {
    flex: 1;
  }
  .user-phone {
    margin-top: 5px;
    font-size: 12px;
  }
  .user-phone img {
    vertical-align: middle;
    width: 16px;
  }
  .user-phone span {
    vertical-align: middle;   /* 行内样式垂直居中 */
  }

  .info-right {
    width: 30px;
  }
  .info-right img {
    vertical-align: middle;
    width: 16px;
  }
</style>
