<template>
  <div class="info-wap">
      <myTable />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import myTable from './search-table.vue'

export default defineComponent({
  setup() {
    return {
    }
  },
  components: {
    myTable
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