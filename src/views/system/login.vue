<template>
  <div class="loginPage-wap">
    <div class="loginPage">
    <div class="title"><img src="../../assets/images/title.png" /></div>
    <div class="box box-inner">
      <el-form class="form">
          <el-input
              size="large"
              v-model="form.name"
              :placeholder="$t('message.system.userName')"
              type="text"
              maxlength="50"
          >
            <template #prepend>
              <i class="sfont system-xingmingyonghumingnicheng"></i>
            </template>
          </el-input>
          <el-input
              size="large"
              ref="password"
              v-model="form.password"
              :type="passwordType"
              :placeholder="$t('message.system.password')"
              name="password"
              maxlength="50"
          >
            <template #prepend>
              <i class="sfont system-mima"></i>
            </template>
            <template #append>
              <i class="sfont password-icon" :class="passwordType ? 'system-yanjing-guan': 'system-yanjing'"
                 @click="passwordTypeChange"></i>
            </template>
          </el-input>

          <el-button type="primary" :loading="form.loading" @click="submit" style="width: 100%;" size="medium">
            <!-- {{ $t('message.system.login') }} -->
            登录
          </el-button>
        </el-form>
    </div>
  </div>
  </div>
  <!-- <div class="container">
    <div class="box">
      <div class="login-content-left">
        <img :src="loginLeftPng"/>
        <div class="login-content-left-mask">
          <div>{{ $t(systemTitle) }}</div>
          <div>{{ $t(systemSubTitle) }}</div>
        </div>
      </div>

      <div class="box-inner">
        <h1>{{ $t('message.system.welcome') }}</h1>
        <el-form class="form">
          <el-input
              size="large"
              v-model="form.name"
              :placeholder="$t('message.system.userName')"
              type="text"
              maxlength="50"
          >
            <template #prepend>
              <i class="sfont system-xingmingyonghumingnicheng"></i>
            </template>
          </el-input>
          <el-input
              size="large"
              ref="password"
              v-model="form.password"
              :type="passwordType"
              :placeholder="$t('message.system.password')"
              name="password"
              maxlength="50"
          >
            <template #prepend>
              <i class="sfont system-mima"></i>
            </template>
            <template #append>
              <i class="sfont password-icon" :class="passwordType ? 'system-yanjing-guan': 'system-yanjing'"
                 @click="passwordTypeChange"></i>
            </template>
          </el-input>

          <el-button type="primary" :loading="form.loading" @click="submit" style="width: 100%;" size="medium">
            {{ $t('message.system.login') }}
          </el-button>
        </el-form>
        <div class="fixed-top-right">
          <select-lang/>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import { systemTitle, systemSubTitle } from "@/config";
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import type { RouteLocationRaw } from "vue-router";
import { getAuthRoutes } from "@/router/permission";
import { ElMessage } from "element-plus";
import selectLang from "@/layout/Header/functionList/word.vue";
import loginLeftPng from "@/assets/login/left.jpg";

export default defineComponent({
  components: {
    selectLang,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const form = reactive({
      name: "admin",
      password: "123456",
      loading: false,
    });
    const passwordType = ref("password");
    const passwordTypeChange = () => {
      passwordType.value === ""
        ? (passwordType.value = "password")
        : (passwordType.value = "");
    };
    const checkForm = () => {
      return new Promise((resolve, reject) => {
        if (form.name === "") {
          ElMessage.warning({
            message: "用户名不能为空",
            type: "warning",
          });
          return;
        }
        if (form.password === "") {
          ElMessage.warning({
            message: "密码不能为空",
            type: "warning",
          });
          return;
        }
        resolve(true);
      });
    };
    const submit = () => {
      checkForm().then(() => {
        form.loading = true;
        let params = {
          name: form.name,
          password: form.password,
        };
        store
          .dispatch("user/login", params)
          .then(async () => {
            ElMessage.success({
              message: "登录成功",
              type: "success",
              showClose: true,
              duration: 1000,
            });
            // location.reload();
            // await getAuthRoutes()
            await router.push('/home')
          })
          .finally(() => {
            form.loading = false;
          });
      });
    };
    return {
      loginLeftPng,
      systemTitle,
      systemSubTitle,
      form,
      passwordType,
      passwordTypeChange,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
 .loginPage-wap {
   width: 100%;
   height: 100vh;
   background: url(../../assets/images/bg.jpg) no-repeat center;
   background-size: cover;
 }
 .loginPage {
 	width: 30%;
 	position: fixed;
 	left: 35%;
 	top: 22%;
 }
 
 .loginPage .title img {
 	width: 100%;
 }
 
 .loginPage .box {
 	border-radius: 15px;
 	padding: 30px 34px;
 	line-height: 46px;
 	background: rgba(255, 255, 255, 0.55);
 	width: 75%;
 	margin: 50px auto 0;
 }
 
 .loginPage .box .inputBox {
 	background: #fff;
 	border-radius: 6px;
 	display: flex;
 	justify-content: space-between;
 	margin-bottom: 20px;
 	padding: 0 16px;
 }
 
 .loginPage .box .inputBox input {
 	width: calc(100% - 60px);
 	line-height: 46px;
 	background: none;
 	border: none;
 	font-size: 16px;
 }
 
 .loginPage .box button {
 	display: block;
 	color: #FFFFFF;
 	border: none;
 	background: #E50A09;
 	width: 100%;
 	height: 46px;
 	margin-top: 40px;
 	font-size: 16px;
 	border-radius: 6px;
 	letter-spacing: 6px;
 }
 
 @media only screen and (min-width: 2000px) {
 	body {
 		font-size: 22px;
 	}
 	.loginPage .box {
 		padding: 36px 40px;
 		line-height: 60px;
 		margin: 60px auto 0;
 	}
 	.loginPage .box .inputBox {
 		margin-bottom: 24px;
 		padding: 0 20px;
 		border-radius: 8px;
 	}
 	.loginPage .box .inputBox input {
 		width: calc(100% - 80px);
 		line-height: 60px;
 		font-size: 22px;
 	}
 	.loginPage .box button {
 		height: 60px;
 		margin-top: 50px;
 		font-size: 22px;
 		border-radius: 8px;
 	}
 }
 
 @media only screen and (max-width: 1680px) {
 	body {
 		font-size: 14px;
 	}
 	.loginPage .box {
 		padding: 26px 30px;
 		line-height: 40px;
 		margin: 40px auto 0;
 	}
 	.loginPage .box .inputBox {
 		margin-bottom: 18px;
 		padding: 0 14px;
 	}
 	.loginPage .box .inputBox input {
 		width: calc(100% - 50px);
 		line-height: 40px;
 		font-size: 14px;
 	}
 	.loginPage .box button {
 		height: 40px;
 		margin-top: 30px;
 		font-size: 14px;
 	}
 }
 
 @media only screen and (max-width: 1440px) {
 	body {
 		font-size: 12px;
 	}
 	.loginPage .box {
 		padding: 20px 24px;
 		line-height: 30px;
 		margin: 30px auto 0;
 	}
 	.loginPage .box .inputBox {
 		margin-bottom: 15px;
 		padding: 0 10px;
 	}
 	.loginPage .box .inputBox input {
 		width: calc(100% - 40px);
 		line-height: 30px;
 		font-size: 12px;
 	}
 	.loginPage .box button {
 		height: 30px;
 		margin-top: 20px;
 		font-size: 12px;
 	}
 }
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff url("@/assets/login/bg.png") no-repeat center;
  overflow: hidden;
  background-size: cover;
  cursor: pointer;
  user-select: none;

  .box {
    width: 1160px;
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    background: white;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    height: 440px;
    overflow: hidden;
    box-shadow: 0 6px 20px 5px rgba(152, 152, 152, 0.1),
      0 16px 24px 2px rgba(117, 117, 117, 0.14);

    .login-content-left {
      position: relative;

      img {
        height: 440px;
      }

      .login-content-left-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          rgba(0, 204, 222, 0.8),
          rgba(51, 132, 224, 0.8)
        );
        text-align: center;
        color: #fff;
        font-size: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        letter-spacing: 2px;

        div:nth-child(1) {
          font-size: 3.5rem;
          margin-bottom: 1em;
        }
      }
    }

    .box-inner {
      width: 500px;

      h1 {
        margin-top: 80px;
        text-align: center;
      }

      .form {
        width: 80%;
        margin: 50px auto 15px;

        .el-input {
          margin-bottom: 20px;
        }

        .password-icon {
          cursor: pointer;
          color: #409eff;
        }
      }

      .fixed-top-right {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }
}

@media screen and (max-width: 1260px) {
  .login-content-left {
    display: none;
  }
  .box {
    width: 500px !important;
  }
}

@media screen and (max-width: 750px) {
  .container .box,
  .container .box-inner {
    width: 100vw !important;
    height: 100vh;
    box-shadow: none;
    left: 0;
    top: 0;
    transform: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 0;
    }

    .form {
    }
  }
}
</style>
