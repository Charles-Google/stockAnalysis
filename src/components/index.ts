import SvgIcon from "./SvgIcon.vue";
import HeaderBlock from "./HeaderBlock.vue";
import CoreBlock from "./CoreBlock.vue";
import LineChart from "./LineChart.vue";
import StockIndex from "./StockIndex.vue";
import AllRank from "./AllRank.vue";
import type { App, Component } from "vue";
const components: { [name: string]: Component } = {
  SvgIcon,
  HeaderBlock,
  CoreBlock,
  LineChart,
  StockIndex,
  AllRank,
};
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
