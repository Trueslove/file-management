<template>
  <div class="audit">
    <div class="audit-tit">档案材料鉴别登记表</div>
    <tbody class="audit-wap">
      <tr>
        <td class="audit_row_1 row_tit">档案编号</td>
        <td class="audit_row_1">32323</td>
        <td class="audit_row_2 row_tit">案件部门</td>
        <td class="audit_row_2">刑事案件非洲巨蜥</td>
        <td class="audit_row_2 row_tit">姓名</td>
        <td class="audit_row_2">落尘</td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">材料类别</td>
        <td class="audit_row_1">32323</td>
        <td class="audit_row_2 row_tit">材料序号</td>
        <td class="audit_row_2">11</td>
        <td class="audit_row_2 row_tit">材料名称</td>
        <td class="audit_row_2">钢铁虾</td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">页数</td>
        <td class="audit_row_1">2</td>
        <td class="audit_row_2 row_tit">形成日期</td>
        <td class="audit_row_2">2022-04-24</td>
        <td class="audit_row_2 row_tit">收件日期</td>
        <td class="audit_row_2">2022-04-24</td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">接收类型</td>
        <td class="audit_row_1">2</td>
        <td class="audit_row_2 row_tit">接收人</td>
        <td class="audit_row_2">2022-04-24</td>
        <td class="audit_row_2 row_tit"></td>
        <td class="audit_row_2"></td>
      </tr>
      <tr>
        <td class="audit_row_1 row_tit">序号</td>
        <td class="audit_row_3 row_tit" colspan="3">鉴别方法</td>
        <td class="audit_row_2 row_tit">存在问题</td>
        <td class="audit_row_2 row_tit">备注</td>
      </tr>
      <tr>
        <td class="audit_row_1">1</td>
        <td class="audit_row_1">真实</td>
        <td class="audit_row_2" colspan="2" style="text-align: left">
          <p>1. 问题1</p>
          <p>2. 问题2</p>
          <p>3. 问题3</p>
          <p>4. 问题4</p>
        </td>
        <td class="audit_row_2"></td>
        <td class="audit_row_2"></td>
      </tr>
      <tr>
        <td class="audit_row_1">2</td>
        <td class="audit_row_1">全测</td>
        <td class="audit_row_2" colspan="2" style="text-align: left">
          <p>1. 问题1</p>
          <p>2. 问题2</p>
          <p>3. 问题3</p>
          <p>4. 问题4</p>
        </td>
        <td class="audit_row_2"></td>
        <td class="audit_row_2"></td>
      </tr>
      <tr>
        <td class="audit_row_1">3</td>
        <td class="audit_row_1">规范</td>
        <td class="audit_row_2" colspan="2" style="text-align: left">
          <p>1. 问题1</p>
          <p>2. 问题2</p>
          <p>3. 问题3</p>
          <p>4. 问题4</p>
        </td>
        <td class="audit_row_2"></td>
        <td class="audit_row_2"></td>
      </tr>
    </tbody>
    <div class="audit-btn">
      <el-button type="primary">接收</el-button>
      <el-button type="primary">退回</el-button>
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
  }
  .audit_row_1 {
    width: 80px;
  }
  .audit_row_2 {
    width: 150px;
  }
  .audit_row_3 {
    width: 380px;
  }
  td:last-child {
    border-right: 1px solid #cecece;
  }
}
</style>