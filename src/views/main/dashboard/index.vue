<template>
  <div class="box">
    <basic-template />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basicTemplate from './components/basic-template.vue'
export default defineComponent({
  components: {
    basicTemplate
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
  }
</style>