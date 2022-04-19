<template>
  <div class="info-wap">
      <myTable />
      <el-dialog v-model="dialogFormVisible" width="70%" title="档案新增">
        <dilogForm />
      </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import myTable from './receive-table.vue'
import dilogForm from './receive-Form.vue'

export default defineComponent({
  setup() {
    return {
      dialogFormVisible: true
    }
  },
  components: {
    myTable,
    dilogForm,

  }
})
</script>
<style scoped>
.info-wap {
  margin: 15px;
}
.info {
  padding: 0 15px;
  background: #fff;
}
</style>