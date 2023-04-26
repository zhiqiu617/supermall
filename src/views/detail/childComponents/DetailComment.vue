<template>
  <div class="comment">
    <div class="comment-nav">
      <span>用户评价</span>
      <img src="~assets/img/common/arrow-left-gray.svg" alt="更多">
    </div>
    <div class="comment-item" v-if="commentInfo.length !== 0" v-for="item in commentInfo">
      <div class="custom-name">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="comment-content">{{item.content}}</div>
      <div class="comment-params">
        <span class="create-time">{{getDate(item.created)}}</span>
        <span>{{item.style}}</span>
      </div>
      <div class="comment-img">
        <img :src="img" alt="" v-for="img in item.images">
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '@/common/util'
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    // 将日期转为指定格式
    getDate() {
      return function (value) {
        let date = new Date(value * 1000)
        return dateFormat(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
}
</script>

<style scoped>
  .comment {
    margin-bottom: 20px;
    padding: 15px;
    border-bottom: #f6f6f6 6px solid;
  }
  .comment-nav {
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: #d6d6d6 1px solid;
    font-size: 16px;
  }
  .comment-nav img {
    width: 15px;
    position: absolute;
    right: 10px;
  }

  .custom-name {
    display: flex;
    align-items: center;
  }
 .custom-name img {
   width: 40px;
   margin-right: 8px;
   border-radius: 50%;
   border: #f6f6f6 2px solid
 }

 .comment-content {
   margin: 10px 0;
   font-size: 13px;
 }

 .comment-params {
   margin-bottom: 10px;
   font-size: 12px;
   color: #777777;
 }
 .create-time {
   margin-right: 6px;
 }

 .comment-img img {
   margin: 0 5px;
   width: 56px;
   height: 56px;
 }
</style>
