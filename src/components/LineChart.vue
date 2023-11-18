<template>
  <el-card class="shadow"
    >
    <template #header>
      <div class="card-header">
        <span>{{ stockname }}</span>
        <div class="stockname">
          <span> 上证指数&nbsp000001</span><el-icon><DArrowRight /></el-icon>
        </div>
      </div>
    </template>
    <div class="title">
      {{ currentDate }}
      &nbsp&nbsp&nbsp&nbsp&nbsp股价:
      <span class="number"> {{ dataList[dataList.length - 1] }}</span>
      &nbsp&nbsp&nbsp&nbsp&nbsp涨幅:
      <span class="number">{{ changeList[changeList.length - 1] + "%" }}</span>
    </div>
    <div ref="linechart" class="linechart"></div
  >
  </el-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { GridComponent, GridComponentOption } from "echarts/components";
import { TooltipComponent } from "echarts/components";
import { TitleComponent } from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
defineProps(["stockname"]);
const linechart = ref();
const formattedDates: any = [];
const currentDate = ref();
const dataList = [820, 932, 901, 934, 1290, 1330];
const changeList: number[] = [];
const baseline = dataList[0]; // 第一个数据作为基准
for (let i = 0; i < dataList.length; i++) {
  const changeRate = ((dataList[i] - baseline) / baseline) * 100; // 计算变化率
  const roundedRate = parseFloat(changeRate.toFixed(2)); // 保留两位小数
  changeList.push(roundedRate); // 将结果填充到第二个数组
}

onMounted(() => {
  getdata();
  init();
});
function init() {
  echarts.use([
    GridComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition,
    TooltipComponent,
    TitleComponent,
  ]);

  type EChartsOption = echarts.ComposeOption<
    GridComponentOption | LineSeriesOption
  >;

  let myChart = echarts.init(linechart.value);
  let option: EChartsOption;

  option = {
    tooltip: {
      trigger: "axis",
      // confine: true,
      axisPointer: {
        type: "line",
        label: {
          show: true,
        },
      },
    },
    grid: {
      left: "14%",
      top: "22%",
      right: "17%",
      bottom: "12%",
    },
    // legend: {
    //   show:true,
    //   data: ["昨日总人数"],
    //   top: "64%",
    //   textStyle: {
    //     color: "red",
    //     fontSize: 14,
    //   },
    // },
    xAxis: {
      type: "category",
      data: formattedDates,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        show: true,
        interval: 0,
      },
    },
    yAxis: [
      {
        type: "value",
        name: "",
        min: Math.min(...dataList) - 1,
        max: Math.max(...dataList) + 1,
        splitLine: {
          show: true,
          lineStyle: {
            opacity: 0.3,
            type: "dotted",
          },
        },
      },
      {
        type: "value",
        name: "",
        min: Math.min(...changeList) - 5,
        max: Math.max(...changeList) + 5,
        splitLine: {
          show: true,
          lineStyle: {
            opacity: 0,
            type: "dotted",
          },
        },
        axisLabel: {
          show: true,
          formatter: "{value} %", //右侧Y轴文字显示
        },
      },
    ],
    series: [
      {
        // yAxisIndex: 1,
        data: dataList,
        name: "股价",
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#dfb024",
          width: 2,
          shadowBlur: 2,
        },
        itemStyle: {
          //折线拐点标志的样式
          color: "#dfb024",
          shadowColor: "#26D9FF",
          shadowBlur: 2,
        },
      },
      {
        data: changeList,
        name: "涨幅",
        // yAxisIndex: 2,
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#dfb024",
          width: 2,
          shadowBlur: 2,
        },
      },
    ],
  };

  option && myChart.setOption(option);
}
function getdata() {
  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).padStart(2, "0");

    const formattedDate = `${month}-${day}`;
    if (i == 0) {
      currentDate.value = `${year}-${month}-${day}`;
    }
    formattedDates.push(formattedDate);
  }
}
</script>

<style lang="scss" scoped>
.shadow {
  height: 100%;
  width: 100%;
  border-radius: 2%;
  background-color: #27293d;

  border: 0px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
  }
  .card-header {
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #fff;
      font-size: 2vw;
      line-height: 1vw;
    }
    .stockname {
      cursor: pointer;
      font-size: 1.2vw;
      color: #e21f11;
      span {
        margin-top: -0.2vw;
        font-size: 1.5vw;
        color: #e21f11;
      }
    }
  }
  .title {
    // top: 1vw;
    transform: translateY(-0.5vw);
    height: 3vw;
    width: 25vw;
    color: #e6e6e6;
    line-height: 2vw;
    align-items: center;
    // z-index: 999;
    position: relative;
    .number {
      color: #e61c00;
      line-height: 2vw;
      align-items: center;
    }
  }
  .linechart {
    margin-top: -4vw;
    margin-left: -1.5vw;
    height: 18.35vw;
    width: 116%;
    // background-color: skyblue;
  }
}
</style>
