<template>
  <div class="info-wap">
    <div class="info">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="动态名册" name="first">
          <div class="full">
            <div class="left">
              <rosterTable />
              <!-- <category /> -->
            </div>
            <div class="content">
              <my-table />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="静态名册" name="second">静态名册</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import type { TabsPaneContext } from "element-plus";
import { defineComponent, ref, provide } from "vue";
import Category from "./category.vue";
import myTable from "./my-table.vue";
import rosterTable from "./roster-table.vue";


const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

export default defineComponent({
  setup() {
    let active: any = ref({});
    provide("active", active);
    return {
      activeName,
      handleClick,
    };
  },
  components: {
    Category,
    myTable,
    rosterTable
  },
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