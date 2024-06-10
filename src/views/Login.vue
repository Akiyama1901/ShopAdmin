<template>
  <div class="login-container">
    <!--中间的盒子-->
    <div class="container">
      <!--盒子左边-->
      <div
        class="left_box"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0 }"
        :delay="200"
      >
        <img src="../assets/imgs/login_banner2.jpg" alt="" />
      </div>
      <!--盒子右边表单-->
      <div class="right_box">
        <h3 class="title">管理系统</h3>
        <div class="form-container">
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginRules"
            label-width="120px"
            class="demo-ruleForm"
            size="large"
            status-icon
          >
            <el-form-item label="" prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名">
                <template #prefix>
                  <el-icon><Avatar /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                type="password"
                show-password
                placeholder="请输入密码"
                v-model="loginForm.password"
              >
                <template #prefix>
                  <el-icon><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <!--滑动验证码-->
        <div style="width: 100%">
          <mi-captcha
            ref="captcha"
            width="100%"
            :height="38"
            :radius="6"
            bgColor="#fff"
            textColor="#000"
            borderColor="#dcdfe6"
            :logo="logoImg"
            @success="captchaSuccess"
          />
        </div>
        <!-- 提交表单 -->
        <div style="margin-top: 20px; width: 100%">
          <el-button
            style="height: 38px; width: 100%"
            type="primary"
            @click="handleLogin"
            :loading="btnLoading">
            登录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const logoImg = require("@/assets/imgs/logo.png");
// 登录的表单数据
const loginForm = reactive({
  username: "",
  password: "",
});
// 获取到表单元素
const loginFormRef = ref(null);

// 登录表单的校验规则
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 8, message: "密码长度应该在3-8位之间", trigger: "blur" },
  ],
});

// 滑动验证码校验成功
function captchaSuccess() {
  loginForm.captchaSuccess = true;
}

// 登录按钮的加载loading
const btnLoading = ref(false);

//处理登录的逻辑
function handleLogin(){}

</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .container {
    /* @include bg_color(); */
    background-color: var(--el-bg-color);
    width: 670px;
    height: 400px;
    display: flex;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 5px 20px 2px rgba(255, 255, 255, 0.1);

    .left_box {
      width: 286px;

      img {
        height: 100%;
      }
    }

    .right_box {
      width: 344px;
      padding: 20px;
      position: relative;

      .title {
        font-size: 26px;
        /* color: #333; */
        margin: 20px auto 40px auto;
        text-align: center;
        font-weight: 700;
      }

      .form-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .el-form {
          width: 100%;

          /* vue3中的样式穿透 */
          ::v-deep(.el-form-item__content) {
            margin-left: 0px !important;
          }
        }

        .el-button {
          width: 100%;
        }
      }

      .language {
        width: 38px;
        height: 40px;
        position: absolute;
        right: 0px;
        top: 0px;
      }

      .theme {
        width: 38px;
        height: 40px;
        position: absolute;
        right: 38px;
        top: 0px;
      }
    }
  }
}
</style>
