<template>
  <div class="search-main-wap">
    <div id="search-main" class="search-main" style="height: 400px"></div>
    <el-dialog v-model="dialogTable" width="70%" :title="dialogTxt">
        <SearchTable />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as echarts from "echarts";
import SearchTable from "./search-table.vue"

type EChartsOption = echarts.EChartsOption;
export default defineComponent({
    components: {
        SearchTable
    },
  setup() {
    const init = () => {
      var chartDom = document.getElementById("search-main")!;
      var myChart = echarts.init(chartDom);
      var option: EChartsOption;
      option = {
        title: {
          text: "档案日常统计",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            data: [
              { value: 1048, name: "档案接收总数" },
              { value: 735, name: "档案审核总数" },
              { value: 580, name: "档案入库总数" },
              { value: 484, name: "档案转递总数" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      myChart.on("click", (e) => {
        let { name } = e;
        dialogTable.value = true;
        dialogTxt.value = name;
      });
    };
    const dialogTable = ref(false);
    const dialogTxt = ref('');
    onMounted(() => {
      init();
    });
    return {
      init,
      dialogTable,
      dialogTxt
    };
  },
});
</script>

<style lang="scss" scoped>
.search-main-wap {
  width: calc(100% - 60px);
  margin: 15px;
  height: calc(100vh - 160px);
  padding: 15px;
  background-color: #fff;
}
.search-main {
  width: calc(100% - 80px);
}
</style>