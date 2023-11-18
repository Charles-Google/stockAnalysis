<script lang="ts" setup>
import { ref } from "vue";

const beststock = ref("综合最优");
const benfitstock = ref("收益最高");
const safestock = ref("风险最低");
</script>
<template>
  <div class="recommend">
    <div class="container">
      <LineChart :stockname="beststock"></LineChart>
    </div>
    <div class="container">
      <LineChart :stockname="benfitstock"></LineChart>
    </div>
    <div class="container">
      <LineChart :stockname="safestock"></LineChart>
    </div>
  </div>
  <div class="stockindex">
    <StockIndex></StockIndex>
  </div>
  <div class="allrank">
    <AllRank></AllRank>
  </div>
</template>

<style lang="scss" scoped>
.recommend {
  width: 99%;
  height: 25vw;
  display: flex;
  justify-content: space-between;
  padding-left: 1%;
  // padding-right: 1%;
  padding-top: 2vw;
  .container {
    height: 100%;
    width: 30%;
    border-radius: 2%;
    background-color: #27293d;

    border: 0px;
    transition: all 0.3s;
    &:hover {
      box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
    }
  }
}
.stockindex {
  // overflow: hidden;
  height: 30vw;
  width: 99%;
  padding-left: 1%;
  margin-top: 3vw;
}
.allrank {
  width: 99%;
  height: 30vw;
  padding-left: 1%;
  margin-top: 3vw;
  // background-color: pink;
}
</style>
