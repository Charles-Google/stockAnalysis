<template>
  <div class="container">
    <div class="left">
      <div class="stockinfo">贵州茅台 348723 股价:6.67 涨幅0.12%</div>
      <div class="map" ref="map"></div>
    </div>
    <el-tabs type="card" class="right" style="--el-main-padding: 0">
      <el-tab-pane ref="" label="User"
        ><template #label>
          <span class="tabs-label">
            <span
              :class="{
                'label-font': true,
                active: activeElement === 'element1',
              }"
              @click="toggleClass('element1')"
              >综合推荐</span
            >
          </span>
        </template>
        <el-table
          :data="tableData1"
          height="290"
          style="
            width: 100%;
            --el-bg-color: #27293d;
            --el-text-color-regular: #fac858;
            --el-fill-color-light: #a6a6a6;
          "
        >
          <el-table-column prop="date" label="排名" width="66" />
          <el-table-column prop="name" label="名称及代码" width="200" />
          <el-table-column prop="address" label="当前价格|涨幅" />
        </el-table>
      </el-tab-pane>
      <el-tab-pane ref="" label="Config"
        ><template #label>
          <span class="tabs-label">
            <span
              :class="{
                'label-font': true,
                active: activeElement === 'element2',
              }"
              @click="toggleClass('element2')"
              >最佳收益</span
            >
          </span> </template
        ><el-table
          :data="tableData2"
          height="290"
          style="
            width: 100%;

            --el-bg-color: #27293d;
            --el-text-color-regular: #fac858;
            --el-fill-color-light: #a6a6a6;
          "
        >
          <el-table-column prop="date" label="排名" width="66" />
          <el-table-column prop="name" label="名称及代码" width="200" />
          <el-table-column prop="address" label="当前价格|涨幅" /> </el-table
      ></el-tab-pane>
      <el-tab-pane ref="" label="Role"
        ><template #label>
          <span class="tabs-label">
            <span
              :class="{
                'label-font': true,
                active: activeElement === 'element3',
              }"
              @click="toggleClass('element3')"
              >最低风险</span
            >
          </span> </template
        ><el-table
          :data="tableData3"
          height="290"
          style="
            width: 100%;
            --el-bg-color: #27293d;
            --el-text-color-regular: #fac858;
            --el-fill-color-light: #a6a6a6;
          "
        >
          <el-table-column prop="date" label="排名" width="66" />
          <el-table-column prop="name" label="名称及代码" width="200" />
          <el-table-column prop="address" label="当前价格|涨幅" /> </el-table
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const map = ref();

const tableData1 = [
  {
    date: "1",
    name: "贵州茅台 348723",
    address: "6.345元 | 2.11%",
  },
  {
    date: "2",
    name: "新浪微博 342345",
    address: "6.345元 | 2.11%",
  },
  {
    date: "3",
    name: "特斯拉 353452",
    address: "6.345元 | 2.11%",
  },
  {
    date: "4",
    name: "鸿茅药酒 245432",
    address: "6.345元 | 2.11%",
  },
  {
    date: "5",
    name: "Tom",
    address: "6.345元 | 2.11%",
  },
  {
    date: "6",
    name: "Tom",
    address: "6.345元 | 2.11%",
  },
  {
    date: "7",
    name: "Tom",
    address: "6.345元 | 2.11%",
  },
];
const tableData2 = [
  {
    date: "1",
    name: "新浪微博 342345",
    address: "6.345元 | 2.11%",
  },
  {
    date: "2",
    name: "新浪微博 342345",
    address: "6.345元 | 2.11%",
    name: "贵州茅台 348723",
    address: "6.345元 | 2.11%",
  },
  {
    date: "3",
    name: "特sdasdljkas;dask拉 353452",
    address: "6.345元 | 2.11%",
  },
  {
    date: "4",
    name: "鸿茅药酒 245432",
    address: "6.345元 | 2.11%",
  },
  {
    date: "5",
    name: "Tom",
    address: "6.345元 | 2.11%",
  },
  {
    date: "6",
    name: "Tom",
    address: "6.345元 | 2.11%",
  },
  {
    date: "7",
    name: "Tom",
    address: "6.345元 | 2.11%",
  },
];
const tableData3 = [
  {
    date: "1",
    name: "新浪微博 342345",
    address: "6.345元 | 2.11%",
  },
  {
    date: "2",
    name: "新浪微博 342345",
    address: "6.345元 | 2.11%",
    name: "贵州茅台 348723",
    address: "6.345元 | 2.11%",
  },
];
let activeElement = "element1";

function toggleClass(element: any) {
  if (activeElement === element) {
    activeElement = "";
  } else {
    activeElement = element;
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  border-radius: 1vw;
  background-color: #27293d;
  display: flex;
  .left {
    width: 44%;
    height: 100%;

    .stockinfo {
      font-size: 2vw;
      height: 3vw;
      width: 100%;
      line-height: 3vw;
      color: #e71a1a;
    }
    .map {
      margin-top: 8vw;
      background-image: url(../assets/img/example.png);
      background-repeat: no-repeat;
      background-size: contain;width: 100%;
    height: 100%;
    }
  }
  .right {
    cursor: pointer;
    width: 49%;
    height: 100%;
    background-color: transparent;
    border: 0px;
    padding-top: 2vw;
    padding-left: 2vw;
    .tabs-label {
      display: block;
      color: #f6455c;
      font-size: 600;
      // background-color: #f6455c;
      height: 100%;
      line-height: 3vw;
      font-style: 2vw;
      padding: 0;
      margin: 0;
      .label-font {
        color: #fff;
        display: inline-block;
        height: 100%;
        // width: 10vw;
        color: #fff;
        font-size: 900;
        //  margin:-2vw;
      }
      .active {
        width: 10vw;

        color: #f6455c;
        padding-left: 3vw;
      }
    }
  }
}
</style>
