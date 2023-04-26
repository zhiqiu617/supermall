<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="精选推荐">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    padding: 10px 3px 20px;
    border-bottom: #efefef 8px solid;
    text-align: center;
    font-size: 15px;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 90%;
    margin-bottom: 3px;
  }
</style>
