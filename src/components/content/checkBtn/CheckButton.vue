<template>
  <div class="check-btn" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-btn {
    border-radius: 50%;
    border: #aaa 1px solid;
  }
  .checked {
    border-color: var(--color-high-text);
    background-color: var(--color-high-text);
  }
  .check-btn img {
    width: 16px;
    padding: 1px;
  }
</style>
