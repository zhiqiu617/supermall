<template>
  <div class="cart-list-item">
    <div class="check-btn">
      <check-button :isChecked="itemInfo.checked" @click.native="tickClick"></check-button>
    </div>
    <div class="item-info">
      <div class="item-img">
        <img :src="itemInfo.image" alt="商品图片">
      </div>
      <div class="item-info-right">
        <div class="item-title">{{itemInfo.title}}</div>
        <div class="item-desc">{{itemInfo.desc}}</div>
        <div class="info-bottom">
          <span class="price">￥{{itemInfo.realPrice}}</span>
          <span class="count">x{{itemInfo.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkBtn/CheckButton.vue";

  export default {
    name: "CartListItem",
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      // 监听商品选中按钮点击
      tickClick() {
        this.itemInfo.checked = !this.itemInfo.checked
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    width: 100%;
    padding: 10px 5px;
    border-bottom: #d5d5d5 1px solid;
  }
  .check-btn {
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-info {
    display: flex;
    min-width: 0;   /* 为了不让cart-list-item样式中的flex布局影响后面的文本溢出隐藏效果 */
  }
  .item-img {
    padding: 0 10px;
  }
  .item-img img {
    width: 60px;
    height: 90px;
    display: block;
    border-radius: 3px;
  }

  .item-info-right {
    min-width: 0;   /* 为了不让item-info样式中的flex布局影响后面的文本溢出隐藏效果 */
    padding: 5px 5px 0 0;
  }
  .item-title, .item-desc {
    margin-bottom: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .item-desc {
    font-size: 12px;
  }

  .info-bottom {
    position: relative;
    margin-top: 20px;
  }
  .price {
    color: var(--color-high-text);
  }
  .count {
    position: absolute;
    right: 3px;
    bottom: 0;
  }
</style>
