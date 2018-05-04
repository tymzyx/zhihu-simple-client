<template>
  <div class="sign-wrapper">
    <div class="sign-main">
      <div class="sign-info-wrapper">
        <div>
          <svg viewBox="0 0 200 91" class="zhihuLogo" style="height:65.625px;width:140px;" width="140" height="65.625" aria-hidden="true" data-reactid="45"><title data-reactid="46"></title><g data-reactid="47"><path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fill-rule="evenodd"></path></g>
          </svg>
          <p>注册知乎，发现更大的世界</p>
        </div>
        <div class="form">
          <div class="form-item">
            <el-input placeholder="手机号" class="input-with-select" v-if="isSignup">
              <el-select slot="prepend" v-model="region">
                <el-option label="中国 +86" value="1"/>
                <el-option label="美国 +1" value="2"/>
                <el-option label="日本 +81" value="3"/>
                <el-option v-for="i in 10" :key="i" label="中国香港 +852" value="4"/>
              </el-select>
            </el-input>
            <el-input v-else placeholder="手机号或邮箱">
            </el-input>
          </div>
          <div class="form-item">
            <section v-if="isSignup">
              <el-input placeholder="输入 6 位短信验证码" v-model="verifyNum" class="input-with-select">
                <el-button slot="append">
                  <a>获取短信验证码</a>
                </el-button>
              </el-input>
              <div class="switch-type">
                <a></a>
                <span :style="{position: 'relative', right: '23px'}">接收语音验证码</span>
              </div>
            </section>
            <section v-else>
              <el-input placeholder="密码" v-model="verifyNum" class="input-with-select">
                <el-button slot="append">
                  <i class="iconfont icon-biyan"></i>
                </el-button>
              </el-input>
              <div class="switch-type">
                <a>手机验证码登录</a>
                <span>忘记密码？</span>
              </div>
            </section>
          </div>
          <div class="form-item">
            <my-button height="36px" v-if="isSignup">
              <span class="affirm-btn-text">注册</span>
            </my-button>
            <my-button v-else height="36px">
              <span class="affirm-btn-text">登录</span>
            </my-button>
          </div>
          <div class="form-item form-tips" v-if="isSignup">
            <span>注册即代表你同意《知乎协议》</span>
            <a>注册机构号</a>
          </div>
          <div class="form-item login-type" v-else>
            <span>二维码登录</span>
            <span>海外手机登录</span>
            <span>社交账号登录登录</span>
          </div>
        </div>
      </div>
      <div class="switch-wrapper">
        <p v-if="isSignup">已有账号？<a @click="isSignup=!isSignup">登录</a></p>
        <p v-else>没有账号？<a @click="isSignup=!isSignup">注册</a></p>
      </div>
      <div class="down-btn-wrapper">
        <my-button bg="#8590a6" border="#8590a6" isDefault="0" height="40px">
          <span class="down-btn-text">下载知乎 APP</span>
        </my-button>
      </div>
    </div>
    <div class="sign-footer">
      <div>
        <span>知乎专栏 圆桌 发现 移动应用 联系我们 来知乎工作 注册机构号</span>
      </div>
      <div>
        <span>© 2018 知乎京 ICP 证 110745 号京公网安备 11010802010035 号出版物经营许可证</span>
      </div>
      <div>
        <span>侵权举报网上有害信息举报专区儿童色情信息举报专区违法和不良信息举报：010-82716601</span>
      </div>
      <div class="footer-foot">
        <img src="../assets/img/foot.png">
      </div>
    </div>
  </div>
</template>

<script>
  import MyButton from '../components/common/MyButton'

  export default {
    components: {MyButton},
    data() {
      return {
        isSignup: true,
        region: '1',
        verifyNum: '',
      }
    }
  }
</script>

<style lang="less">
  .sign-wrapper {
    width: 100%;
    height: 100vh;
    background: url("../assets/img/bg.png") no-repeat;
    background-size: cover;
    overflow: auto;

    .sign-main {
      width: 460px;
      margin: auto;
      padding-top: 8%;

      .sign-info-wrapper {
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        text-align: center;
        padding: 26px 10px 32px;

        p {
          margin: 10px 0 28px;
          color: #0084ff;
          font-size: 22px;
        }
        .form {
          padding: 0 36px;
        }
        .form-item {
          margin-bottom: 14px;
        }
        .form-tips {
          display: flex;
          justify-content: space-between;
          font-size: 14px;

          span {
            color: #8590a6;
            cursor: pointer;
          }
          a {
            color: #175199;
            cursor: pointer;
          }
        }
        .login-type {
          display: flex;
          justify-content: center;
          font-size: 14px;

          span {
            color: #8590a6;
            margin: 0 8px;
            cursor: pointer;
          }
        }
        .switch-type {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin: 10px 0 30px;

          span {
            cursor: pointer;
            color: #8590a6;
          }
        }
        .affirm-btn-text {
          display: inline-block;
          width: 334px;
        }
      }

      .switch-wrapper {
        background: #f6f6f6;
        border-top: 1px solid #ebebeb;
        text-align: center;
        height: 54px;
        line-height: 54px;

        p {
          margin: 0;
        }
        a {
          color: #175199;
          cursor: pointer;
        }
      }

      .down-btn-wrapper {
        margin-top: 30px;
        text-align: center;

        .down-btn-text {
          display: inline-block;
          width: 428px;
        }
      }

    }

    .sign-footer {
      width: 700px;
      margin: 90px auto 0;
      text-align: center;
      font-size: 12px;
      color: #fff;

      .footer-foot {
        width: 460px;
        margin: 20px auto 0;
        padding: 4px 0 2px;
        border-top: 1px solid #fff;

        img {
          width: 138px;
          height: 26px;
        }
      }
    }

    .zhihuLogo {
      fill: #0084ff;
    }

    .el-select .el-input {
      width: 150px;
    }

  }
</style>
