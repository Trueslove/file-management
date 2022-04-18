<template>
  <div class="info-wap">
    <div class="info">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <tableIndex />
        </el-tab-pane>
        <el-tab-pane label="档案目录" name="second">档案目录</el-tab-pane>
        <el-tab-pane label="信息集" name="third">信息集</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { defineComponent } from 'vue'
import tableIndex from './components/table/index.vue'

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

export default defineComponent({
  setup() {
    return {
      activeName,
      handleClick
    }
  },
  components: {
    tableIndex
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
.info-wap {
  margin: 15px;
}
.info {
  padding: 0 15px;
  background: #fff;
}
</style>