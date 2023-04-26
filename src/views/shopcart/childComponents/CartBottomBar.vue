<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <check-button class="check-btn" :isChecked="allChecked" @click.native="checkedAll"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">合计: ￥{{totalPrice}}</div>
    <div class="settle">去结算({{checkedCount}})</div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  import CheckButton from "components/content/checkBtn/CheckButton.vue";
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['getCartList']),
      totalPrice() {
        return this.getCartList.filter(
          item => item.checked
        ).reduce(
          ((total, item) => total + item.realPrice * item.count),
          0).toFixed(2)
      },
      checkedCount() {
        return this.getCartList.filter(item => item.checked).length
      },
      // 是否勾选全选按钮
      allChecked() {
        // find()方法查找checked值为false的元素
        return this.getCartList.length ? !this.getCartList.find(item => !item.checked) : false
      }
    },
    methods: {
      checkedAll() {
        this.$store.commit('changeCheckedAttr', !this.allChecked)
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height:  40px;
    background-color: #f9f9f9;
    font-size: 14px;
  }
  .check-all {
    width: 80px;
    display: flex;
    align-items: center;
    margin: 0 15px 0 5px;
  }
  .check-btn {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  .total-price {
    flex: 1;
  }
  .settle {
    width: 100px;
    background-color: #ff8407;
    text-align: center;
    line-height: 40px;
  }
</style>
