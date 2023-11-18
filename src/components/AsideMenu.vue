<template>
  <el-menu
    background-color="transparent"
    active-text-color="#ffd04b"
    class="el-menu-vertical-demo"
    default-active="2"
    :collapse="isCollapse"
    @mouseenter="onMouseOver"
    @mouseleave="onMouseOut"
  >
    <div class="menu_icon">
      <svg
        t="1700193420348"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1537"
        width="100%"
        height="100%"
        color="#303133"
      >
        <path
          d="M194.187431 235.50871m-69.997795 0a69.997795 69.997795 0 1 0 139.99559 0 69.997795 69.997795 0 1 0-139.99559 0Z"
          p-id="1538"
          fill="#303133"
        ></path>
        <path
          d="M347.505182 165.510915h552.305182v139.99559H347.505182z"
          p-id="1539"
          fill="#303133"
        ></path>
        <path
          d="M194.187431 512.1129m-69.997795 0a69.997795 69.997795 0 1 0 139.99559 0 69.997795 69.997795 0 1 0-139.99559 0Z"
          p-id="1540"
          fill="#303133"
        ></path>
        <path
          d="M347.505182 442.115105h552.305182v139.99559H347.505182z"
          p-id="1541"
          fill="#303133"
        ></path>
        <path
          d="M194.187431 788.49129m-69.997795 0a69.997795 69.997795 0 1 0 139.99559 0 69.997795 69.997795 0 1 0-139.99559 0Z"
          p-id="1542"
          fill="#303133"
        ></path>
        <path
          d="M347.505182 718.719294h552.305182v139.99559H347.505182z"
          p-id="1543"
          fill="#303133"
        ></path>
      </svg>
    </div>

    <el-divider border-style="dashed" style="width: 5vw" />

    <el-menu-item index="2">
      <el-icon :size="29"><TrendCharts /></el-icon>
      <template #title>
        <div class="text">数据首页</div>
      </template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Histogram /></el-icon>
      <template #title>
        <div class="text">推荐排行</div>
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon :size="29"><Wallet /></el-icon>
      <template #title>
        <div class="text">我的持仓</div>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isCollapse = ref(true);
const onMouseOver = () => {
  isCollapse.value = false;
};

const onMouseOut = () => {
  isCollapse.value = true;
};
</script>

<style lang="scss" scoped>
.el-menu--collapse {
  position: fixed;
  margin-top: 2vw;
  height: 93vw;
  width: 6vw;
  background-color: #f45a30;
  border: 0px;
  border-radius: 1vw;
  margin-left: 1.5vw;
  padding-left: 0.5vw;
  z-index: 666;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 20vw;
  position: fixed;
  margin-top: 2vw;
  height: 93vw;
  background-color: #f45a30;
  border: 0px;
  border-radius: 1vw;
  margin-left: 1.5vw;
  padding-left: 0.5vw;
  z-index: 666;
}

.text {
  font-weight: 600;
  font-size: 1.3vw;
  margin-left: 1.9vw;
  color: #fff;
}

.menu_icon {
  color: #303133;
  height: 2.5vw;
  width: 2.5vw;
  margin-top: 1vw;
  margin-left: 1vw;
  margin-bottom: -1vw;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
}
</style>
