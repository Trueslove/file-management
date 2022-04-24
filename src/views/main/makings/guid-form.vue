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
        label="归档人"
        :label-width="formLabelWidth"
        prop="cyDate"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="归档时间"
        :label-width="formLabelWidth"
        prop="cyDate"
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
        label="材料类别"
        :label-width="formLabelWidth"
      >
        <el-select class="m-2" placeholder="材料类别">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="备注"
        style="width: 100%"
        :label-width="formLabelWidth"
      >
        <el-input type="textarea" v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <!-- <el-table :data="gridData" border style="margin-bottom: 15px">
      <el-table-column type="index" label="序号" width="55" />
      <el-table-column property="date" label="档案人员" />
      <el-table-column property="address" label="材料名称" />
      <el-table-column property="address" label="材料名称代码" />
      <el-table-column property="address" label="材料类别" />
      <el-table-column property="address" label="份数" />
      <el-table-column property="address" label="页数" />
      <el-table-column property="address" label="形成时间" />
      <el-table-column property="address" label="备注" />
      <el-table-column
        label="操作"
        align="center"
        fixed="right"
        width="60"
        v-if="typeDialog == 'add'"
      >
        <template #default="scope">
          <el-button type="danger" :icon="Close" size="small" circle />
        </template>
      </el-table-column>
    </el-table> -->
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
import { Close } from "@element-plus/icons";
import type { FormInstance } from "element-plus";

const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = "120px";
const ruleFormRef = ref<FormInstance>();
const rules = reactive({
  cyDate: [
    {
      required: true,
      message: "",
      trigger: "change",
    },
  ],
  cdTime: [
    {
      required: true,
      message: "",
      trigger: "change",
    },
  ],
});
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
  cdTime: "",
});

const gridData = reactive([]);

export default defineComponent({
  props: ["typeDialog"],
  setup() {
    const handleAdd = () => {
      gridData.push({
        date: "未授权",
        name: "小明",
        address: "浙江省",
      });
    };
    return {
      dialogTableVisible,
      dialogFormVisible,
      formLabelWidth,
      Close,
      form,
      gridData,
      handleChange,
      num,
      rules,
      ruleFormRef,
      handleAdd,
      options: [],
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
