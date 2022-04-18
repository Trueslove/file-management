<template>
  <div>
    <el-form :model="form" :inline="true">
      <el-form-item label="查借阅理由" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="申请人" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="详细描述" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="查阅时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="form.name"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-form-item>
      <el-form-item label="查阅时限(分钟)" :label-width="formLabelWidth">
        <el-input-number v-model="form.name" :min="1" @change="handleChange" />
      </el-form-item>
      
      <el-form-item label="授权查阅时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="form.name"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-form-item>
      <el-form-item label="查档时长(分钟)" :label-width="formLabelWidth">
        <el-input-number v-model="form.name" :min="1" @change="handleChange" />
      </el-form-item>
    </el-form>
    <el-table :data="gridData" border>
      <el-table-column property="date" label="授权说明" />
      <el-table-column property="name" label="姓名" />
      <el-table-column property="address" label="籍贯" />
      <el-table-column property="address" label="现职单位及职位" />
      <el-table-column property="address" label="授权状态" />
      <el-table-column property="address" label="档案状态" />
      <el-table-column label="操作" align="center" fixed="right">
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

const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";
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
