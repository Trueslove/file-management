<template>
  <div class="layout-container">
    
    <el-form
      :model="form"
      :rules="rules"
      ref="ruleFormRef"
      :inline="true"
      style="width: 100%; display: flex; flex-wrap: wrap"
    >
      <el-form-item
        label="转往单位"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
         <el-select
          v-model="form.name"
          class="m-2"
          placeholder="请输入转往单位"
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
        label="经办人员"
        style="width: 45%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="专递日期"
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
        label="备注"
        style="width: 100%"
        :label-width="formLabelWidth"
        prop="name"
      >
        <el-input type="textarea" v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="false"
        :showIndex="true"
        :data="tableData"
        :showSelection="false"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
      <el-table-column property="name" label="档案人员" />
      <el-table-column property="sex" label="籍贯" />
      <el-table-column property="mz" label="民族" />
      <el-table-column property="csrq" label="出生日期" />
      <el-table-column property="js" label="是否有数字档案" />
      <el-table-column property="js" label="现职单位及职务" />
      </Table>
      <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" />
    </div>
    <el-dialog v-model="dialogFormVisible" width="70%" title="档案新增">
      <dilogForm />
    </el-dialog>
    <!-- 数字审核 -->
    <el-dialog v-model="electronicsShow" width="70%" title="数字审核">
      <dilogElectron />
    </el-dialog>
    <!-- 纸质审核 -->
    <el-dialog v-model="paperShow" width="70%" title="纸质审核">
      <dilogPaper />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, inject, watch } from "vue";
import Table from "@/components/table/index.vue";
import { Page } from "@/components/table/type";
import { getData, del } from "@/api/table";
import Layer from "./layer.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { LayerInterface } from "@/components/layer/index.vue";
import { selectData, radioData } from "./enum";
import { Plus, Search, Delete } from "@element-plus/icons";
import dilogForm from './receive-Form.vue'
import dilogElectron from './audit/electronics.vue'
import dilogPaper from './audit/paper.vue'
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

interface User {
  id: string;
  name: string;
  amount1: string;
  amount2: string;
  amount3: number;
}

export default defineComponent({
  components: {
    Table,
    Layer,
    dilogForm,
    dilogElectron,
    dilogPaper
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: "",
      value: "",
      value1: "",
    });
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show: false,
      title: "新增",
      showButton: true,
    });
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 20,
      total: 0,
    });
    const activeCategory: any = inject("active");
    const loading = ref(true);
    const tableData = ref([]);
    const chooseData = ref([]);
    const dialogFormVisible = ref(false);
    const electronicsShow = ref(false);
    const paperShow = ref(false);
    const handleSelectionChange = (val: []) => {
      chooseData.value = val;
    };
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getTableData = (init: boolean) => {
      loading.value = true;
      if (init) {
        page.index = 1;
      }
      let params = {
        page: page.index,
        pageSize: page.size,
        ...query,
      };
      getData(params)
        .then((res) => {
          let data = res.data.list;
          if (Array.isArray(data)) {
            data.forEach((d) => {
              const select = selectData.find(
                (select) => select.value === d.choose
              );
              select
                ? (d.chooseName = select.label)
                : (d.chooseName = d.choose);
              const radio = radioData.find(
                (select) => select.value === d.radio
              );
              radio ? (d.radioName = radio.label) : d.radio;
            });
          }
          tableData.value = res.data.list;
          page.total = Number(res.data.pager.total);
        })
        .catch((error) => {
          tableData.value = [];
          page.index = 1;
          page.total = 0;
        })
        .finally(() => {
          loading.value = false;
        });
    };
    // 删除功能
    const handleDel = (data: object[]) => {
      let params = {
        ids: data
          .map((e: any) => {
            return e.id;
          })
          .join(","),
      };
      del(params).then((res) => {
        ElMessage({
          type: "success",
          message: "删除成功",
        });
        getTableData(tableData.value.length === 1 ? true : false);
      });
    };
    // 数字审核功能
    const handleNum = () => {
      electronicsShow.value = true;
    };
    // 纸质审核功能
    const handlePaper = () => {
      paperShow.value = true;
    };
    // 新增弹窗功能
    const handleAdd = () => {
      dialogFormVisible.value = true;
      // layer.title = "新增数据";
      // layer.show = true;
      // delete layer.row;
    };
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title = "编辑数据";
      layer.row = row;
      layer.show = true;
    };
    watch(activeCategory, (newVal) => {
      getTableData(true);
    });
    getTableData(true)
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
    return {
      Plus,
      Search,
      Delete,
      query,
      tableData,
      chooseData,
      loading,
      page,
      layer,
      options,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getTableData,
      dialogFormVisible,
      electronicsShow,
      handleNum,
      handlePaper,
      paperShow,
      dialogTableVisible,
      formLabelWidth,
      form,
      handleChange,
      rules,
      ruleFormRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.layout-width {
  margin-right: 5px;
}
.layout-container {
  height: calc(100vh - 130px);
}
</style>