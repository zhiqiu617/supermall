<template>
  <div v-if="Object.keys(paramsInfo).length !== 0">
    <div class="params-item">
      <div class="params-title">尺码表</div>
      <table v-for="table in paramsInfo.sizeInfo.tables">
        <tr v-for="tableItem in table">
          <td v-for="paramsItem in tableItem">{{paramsItem}}</td>
        </tr>
      </table>
      <div class="size-disclaimer">{{paramsInfo.sizeInfo.disclaimer}}</div>
    </div>
    <div class="params-item">
      <div class="params-title">产品信息</div>
      <div class="product-params-item" v-for="item in paramsInfo.productInfo.set">
        <div class="params-item-key">{{item.key}}</div>
        <div class="params-item-value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .params-item {
    margin: 30px 0 0;
    padding-bottom: 40px;
    border-bottom: #f6f6f6 6px solid;
  }
  .params-title {
    margin: 10px auto;
    width: 35%;
    height: 36px;
    line-height: 36px;
    border: #000 1px solid;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
  }
  .params-item table {
    margin: 10px auto;
    width: 90%;
    border: #d6d6d6 1px solid;
    text-align: center;
    border-collapse: collapse;
    word-break: break-all;
  }
  .params-item table tr td {
    border: #d6d6d6 1px solid;
    height: 40px;
  }
  .size-disclaimer {
    margin: 10px 10px 0;
    font-size: 12px;
  }

  .product-params-item {
    display: flex;
    margin: 0 20px;
    padding: 8px 0;
    border-bottom: #d6d6d6 1px solid;
    align-items: center;
  }
  .params-item-key {
    flex: 1.2;
    padding-left: 3px;
  }
  .params-item-value {
    flex: 3;
    color: var(--color-high-text);
    word-break: break-all;
  }
</style>
