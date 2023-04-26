<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in title" @click="itemClick(index)">
      <span :class="currentIndex === index ? 'active' : {}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 40px;
    background-color: #fff;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    z-index: 99;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    border-bottom: var(--color-tint) 2px solid;
    color: var(--color-high-text);
  }
</style>
