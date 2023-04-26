<!-- 底部导航栏的封装 -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f3f3f3;
  }
</style>
