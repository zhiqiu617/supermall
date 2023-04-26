<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-name">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-evaluation">
      <div class="evaluation-left">
        <div class="evaluation-left-item">
          <p>{{shopSells}}</p>
          <p class="evaluation-left-item-text">总销量</p>
        </div>
        <div class="evaluation-left-item">
          <p>{{shopInfo.cGoods}}</p>
          <p class="evaluation-left-item-text">全部宝贝</p>
        </div>
      </div>
      <div class="evaluation-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score">
            <td class="score">{{item.name}}</td>
            <td class="score">{{item.score}}</td>
            <td class="score-level" :class="item.isBetter ? 'better-level' : 'worse-level'">{{scoreLevel(index)}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-url"><a :href="shopInfo.shopUrl"><button>进店逛逛</button></a></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    // 当店铺总销量过万时，更换单位
    shopSells() {
      if(!isNaN(parseFloat(this.shopInfo.cSells)) && isFinite(this.shopInfo.cSells)) {
        if(parseFloat(this.shopInfo.cSells) > 10000) {
          return (parseFloat(this.shopInfo.cSells) / 10000).toFixed(2).toString() + '万'
        } else {
          return this.shopInfo.cSells
        }
      } else {
        return this.shopInfo.cSells
      }
    },
    // 根据服务器传来的数据对评分显示 高/ 低
    scoreLevel() {
      return (index) => {
        return this.shopInfo.score[index].isBetter ? '高' : '低'
      }
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 10px;
    border-bottom: #f6f6f6 6px solid;
  }
  .shop-name, .shop-evaluation {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .shop-name img {
    width: 46px;
    margin-right: 8px;
    border-radius: 50%;
    border: #f6f6f6 2px solid
  }

  .evaluation-left {
    flex: 1;
    display: flex;
    border-right: #c6c6c6 1px solid;
    justify-content: center;
    align-items: center;
  }
  .evaluation-left-item {
    flex: 1;
    text-align: center;
  }
  .evaluation-left-item-text {
    margin-top: 3px;
    font-size: 12px;
  }

  .evaluation-right {
    width: 40%;
    margin-left: 10%;
    font-size: 12px;
  }
  .evaluation-right table {
    border-spacing: 8px 5px;
  }
  .evaluation-right .score-level {
    color: #fff
  }
  .better-level {
    background-color: #239d39;
  }
  .worse-level {
    background-color: #e46408;
  }

  .shop-url {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
  .shop-url a button {
    width: 120px;
    height: 30px;
    line-height: 30px;
    background-color: #f6f6f6;
    border: 0;
    outline: none;
    border-radius: 10px;
  }
</style>
