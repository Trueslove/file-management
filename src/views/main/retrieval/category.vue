<template>
  <div class="category">
    <!-- 全库检索 -->
    <div class="header-box-wap">
      <div class="header-box-tit">全库检索</div>
      <div class="header-box">
        <el-input
          v-model="input"
          placeholder="请输入内容"
          @input="searchData(true)"
        ></el-input>
        <el-button type="primary" style="margin-left: 5px">查询</el-button>
      </div>
    </div>
    <!-- 高级检索 -->
    <div class="header-box-wap">
      <div class="header-box-tit">
        <span>高级检索</span>
        <span style="font-size: 12px;color:#409EFF">自定义查询>></span>
      </div>
      <div class="">
        <el-input
          v-model="input"
          class="header-box-input"
          placeholder="姓名/拼音"
          @input="searchData(true)"
        ></el-input>
        <el-input
          v-model="input"
          class="header-box-input"
          placeholder="性别"
          @input="searchData(true)"
        ></el-input>
        <el-input
          v-model="input"
          class="header-box-input"
          placeholder="籍贯"
          @input="searchData(true)"
        ></el-input>
        <el-input
          v-model="input"
          class="header-box-input"
          placeholder="现职单位及职位"
          @input="searchData(true)"
        ></el-input>
        <el-button type="primary" style="margin-left: 5px">查询</el-button>
      </div>
    </div>
    <!-- 收藏快查 -->
    <div class="header-box-wap header-box-wap-flex" style="min-height:135px;">
      <!-- <div class="header-box-tit">收藏快查</div> -->
      <div class="header-box">
        <el-button type="primary" style="margin-left: 5px">收藏快查</el-button>
      </div>
    </div>
    <!-- 查询日志 -->
    <div class="header-box-wap header-box-wap-flex" style="min-height:135px">
      <!-- <div class="header-box-tit">查询日志</div> -->
      <div class="header-box">
        <el-button type="primary" style="margin-left: 5px">查询日志</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { debounce } from "throttle-debounce";
export default defineComponent({
  setup() {
    const page = {
      index: 1,
      size: 30,
      total: 0,
    };
    let input = ref("");
    let loading = ref(true);
    const searchData = debounce(300, () => {
      // 点击查询 调用接口
    });

    return {
      loading,
      input,
      searchData,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-box-wap-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-box-input {
  margin-bottom: 10px;
}
.header-box-wap {
  background: #e8e2e2;
  margin-bottom: 5px;
  padding: 10px;
}
.header-box-tit {
  text-align: left;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 10px;
}
.category {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header-box {
    display: flex;
    align-items: center;
    h2 {
      padding: 0;
      margin: 0;
      margin-right: 20px;
      font-size: 14px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 30px;
      line-height: 30px;
    }
    .el-input {
      flex: 1;
    }
  }
}
</style>