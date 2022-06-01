<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <a href="login.html" target="_blank">登陆</a>
        </span>
      </h3>
      <Form :validation-schema="mySchema">
        <div class="content">
          <label>手机号:</label>
          <Field
            name="tel"
            v-model="form.tel"
            type="text"
            placeholder="请输入你的手机号"
          />
          <ErrorMessage name="tel" class="error-msg" />
        </div>
        <div class="content">
          <label>验证码:</label>
          <Field
            name="code"
            v-model="form.code"
            type="text"
            placeholder="请输入验证码"
          />
          <button @click="getServerCode">获取验证码</button>
          <ErrorMessage name="code" class="error-msg" />
        </div>
        <div class="content">
          <label>登录密码:</label>
          <Field
            name="password"
            v-model="form.password"
            type="text"
            placeholder="请输入你的登录密码"
          />
          <ErrorMessage name="password" class="error-msg" />
        </div>
        <div class="content">
          <label>确认密码:</label>
          <Field
            name="password1"
            v-model="form.password1"
            type="text"
            placeholder="请输入确认密码"
          />
          <ErrorMessage name="password1" class="error-msg" />
        </div>
        <div class="controls">
          <Field
            as="checkBox"
            name="isCheck"
            v-model="form.isCheck"
            type="checkbox"
          />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <ErrorMessage name="isCheck" class="error-msg" />
        </div>
        </Form>
        <div class="btn">
          <button @click="Register">完成注册</button>
        </div>
      
      <!--  -->
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import { getCode, register } from "../../api/request";
import schema from "../../utils/vee-validate-schema";
export default defineComponent({
  name: "Register",
  setup() {
    let router=useRouter();
    const form = reactive({
      tel: "",
      code: "",
      password: "",
      password1: "",
      isCheck: true,
    });
    const mySchema = {
      tel: schema.tel,
      code: schema.code,
      password: (value: string): boolean | string => {
        if (/[0-9a-zA-z]{5,12}/.test(value)) {
          return true;
        }
        return "密码必须在5到12wei之间";
      },
      password1: (value: string): boolean | string => {
        if (!value) {
          return "请输入密码";
        }
        if (value !== form.password) {
          return "密码不一致";
        }
        return true;
      },
      isCheck: schema.isCheck,
    };
    /* 获取验证码 */
    async function getServerCode() {
      if (form.tel !== null) {
        let result = await getCode(form.tel);
        form.code = result.data.data;
      }
    }
    async function Register() {
      if (form.password !== null) {
        if (form.password === form.password1) {
          let{tel,password,code}=form;
          const RegisterData = {
            phone: tel,
            password: password,
            code: code,
          };
          //console.log(RegisterData)
          let result = await register(RegisterData);
          if (result.data.code===200) {
            alert("注册成功")
            router.push({name:'login'})
          }
          // router.push({name:'login'})
        }
      }
    }
    return { form, mySchema, getServerCode,Register };
  },
  components: { Form, Field, ErrorMessage },
  methods: {
    /* isRequired(value) {
      if (value==='1') {
        return true;
      }
      return '值不等于1';
    }, */
  },
});
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>