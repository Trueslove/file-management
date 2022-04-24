<template>
  <div class="info-wap">
    <div class="info">
      <div class="full">
        <div class="left">
          <templateLTable />
        </div>
        <div class="content">
          <templateRTable />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { TabsPaneContext } from "element-plus";
import { defineComponent, ref, provide } from "vue";
import templateRTable from "./template-r-table.vue";
import templateLTable from "./template-l-table.vue";

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
    templateRTable,
    templateLTable,
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
    margin-top: 54px;
    height: calc(100vh - 262px);
    border: 1px solid #d2e8ff;
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