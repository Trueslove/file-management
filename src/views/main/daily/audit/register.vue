<template>
  <div class="audit">
    <div class="audit-tit">干部人事档案审核登记表</div>
    <tbody class="audit-wap">
      <tr>
        <td class="audit_row_1 row_tit">档案编号</td>
        <td class="audit_row_2">32323</td>
        <td class="audit_row_2 row_tit">姓名</td>
        <td class="audit_row_2">落尘</td>
        <td class="audit_row_2 row_tit">得分</td>
        <td class="audit_row_2"></td>
        <td class="audit_row_2 row_tit">审核结果</td>
        <td class="audit_row_2"></td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">任职时间</td>
        <td class="audit_row_1">32323</td>
        <td class="audit_row_2 row_tit">现任职务</td>
        <td class="audit_row_2" colspan="5"></td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">报送时间</td>
        <td class="audit_row_1">2022-04-24</td>
        <td class="audit_row_2 row_tit">报送单位</td>
        <td class="audit_row_2" colspan="5"></td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">初审</td>
        <td class="audit_row_1" colspan="7"></td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">复核</td>
        <td class="audit_row_1" colspan="7"></td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">复审</td>
        <td class="audit_row_1" colspan="7"></td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">领导审批</td>
        <td class="audit_row_1" colspan="7"></td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">入库审批</td>
        <td class="audit_row_1" colspan="7"></td>
      </tr>
      <tr>
        <td class="audit_row_1" colspan="2">审核内容</td>
        <td class="audit_row_1" colspan="7">存在问题</td>
      </tr>
      <tr>
        <td class="audit_row_1" rowspan="2">情况</td>
        <td class="audit_row_1" colspan="2">涂改造假情况</td>
        <td class="audit_row_1" colspan="5"></td>
      </tr>
      <tr>
        <td class="audit_row_1" colspan="2">造假情况</td>
        <td class="audit_row_1" colspan="5"></td>
      </tr>
    </tbody>
    <div class="audit-btn">
      <el-button type="primary">保存</el-button>
      <el-button type="primary">打印</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.audit-btn {
  padding-top: 10px;
  border-top: 1px solid #999;
}
.audit-tit {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
}
.audit-wap {
  border-bottom: 1px solid #999;
  .row_tit {
    color: #333;
    font-weight: 600;
  }
  tbody {
    border: 1px solid #999;
  }
  td {
    border: 1px solid #999;
    border-right: 0;
    border-bottom: 0;
    padding: 10px;
    font-size: 15px;
  }
  .audit_row_1 {
    width: 120px;
  }
  .audit_row_2 {
    width: 180px;
  }
  .audit_row_3 {
    width: 380px;
  }
  td:last-child {
    border-right: 1px solid #cecece;
  }
}
</style>