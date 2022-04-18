<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" size="small">添加</el-button>
        <el-button type="primary" size="small">查看</el-button>
        <el-button type="danger" size="small">删除</el-button>
        <el-button type="primary" size="small">生成静态名册</el-button>
      </div>
    </div>
    <div class="layout-container-table" style="padding-right:0">
      <el-table :data="tableData" height="calc(100vh - 260px)" style="border:1px solid #cecece">
        <el-table-column type="index" width="60" label="序号"/>
        <el-table-column prop="number" label="名册名称" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
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

    getTableData(true);
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

<style lang="scss" scoped>
.layout-container {
  width: calc(100% - 10px);
  height: 100%;
  margin: 0 0 0 10px;
}
</style>