<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const i18n = useI18n();
    const size = computed(() => store.state.app.elementSize);
    const messages: any = i18n.messages.value;
    const locale = computed(() => {
      return {
        name: i18n.locale.value,
        el: messages[i18n.locale.value].el,
      };
    });
    return {
      locale,
      size,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  .info-wap {
    height: calc(100vh - 130px);
  }
  .el-table thead {
    tr, .el-table__cell {
      background: #d2e8ff !important;
      color: #333 !important;
    }
  }
  .el-dialog__header {
    margin-right: 0;
    text-align: left;
    background: #409eff;
    padding: 15px;
    line-height: 0;
    .el-dialog__title {
      color: #fff !important;
      font-weight: 600;
    }
    .el-dialog__close {
      color: #fff !important;
    }
  }
}
</style>
