<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" size="small">导出</el-button>
        <el-button type="primary" size="small">打印</el-button>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="query.input" size="small" :placeholder="$t('message.common.searchTip')" @change="getTableData(true)"></el-input>
        <el-button type="primary" size="small" class="search-btn" @click="getTableData(true)">{{ $t('message.common.search') }}</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="loading"
        :showIndex="true"
        :data="tableData"
        :span-method="arraySpanMethod"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column prop="number" label="籍贯" align="center" />
        <el-table-column
          prop="chooseName"
          label="工作单位及职务"
          align="center"
        />
        <el-table-column prop="radioName" label="民族" align="center" />
        <el-table-column prop="radioName" label="政治面貌" align="center" />
        <el-table-column prop="radioName" label="参加工作时间" align="center" />
        <el-table-column prop="radioName" label="学历" align="center" />
        <el-table-column label="浏览" align="center" fixed="right" width="100">
          <template #default="scope">
            <el-button type="success" :icon="Search" size="small" circle />
            <el-button type="success" :icon="Plus" size="small" circle />
          </template>
        </el-table-column>
      </Table>
      <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" />
    </div>
  </div>
</template>

<script lang="ts">
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import { defineComponent, ref, reactive, inject, watch } from "vue";
import Table from "@/components/table/index.vue";
import { Page } from "@/components/table/type";
import { getData, del } from "@/api/table";
import Layer from "./layer.vue";
import { ElMessage } from "element-plus";
import type { LayerInterface } from "@/components/layer/index.vue";
import { selectData, radioData } from "./enum";
import { Plus, Search, Delete } from "@element-plus/icons";
interface User {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

export default defineComponent({
  components: {
    Table,
    Layer,
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: "",
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
        category: activeCategory.value.id,
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
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = "新增数据";
      layer.show = true;
      delete layer.row;
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
    interface SpanMethodProps {
      row: User;
      column: TableColumnCtx<User>;
      rowIndex: number;
      columnIndex: number;
    }

    const arraySpanMethod = ({
      row,
      column,
      rowIndex,
      columnIndex,
    }: SpanMethodProps) => {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    };
    getTableData(true)
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
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getTableData,
    };
  },
});
</script>
<style lang="scss">
.layout-container-form-search {
  .el-input {
    margin-right: 10px !important;
  }
}
</style>
<style lang="scss" scoped>
.layout-container {
  width: calc(100% - 10px);
  height: 100%;
  margin: 0 0 0 10px;
}
</style>