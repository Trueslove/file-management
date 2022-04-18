<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column prop="id" label="序号" />
      <el-table-column prop="name" label="材料名称" />
      <el-table-column prop="date" label="材料形成时间" />
      <el-table-column prop="page" label="页码" />
      <el-table-column prop="mark" label="备注" />
    </el-table>
  </div>
</template>
<script lang="ts" setup>
const tableData = [
  {
    id: "一",
    name: "履历类材料",
    children: [
      {
        id: "1",
        date: "2016-05-02",
        name: "学生履历",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "2",
        date: "2016-05-02",
        name: "学生履历",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "3",
        date: "2016-05-02",
        name: "学生履历",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "4",
        date: "2016-05-02",
        name: "学生履历",
        page: 1,
        mark: "我是备注",
      },
    ],
  },
  {
    id: "二",
    name: "自传和思想类材料",
    children: [
      {
        id: "1",
        date: "2016-05-02",
        name: "自传",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "2",
        date: "2016-05-02",
        name: "自传",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "3",
        date: "2016-05-02",
        name: "自传",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "4",
        date: "2016-05-02",
        name: "自传",
        page: 1,
        mark: "我是备注",
      },
    ],
  },
  {
    id: "三",
    name: "考核鉴定类材料",
    children: [
      {
        id: "1",
        date: "2016-05-02",
        name: "团员鉴定表",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "2",
        date: "2016-05-02",
        name: "团员鉴定表",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "3",
        date: "2016-05-02",
        name: "团员鉴定表",
        page: 1,
        mark: "我是备注",
      },
      {
        id: "4",
        date: "2016-05-02",
        name: "自传",
        page: 1,
        mark: "我是备注",
      },
    ],
  },
];
</script>
