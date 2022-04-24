<template>
  <div class="">
    <div class="">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="基础信息" name="first">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="answer" label="文件名称" />
            <el-table-column prop="answer" label="文件情况" />
            <el-table-column prop="answer" label="情况说明" />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="档案目录" name="1">档案目录</el-tab-pane>
        <el-tab-pane label="信息集" name="2">信息集</el-tab-pane>
        <el-tab-pane label="更新情况" name="3">更新情况</el-tab-pane>
        <el-tab-pane label="完成情况" name="4">完成情况</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import type { TabsPaneContext } from "element-plus";
import { defineComponent, ref, provide, reactive } from "vue";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

export default defineComponent({
  setup() {
    let active: any = ref({});
    provide("active", active);
    const tableData = reactive([
      {
        xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
        name: "存在不一样情况，否决",
        answer: "qweq",
        fen: "待审核",
        kou: "",
        de: "",
      }, {
        xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
        name: "存在不一样情况，否决",
        answer: "qweq",
        fen: "待审核",
        kou: "",
        de: "",
      },
    ]);

    return {
      activeName,
      handleClick,
      tableData,
    };
  },
  components: {},
});
</script>
<style>
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
<style lang="scss" scoped>
.full {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  height: calc(100vh - 180px);
  .left {
    width: 300px;
  }
  .content {
    flex: 1;
    width: calc(100% - 250px);
    height: 100%;
  }
}
.info-wap {
  margin: 15px;
}
.info {
  padding: 0 15px;
  background: #fff;
}
</style>