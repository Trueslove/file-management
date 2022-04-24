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
        label="档案人员"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="整理日期"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-date-picker
          v-model="form.name"
          type="datetimerange"
          range-separator="To"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
        />
      </el-form-item>
      <el-form-item
        label="正本数"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="副本数"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="整理人"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="审核人"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="备注"
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
import { Delete } from "@element-plus/icons";
import type { FormInstance } from "element-plus";
import {  ElMessage, ElMessageBox } from "element-plus";

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

const gridData = reactive([]);
const handleAdd = () => {
  gridData.push({ name: "小米姑娘", sex: "男", job: "司令", mz: '汉', csrq: '2012-02-12', js: '12' });
};
const handleDelete = () => {
  ElMessageBox.confirm(
    '确定删除选中记录？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '取消删除',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除成功',
      })
    })
}
export default defineComponent({
  setup() {
    return {
      dialogTableVisible,
      dialogFormVisible,
      formLabelWidth,
      Delete,
      form,
      gridData,
      handleChange,
      rules,
      ruleFormRef,
      handleAdd,
      handleDelete
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
