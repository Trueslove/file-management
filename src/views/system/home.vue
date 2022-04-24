<template>
  <div class="indexPage-wap">
    <div class="indexPage">
      <div class="title"><img src="../../assets/images/title.png" /></div>
      <div class="page">
        <div class="section">
          <div class="box">
            <div class="boxTitle"><i></i><span>基础信息</span></div>
            <div class="content">
              <a target="_blank" href="http://39.105.136.248:8080"
                >干部综合信息管理</a
              >
              <a href="http://150.158.35.138:1234/#/cadre/info">干部人事档案管理</a>
            </div>
          </div>
          <div class="box">
            <div class="boxTitle"><i></i><span>大数据分析管理</span></div>
            <div class="content">
              <a href="#">大数据分析管理</a>
            </div>
          </div>
          <div class="box">
            <div class="boxTitle"><i></i><span>通用业务</span></div>
            <div class="content">
              <a target="_blank" href="http://oa.so-keji.com/oa">OA协同办公系统</a>
            </div>
          </div>
        </div>
        <div class="box box4">
          <div class="boxTitle"><i></i><span>业务系统</span></div>
          <div class="content">
            <a target="_blank" href="http://49.232.4.229/user-login"
              >优秀年轻干部</a
            >
            <!-- <a href="#">公务员管理</a> -->
            <a href="#">工资管理</a>
            <a href="#">智慧党建</a>
            <a href="#">培训管理</a>
            <!-- <a href="#">人才管理</a> -->
            <!-- <a href="#">干部监督</a> -->
            <a href="#">数字化档案室</a>
            <a target="_blank" href="http://118.31.37.140:8084/"
              >目标责任考核管理</a
            >
            <!-- <a href="#">访谈管理</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from "vue-router";
import first from "@/assets/images/401.gif"
export default defineComponent({
  setup() {
    const router = useRouter();
	const handleToPage = () => {
		router.push('/cadre/info')
	}
    return {
      first,
	  handleToPage
    }
  },
  methods: {
    go() {
      this.$router.push('/')
    },
  }
})
</script>

<style lang="scss" scoped>
.indexPage-wap {
  height: 100vh;
  width: 100%;
  background: url(../../assets/images/bg.jpg) no-repeat center;
  background-size: cover;
}

.clearfix:after,
.clearfix:before {
  content: "";
  display: block;
  clear: both;
}

.clearfix {
  display: block;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: normal;
  font-family: Arial, "微软雅黑";
}

a,
img,
input {
  -webkit-tap-highlight-color: transparent;
}

input,
button,
select,
textarea {
  outline: inherit;
  -webkit-appearance: none;
}

.fl {
  float: left;
}

.fr {
  float: right;
}
/*-------------*/

.indexPage {
  width: 88%;
  position: fixed;
  left: 6%;
  top: 50%;
  margin-top: -340px;
}

.indexPage .title img {
  width: 34%;
  display: block;
  margin: auto;
}

.indexPage .page {
  margin-top: 4%;
  line-height: 46px;
}

.indexPage .box {
  background: #fff;
  border-radius: 20px;
  border: #dadada solid 1px;
  padding: 22px 25px 15px;
}

.indexPage .boxTitle {
  display: flex;
  line-height: 26px;
  margin-bottom: 20px;
}

.indexPage .boxTitle i {
  height: 26px;
  width: 6px;
  margin-right: 12px;
  background: #e50a09;
}

.indexPage .boxTitle span {
  font-size: 24px;
  color: #e50a09;
}

.indexPage .section {
  display: flex;
  margin-bottom: 30px;
}

.indexPage .section .box {
  flex: 1;
  margin-right: 30px;
}

.indexPage .section .box:last-child {
  margin: 0;
}

.indexPage .box .content {
  display: flex;
  flex-flow: row wrap;
}

.indexPage .box .content a {
  background: #e50a09;
  width: calc(50% - 10px);
  color: #fff;
  margin: 0 20px 20px 0;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  line-height: 50px;
}

.indexPage .box .content a:last-child {
  margin-right: 0;
}

.indexPage .box4 .content a {
  width: calc(16% - 10px);
}

.indexPage .box4 .content a:nth-child(6) {
  margin-right: 0;
}

@media only screen and (min-width: 2000px) {
  .indexPage {
    margin-top: -440px;
  }
  .indexPage .title img {
    width: 36%;
  }
  .indexPage .page {
    margin-top: 4%;
    line-height: 60px;
  }
  .indexPage .box {
    border-radius: 26px;
    border: #dadada solid 2px;
    padding: 26px 35px 20px;
  }
  .indexPage .boxTitle {
    line-height: 32px;
    margin-bottom: 30px;
  }
  .indexPage .boxTitle i {
    height: 32px;
    width: 8px;
    margin-right: 20px;
  }
  .indexPage .boxTitle span {
    font-size: 32px;
  }
  .indexPage .section {
    margin-bottom: 40px;
  }
  .indexPage .section .box {
    margin-right: 40px;
  }
  .indexPage .section .box:last-child {
    margin: 0;
  }
  .indexPage .box .content a {
    width: calc(50% - 15px);
    color: #fff;
    margin: 0 30px 30px 0;
    border-radius: 15px;
    font-size: 26px;
    line-height: 70px;
  }
  .indexPage .box .content a:last-child {
    margin-right: 0;
  }
  .indexPage .box4 .content a {
    width: calc(16% - 15px);
  }
  .indexPage .box4 .content a:nth-child(6) {
    margin-right: 0;
  }
}

@media only screen and (max-width: 1680px) {
  .indexPage {
    margin-top: -280px;
  }
  .indexPage .page {
    margin-top: 3%;
    line-height: 40px;
  }
  .indexPage .box {
    border-radius: 15px;
    padding-bottom: 10px;
  }
  .indexPage .boxTitle {
    line-height: 24px;
  }
  .indexPage .boxTitle i {
    height: 22px;
    width: 5px;
  }
  .indexPage .boxTitle span {
    font-size: 20px;
  }
  .indexPage .box .content a {
    border-radius: 8px;
    font-size: 18px;
    line-height: 46px;
  }
}

@media only screen and (max-width: 1440px) {
  .indexPage {
    margin-top: -220px;
  }
  .indexPage .page {
    line-height: 30px;
  }
  .indexPage .box {
    padding: 16px 20px 6px;
  }
  .indexPage .boxTitle {
    line-height: 20px;
    margin-bottom: 15px;
  }
  .indexPage .boxTitle i {
    height: 20px;
    width: 4px;
    margin-right: 8px;
  }
  .indexPage .boxTitle span {
    font-size: 16px;
  }
  .indexPage .box .content a {
    border-radius: 8px;
    font-size: 14px;
    line-height: 38px;
    margin: 0 14px 14px 0;
    width: calc(50% - 7px);
  }
  .indexPage .box .content a:last-child {
    margin-right: 0;
  }
  .indexPage .box4 .content a {
    width: calc(16% - 7px);
    margin: 0 14px 14px 0;
  }
  .indexPage .box4 .content a:nth-child(6) {
    margin-right: 0;
  }
  .indexPage .section {
    margin-bottom: 20px;
  }
  .indexPage .section .box {
    margin-right: 20px;
  }
  .indexPage .section .box:last-child {
    margin: 0;
  }
}
</style>