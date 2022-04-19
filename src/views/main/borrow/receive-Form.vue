<template>
  <div>
    <el-form :model="form" 
    :rules="rules" ref="ruleFormRef" :inline="true" style="width:100%;display:flex;flex-wrap:wrap">
      <el-form-item label="来件单位" style="width:50%" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="案卷质量" style="width:40%" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="接收类型" style="width:50%" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="机要号" style="width:50%" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="来卷人员" style="width:50%" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="收件日期" style="width:50%" :label-width="formLabelWidth">
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
      <el-form-item label="详细描述" style="width:100%" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <el-table :data="gridData"  border style="margin-bottom:15px">
      <el-table-column type="selection" width="40" />
      <el-table-column type="index" label="序号" width="55" />
      <el-table-column property="date" label="授权说明" />
      <el-table-column property="name" label="姓名" />
      <el-table-column property="address" label="籍贯" />
      <el-table-column property="address" label="现职单位及职位" />
      <el-table-column property="address" label="授权状态" />
      <el-table-column property="address" label="档案状态" />
      <el-table-column label="操作" align="center" fixed="right" width="60">
        <template #default="scope">
          <el-button type="success" :icon="Search" size="small" circle />
        </template>
      </el-table-column>
    </el-table>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">拒绝</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
        >授权</el-button
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { Search } from "@element-plus/icons";
import type { FormInstance } from 'element-plus'

const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = "90px";
const ruleFormRef = ref<FormInstance>();
const rules = reactive({
  cyDate: [
    { required: true, message: 'Please input Activity name', trigger: 'change' },
  ],
  cdTime: [
    { required: true, message: 'Please input Activity name', trigger: 'change' },
  ]
})
const num = ref(1);
const handleChange = (value: number) => {
  console.log(value);
};

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
  cyDate: "",
  cdTime: ""
});

const gridData = [
  {
    date: "未授权",
    name: "小明",
    address: "浙江省",
  },
  {
    date: "未授权",
    name: "小明",
    address: "浙江省",
  },
  {
    date: "未授权",
    name: "小明",
    address: "浙江省",
  },
  {
    date: "未授权",
    name: "小明",
    address: "浙江省",
  },
  {
    date: "未授权",
    name: "小明",
    address: "浙江省",
  },
];

export default defineComponent({
  setup() {
    return {
      dialogTableVisible,
      dialogFormVisible,
      formLabelWidth,
      Search,
      form,
      gridData,
      handleChange,
      num,
      rules,
      ruleFormRef
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
