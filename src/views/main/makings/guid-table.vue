<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-select class="m-2" placeholder="检索">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <!-- <el-button type="primary" @click="handleAdd">导出</el-button> -->
      </div>
      <div class="layout-container-form-search">
        <el-button
          type="primary"
          class="search-btn"
          @click="handleAdd"
          >导出</el-button
        >
      </div>
    </div>
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
        <el-table-column prop="number" label="档案编号" align="center" />
        <el-table-column prop="name" label="别名" align="center" />
        <el-table-column prop="radioName" label="材料类别" align="center" />
        <el-table-column prop="radioName" label="归档时间" align="center" />
        <el-table-column prop="radioName" label="状态" align="center" />
        <el-table-column prop="radioName" label="归档人" align="center" />
        <el-table-column prop="radioName" label="归档类型" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="60">
        <template #default="scope">
          <el-button type="primary" @click="handleAdd" :icon="Plus" size="small" circle />
        </template>
      </el-table-column>
      </Table>
      <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" />
    </div>
    <el-dialog v-model="isShow" width="70%" :title="dialogTit">
      <dilogForm :typeDialog="typeDialog" />
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
import dilogForm from "./guid-form.vue";
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
    dilogForm
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
    const typeDialog = ref('');
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
      ElMessageBox.confirm("确定删除选中记录？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "取消删除",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "删除成功",
          });
        });
    };
    const isShow = ref(false);
    // 新增弹窗功能
    const handleAdd = () => {
      isShow.value = true;
      dialogTit.value = "归档";
      typeDialog.value = 'add';
    };
    // 新增弹窗功能
    const handleDetail = () => {
      isShow.value = true;
      dialogTit.value = "归档";
      typeDialog.value = 'detail';
    };
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      dialogTit.value = "档案登记修改";
      isShowStaff.value = true;
    };
    watch(activeCategory, (newVal) => {
      getTableData(true);
    });
    getTableData(true);
    const isShowStaff = ref(false);
    const dialogTit = ref("");
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
      isShowStaff,
      dialogTit,
      handleDetail,
      isShow,
      typeDialog
    };
  },
});
</script>

<style lang="scss" scoped>
.layout-width {
  margin-right: 5px;
}
.layout-container {
  width: calc(100% - 10px);
  height: 100%;
  margin: 0 0 0 10px;
}
</style>