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
        label="来件单位"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="案卷质量"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="接收类型"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="机要号"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="来卷人员"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="收件日期"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-date-picker
          disabled
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
        label="详细描述"
        style="width: 100%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input type="textarea" v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      size="small"
      @click="handleAdd"
      style="float: left; margin-bottom: 10px"
      >添加人员</el-button
    >

    <el-table :data="gridData" border style="margin-bottom: 15px">
      <el-table-column type="index" label="序号" width="55" />
      <el-table-column property="name" label="档案人员" />
      <el-table-column property="sex" label="性别" />
      <el-table-column property="job" label="现职单位及职位" />
      <el-table-column property="mz" label="民族" />
      <el-table-column property="csrq" label="出生日期" />
      <el-table-column property="js" label="正本卷数" />
      <el-table-column property="js" label="副本卷数" />
      <el-table-column label="操作" align="center" fixed="right" width="60">
        <template #default="scope">
          <el-button type="danger" :icon="Delete" @click="handleDelete" size="small" circle />
        </template>
      </el-table-column>
    </el-table>
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
