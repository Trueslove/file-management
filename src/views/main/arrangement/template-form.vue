<template>
  <div>
    <div class="electronics-tit">查缺单</div>
    <div class="elec-info-wap">
      <div class="elec-info-cell">
        <span>姓名：</span>
        <span class="elec-info-b">落尘</span>
      </div>
      <div class="elec-info-cell">
        <span>查缺人：</span>
        <span class="elec-info-b">杭州一路向西有限公司</span>
      </div>
      <div class="elec-info-cell">
        <span>查缺时间：</span>
        <span class="elec-info-b">100</span>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="answer" label="类别">
        <template #default="scope">
          <el-select
            v-model="scope.row.answer"
            class="m-2"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="answer" label="文件名称">
        <template #default="scope">
          <el-input v-model="scope.row.answer"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="answer" label="查缺情况">
        <template #default="scope">
          <el-input v-model="scope.row.answer"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="answer" label="说明">
        <template #default="scope">
          <el-input v-model="scope.row.answer"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="fen" label="状态" />
      <el-table-column
        :label="$t('message.common.handle')"
        align="center"
        fixed="right"
        width="120"
      >
        <template #default="scope">
          <el-button type="primary" @click="handleAdd" :icon="Plus" size="small" circle />
          <el-button type="primary" @click="handleDelete" :icon="Minus" size="small" circle />
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 10px">
      <el-button type="primary" size="small">保存</el-button>
      <el-button type="danger" size="small">取消</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { Plus, CirclePlusFilled, Minus } from "@element-plus/icons";

export default defineComponent({
  setup() {
    const tableData = reactive([
      {
        xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
        name: "存在不一样情况，否决",
        answer: "",
        fen: '待审核',
        kou: "",
        de: "",
      },
    ]);
    const handleAdd = () => {
      tableData.push({
        xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
        name: "存在不一样情况，否决",
        answer: "",
        fen: '待审核',
        kou: "",
        de: "",
      })
    }
    const handleDelete = () => {
      tableData.splice(0, 1)
    }
    return {
      tableData,
      options: [],
      CirclePlusFilled,
      Plus,
      Minus,
      handleAdd,
      handleDelete
    };
  },
});
</script>

<style lang="scss" scoped>
.electronics-tit {
  font-size: 28px;
  font-weight: 600;
}
.elec-info-wap {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px;
  .elec-info-b {
    border-bottom: 1px dashed #cecece;
  }
}
</style>