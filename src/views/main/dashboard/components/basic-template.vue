<template>
  <div>
    <el-card class="box-card">
      <!-- 日常办公 -->
      <template #header>
        <div class="card-header">
          <span>日常办公</span>
          <el-icon size="20" color="#000">
            <setting />
          </el-icon>
        </div>
      </template>
      <div class="box">
        <div
          class="item"
          v-for="(item, index) in menuList"
          :key="index"
          @click="handleToPage(item.url)"
        >
          <img class="item-img" src="" alt="" />
          <p class="item-txt">{{ item.name }}</p>
        </div>
      </div>
    </el-card>
    <div class="content-box">
      <!-- 干部人员大数据 -->
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>干部人员大数据</span>
          </div>
        </template>
        <div class="">
          <div class="gb-box-wap">
            <span style="font-size:12px">单位：人</span>
            <div class="db-cell-wap">
              <div class="db-box-cell">
                <span class="db-box-color" style="background:#5470C6"></span>
                <span class="db-box-tit">现职人员</span>
                <span style="color: #5470C6">1099</span>
              </div>
              <div class="db-box-cell">
                <span class="db-box-color" style="background:#a588f1"></span>
                <span class="db-box-tit">离职人员</span>
                <span style="color: #a588f1">1099</span>
              </div>
              <div class="db-box-cell">
                <span class="db-box-color" style="background:#F7DF1D"></span>
                <span class="db-box-tit">调出人员</span>
                <span style="color: #F7DF1D">1099</span>
              </div>
              <div class="db-box-cell">
                <span class="db-box-color" style="background:#f36c6c"></span>
                <span class="db-box-tit">已去世</span>
                <span style="color: #f36c6c">1099</span>
              </div>
            </div>
          </div>
          <div id="gb" style="width: 100%; height: 450px;margin-top:-40px"></div>
        </div>
      </el-card>
      <!-- 档案台账管理 -->
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>档案台账管理</span>
            <div>
              <span
                class="card-nav-item"
                v-for="(item, index) in navTzList"
                :key="index"
                :class="index === active ? 'card-nav-active' : ''"
                >{{ item }}</span
              >
            </div>
          </div>
        </template>
        <div class="">
          <div id="datz" style="width: 100%; height: 400px"></div>
          <div class="datz-info">
            截至201203，收录干部 <mark>12300</mark>人，
            库存档案应为<mark>12300</mark>卷， 实存<mark>12300</mark>卷，
            现已存<mark>12300</mark>卷
          </div>
        </div>
      </el-card>
      <!-- 待办事项 -->
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>待办事项</span>
            <el-link type="primary">更多</el-link>
          </div>
        </template>
        <div class="">
          <div class="box-cell" v-for="(item, index) in 3" :key="index">
            <span>{{ index + 1 }}</span>
            <span class="box-cell-title">电子档案授权</span>
            <span class="box-cell-info"
              >2022-04-17 查档的申请（记录）待审核</span
            >
            <el-icon size="26" color="#ffb800">
              <clock />
            </el-icon>
          </div>
        </div>
      </el-card>
      <!-- 系统通知 -->
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>系统通知</span>
            <el-link type="primary">更多</el-link>
          </div>
        </template>
        <div class="">
          <div class="box-cell" v-for="(item, index) in 3" :key="index">
            <span style="margin-right：15px">{{ index + 1 }}</span>
            <span class="box-cell-info">紧急网络维护通知</span>
            <el-button size="small" type="success">详情</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Setting, Clock } from "@element-plus/icons";
import { defineComponent, ref, onMounted } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  setup() {
    const datzInit = () => {
      const datzDom = document.getElementById("datz");
      var myChart = echarts.init(datzDom);
      var option = {
        title: {
          text: '单位：人',
        },
        xAxis: {
          type: "category",
          data: ["收录干部", "库存实际档案", "实存实体档案", "伤出"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              200,
              {
                value: 100,
                itemStyle: {
                  color: "#a588f1",
                },
              },
              {
                value: 50,
                itemStyle: {
                  color: "#F7DF1D",
                },
              },
              {
                value: 40,
                itemStyle: {
                  color: "#f36c6c",
                },
              },
            ],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      myChart.setOption(option);
    };
    const gbInit = () => {
      const gbDom = document.getElementById("gb");
      var myChart = echarts.init(gbDom);
      var option = {
        legend: {
          data: ['bar', 'bar2', 'bar3', 'bar4'],
          left: '10%'
        },
        xAxis: {
          type: "category",
          data: ["现职人员", "离职人员", "调出人员", "已去世"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              200,
              {
                value: 100,
                itemStyle: {
                  color: "#a588f1",
                },
              },
              {
                value: 50,
                itemStyle: {
                  color: "#F7DF1D",
                },
              },
              {
                value: 40,
                itemStyle: {
                  color: "#f36c6c",
                },
              },
            ],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      myChart.setOption(option);
    };
    onMounted(() => {
      datzInit();
      gbInit();
    });
    return {
      menuList: [
        { name: "档案授权", url: "" },
        { name: "档案查阅登记", url: "" },
        { name: "档案授权登记", url: "" },
        { name: "档案续收", url: "" },
        { name: "档案审核", url: "" },
        { name: "档案转递", url: "" },
        { name: "档案催收", url: "" },
        { name: "催收通知", url: "" },
      ],
      navTzList: ["库存", "查借阅", "散材料", "日常量"],
      active: 0,
      datzInit,
      gbInit
    };
  },
  components: {
    Setting,
    Clock,
  },
  methods: {
    handleToPage(url) {
      console.log("要跳转的连接" + url);
    },
  },
});
</script>

<style lang="scss" scoped>
.gb-box-wap {
  display: flex;
  justify-content: space-between;
  .db-cell-wap {
    display: flex;
    .db-box-cell {
      font-size: 12px;
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
    .db-box-color {
      display: block;
      width: 20px;
      height: 10px;
      border-radius: 3px;
    }
    .db-box-tit {
      margin-left: 10px;
    }
  }
}
.datz-info {
  font-size: 12px;
  margin-top: -30px;
}
.box-cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  border-bottom: 1px solid #ddd;
  line-height: 35px;
  padding: 0 10px;
  .box-cell-info {
    text-align: left;
    flex: 1;
  }
  .box-cell-title {
    margin: 0 20px;
  }
}
.content-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .box-card {
    width: 48%;
    margin-top: 15px;
    .card-nav-item {
      font-size: 12px;
      padding: 5px 10px;
      cursor: pointer;
    }
    .card-nav-active {
      background: #4d8eff;
      border-radius: 5px;
      color: #fff;
    }
  }
}
.box-card {
  .card-header {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item {
      margin: 0 30px 0 20px;
      .item-img {
        width: 80px;
        height: 80px;
        background: #4d8eff;
        border-radius: 10px;
        display: block;
      }
      .item-txt {
        color: #333;
        font-size: 12px;
      }
    }
  }
}
</style>