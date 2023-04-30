<template>
  <div>
    <div v-for="(item, index) in titleList" class="title-list-item"
         :class="{isActive: currentIndex === index}" @click="itemClick(index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryTitleList",
  props: {
    titleList: {
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
    }
  }
}
</script>

<style scoped>
  .title-list-item {
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-bottom: #f2f2f2 2px solid;
    background-color: #efefef;
    text-align: center;
    font-size: 14px;
  }
  .isActive {
    background-color: #fff;
    border-left: var(--color-tint) 3px solid;
    color: var(--color-high-text);
  }
</style>
