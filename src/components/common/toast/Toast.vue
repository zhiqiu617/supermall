<template>
  <div class="toast" v-show="isShow">
    <div class="text">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      // 显示toast，并在指定时间消失
      showToast(message='成功', duration=2000) {
        this.message = message
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    color: #fff;
  }
  .toast .text {
    padding: 10px 15px;
    font-size: 16px;
  }
</style>
