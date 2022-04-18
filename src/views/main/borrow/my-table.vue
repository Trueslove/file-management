<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-search">
        <el-input
          style="width: 200px;margin-right:5px"
          v-model="query.input"
          placeholder="输入申请人"
          @change="getTableData(true)"
        ></el-input>
        <el-date-picker
          style="margin-right:5px"
          v-model="query.input"
          type="date"
          placeholder="申请开始日期"
        />
        <el-date-picker
          style="margin-right:5px"
          v-model="query.input"
          type="date"
          placeholder="申请结束日期"
        />
        <el-select
          v-model="query.input"
          placeholder="请选择查借阅理由或目的"
          style="margin-right:5px;min-width:200px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="query.input"
          placeholder="请选择状态"
          style="margin-right:5px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button
          type="primary"
          :icon="Search"
          class="search-btn"
          @click="getTableData(true)"
          >{{ $t("message.common.search") }}</el-button
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
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="name" label="申请人" align="center" />
        <el-table-column prop="number" label="查借阅理由" align="center" />
        <el-table-column
          prop="chooseName"
          label="查询码"
          align="center"
        />
        <el-table-column prop="radioName" label="档案类型" align="center" />
        <el-table-column prop="radioName" label="申请时间" align="center" />
        <el-table-column prop="radioName" label="状态" align="center" />
        <el-table-column prop="radioName" label="档案所属机构" align="center" />
        <el-table-column prop="radioName" label="申请档案集合" align="center" />
        <el-table-column prop="radioName" label="详细描述" align="center" />
        <el-table-column
          :label="$t('message.common.handle')"
          align="center"
          fixed="right"
          width="200"
        >
          <template #default="scope">
            <el-button type="success" :icon="Search" size="small" circle />
            <el-button type="success" :icon="Plus" size="small" circle />
            <el-button type="success" :icon="Plus" size="small" circle />
          </template>
        </el-table-column>
      </Table>
      <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" />
    </div>
  </div>
</template>

<script lang="ts">
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
    // getTableData(true)
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