<template>
  <div class="info-wap">
    <div class="info">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="档案授权" name="first">
          <myTable />
        </el-tab-pane>
        <el-tab-pane label="快捷授权" name="second">快捷授权</el-tab-pane>
        <el-tab-pane label="重新授权" name="third">重新授权</el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog v-model="dialogFormVisible" width="70%" title="授权">
      <dilogForm />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { defineComponent } from 'vue'
import myTable from './my-table.vue'
import dilogForm from './dilog-Form.vue'

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

export default defineComponent({
  setup() {
    return {
      activeName,
      handleClick,
      dialogFormVisible: true
    }
  },
  components: {
    myTable,
    dilogForm
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