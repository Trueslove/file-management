<template>
  <div>
    <div class="electronics-tit">干部人事档案数字档案审核评分表</div>
    <div class="elec-info-wap">
        <div class="elec-info-cell">
            <span>报送单位：</span>
            <span class="elec-info-b">单位XXX</span>
        </div>
        <div class="elec-info-cell">
            <span>姓名：</span>
            <span class="elec-info-b">落尘</span>
        </div>
        <div class="elec-info-cell">
            <span>工作单位及职务：</span>
            <span class="elec-info-b">杭州一路向西有限公司</span>
        </div>
        <div class="elec-info-cell">
            <span>审核得分：</span>
            <span class="elec-info-b">100</span>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="xiangmu" label="评分项目及标准" width="280" />
      <el-table-column prop="name" label="评分方法" width="100" />
      <el-table-column prop="answer" label="存在问题">
        <template #default="scope">
          <el-input v-model="scope.row.answer"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="fen" label="分值" />
      <el-table-column prop="kou" label="扣分">
        <template #default="scope">
          <el-input-number
            style="width: 105px"
            v-model="scope.row.kou"
            :min="1"
            :max="scope.row.fen"
            controls-position="right"
          />
        </template>
      </el-table-column>
      <el-table-column prop="de" label="得分">
        <template #default="scope">
          <el-input-number
            style="width: 105px"
            v-model="scope.row.de"
            :min="1"
            :max="scope.row.fen"
            controls-position="right"
          />
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:10px">
         <el-button type="primary" size="small">审核完成</el-button>
        <el-button type="primary" size="small">打印</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
  {
    xiangmu: "数组档案需与纸质档案保持一致，目录数据须与图像文件一致",
    name: "存在不一样情况，否决",
    answer: "",
    fen: 10,
    kou: "",
    de: "",
  },
];
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