<template>
  <div class="login">
    <div class="login-top">
      <Header :title="title">
        <template v-slot:headersRight>
          <div class="right" @click="$router.push('/register')">注册</div>
        </template>
      </Header>
    </div>
    <div class="login-c">
      <!-- <div class='login_c_top'>手机登录</div> -->
      <div class="c_box">
        <div class="phone">手机号登录</div>
        <LoginInputs :data="data"></LoginInputs>
        <loginInputs :data="data2"></loginInputs>
        <div class="error">{{error}}</div>
        <button class="login-btn" @click="login">登录</button>
      </div>

      <!-- 用户条约 -->
      <div class="Tips">
        <span class="tips_but">使用提示</span>

        <div class="tips_box">
          <p>该账号是个人账号，请各位使用过程中不要乱搞，谢谢合作！！！</p>
          <p>如果该网站触犯了您的权利，请联系我</p>
          <p>个人邮箱：718647063@qq.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header_login";
import LoginInputs from "../../components/login_Inputs";
import cookie from "js-cookie";
export default {
  name: "login",
  components: { Header, LoginInputs },
  data() {
    return {
      title: "登录",
      data: {
        type: "text",
        show: true,
        value: "",
        placeholder: "默认账号17560640208",
        title: "手机号:"
      },
      data2: {
        type: "password",
        show: true,
        value: "",
        placeholder: "默认密码li19990208",
        title: "密码:"
      },
      error: ""
    };
  },
  mounted() {
    let that = this;
    document.onkeydown = function(e) {
      if (e.keyCode == 13) {
        that.login();
      }
    };
  },

  beforeRouteEnter(to, from, next) {
    cookie.set('from',from.fullPath);
    next(); //放行
  },
  methods: {
    login() {
      if (this.data.value == "" || this.data2.value == "") {
        this.error = "请输入账号密码";
        //   console.log(1);
        return;
      } else {
        let phone = this.data.value;
        let pws = this.data2.value;
        console.log(pws);
        if (!/^1[3456789]\d{9}$/.test(phone)) {
          this.error = "手机号格式不对";
          return;
        }
        if (pws.length < 6 || pws.length > 16) {
          this.error = "密码长度不正确";
          return;
        }

        this.$http({
          url: `/login/cellphone?phone=${phone}&password=${pws}`
        })
          .then(res => {
            if (res.code === 200) {
              cookie.set("u_n", res.profile.userId);
              cookie.get('from')?this.$router.replace(cookie.get('from')):this.$router.replace("/home");
              
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped>
.login-top {
  background-color: #f5f5f5;
}
.login {
  display: flex;
  flex-direction: column;
}
.right {
  height: 100%;
}
.login-c {
  flex-grow: 1;
}
.login_c_top {
  font-size: 0.12rem;
  color: #ff4545;
}
.c_box {
  width: 80%;
  margin: 0 auto;
}
.phone {
  font-size: 0.14rem;
  color: #ff4545;
  display: inline-block;
  padding: 0.1rem 0;
  border-bottom: 0.01rem solid #ff4545;
}
.error {
  color: #ff4545;
  font-size: 0.12rem;
  text-align: left;
  height: 0.3rem;
  line-height: 0.3rem;
  padding-left: 0.15rem;
}
.login-btn {
  padding: 0.05rem 0.3rem;
  border: 1px solid #ff4545;
  outline: 0;
  color: #ff4545;
  border-radius: 0.1rem;
  background-color: #fff;
}
.Tips {
  height: 1.6rem;
  overflow: auto;
  padding-top: 0.2rem;
}
.tips_but {
  color: #f40;
}
.tips_box {
  font-size: 0.12rem;
  padding-top: 0.15rem;
}
</style>