<!-- 底部导航栏内部item的封装 -->
<template>
  <div class="tabbarItem" @click="beActived">
    <div v-if="!activeMode"><slot name="item_img"></slot></div>
    <div v-else><slot name="item_img_active"></slot></div>
    <div :style="textColor"><slot name="item_text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#f06609'
      }
    },
    computed: {
      // 调整当前活跃路由对应内容的图标颜色
      activeMode() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      // 调整当前活跃路由对应内容的字体颜色
      textColor() {
        return this.activeMode ? {color: this.activeColor} : {}
      }
    },
    methods: {
      // 根据点击跳转路由
      beActived() {
        this.$router.replace({path: this.path}, res => {
          console.log('跳转至', this.path)
        }, err => {
          console.log('跳转失败',err)
        })
      }
    }
  }
</script>

<style scoped>
  .tabbarItem {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tabbarItem img {
    width: 24px;
    height:24px;
    vertical-align: middle;
    margin: 3px 0 2px;
  }
</style>
