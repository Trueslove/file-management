<template>
  <div>
    <el-form
      :model="form"
      :rules="rules"
      ref="ruleFormRef"
      :inline="true"
      style="width: 100%; display: flex; flex-wrap: wrap"
    >
      <el-form-item
        label="接收单位"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-select
          v-model="form.name"
          class="m-2"
          placeholder="接收单位"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="标题"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="催收内容"
        style="width: 100%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input type="textarea" v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <span class="dialog-footer">
      <el-button type="primary" @click="dialogFormVisible = false"
        >保存</el-button
      >
      <el-button type="danger" @click="dialogFormVisible = false"
        >取消</el-button
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = "90px";
const ruleFormRef = ref<FormInstance>();
const rules = reactive({
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "change",
    },
  ],
});
const handleChange = (value: number) => {
  console.log(value);
};

const form = reactive({
  name: "",
});
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
export default defineComponent({
  setup() {
    return {
      dialogTableVisible,
      dialogFormVisible,
      formLabelWidth,
      form,
      handleChange,
      rules,
      ruleFormRef,
      options,
    };
  },
});
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
