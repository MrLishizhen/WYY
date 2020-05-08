<template>
  <div id="app">
    <router-view class="content"></router-view>
    <router-view class="footer" name="footer"></router-view>
    <play v-if='$store.state.show'></play>  
  </div>
</template>
<script>
import cookie from 'js-cookie';
const play = ()=>import('./components/play');
export default {
  created(){
      // if(!(cookie.get('MUSIC_U')&&cookie.get('u_n'))){
      //     this.$router.push('/login');
      // }
  },
  components:{play},
  methods: {
    // 添加判断方法
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted() {
    if (!this.isMobile()) {
      this.$notify({
        title: "提示",
        message: "请使用移动端设备访问,pc装换为移动设备后请刷新页面",
        duration: 0,
        type: "warning"
      });
    }
  }
};
</script>
<style>
.Play{
  width:100%;
  height:100%;
  position:fixed;
  z-index:-1;
  background-color: red;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.16rem;
  height: 100%;
  display: flex;
  background-color: #f6f6f6;
}

.content {
  flex-grow: 1;
  min-height: 100%;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
