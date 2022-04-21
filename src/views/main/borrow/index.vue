<template>
  <div class="info-wap">
    <div class="info">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="档案授权" name="first" class="info-pane">
          <myTable />
        </el-tab-pane>
        <el-tab-pane label="快捷授权" name="second" class="info-pane">快捷授权</el-tab-pane>
        <el-tab-pane label="重新授权" name="third" class="info-pane">重新授权</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { defineComponent } from 'vue'
import myTable from './my-table.vue'

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

export default defineComponent({
  setup() {
    return {
      activeName,
      handleClick,
    }
  },
  components: {
    myTable
  }
})
</script>
<style>
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
<style scoped>
.info-pane {
  height: calc(100vh - 180px);
}
.info-wap {
  margin: 15px;
}
.info {
  padding: 0 15px;
  background: #fff;
}
</style>