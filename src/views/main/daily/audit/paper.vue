<template>
  <div class="info-wap paper-wap">
    <div class="info">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="干部人事档案审核登记表" name="first">
            <register />
        </el-tab-pane>
        <el-tab-pane label="干部人事档案审核评分表" name="second">
            <score />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { defineComponent } from 'vue'
import register from './register.vue'
import score from './score.vue'

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
      register,
      score
  }
})
</script>
<style lang="scss">
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.paper-wap {
.el-dialog__body {
  overflow: auto !important;
}

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