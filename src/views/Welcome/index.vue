<template>
  <div class="welcome">
    <div class="welcome-box">
      <div class="welcome-top">
          <div class='name' v-if='!show'>
              慢慢走，别回头
          </div>
          <div class='name' v-if='show'>{{content.origin}}</div>
          <div class='content' v-if='show'>{{content.content}}</div>
      </div>
      <div class="welcome-btn" @click='push'>进入主页</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      content: "" ,//诗句
      show:false,
    };
  },
  created() {
    axios.get("https://v1.alapi.cn/api/shici").then(res => {

      if (res.status === 200) {
        this.content = res.data.data;
        this.show=true;
      }
    });
  },
  methods:{
    push(){
        this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
.welcome {
  width: 100%;
  height: 100%;
  animation: my 3s infinite;
  /* background-color: #666;#5ee7df,#b490ca  */
  background-image: linear-gradient(0deg, #5ee7df 0, #b490ca);
}
.welcome-box {
  width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.welcome-top {
  min-height: 0.5rem;
  /* background: linear-gradient(to right, red, blue);字体颜色渐变  */
  /* -webkit-background-clip: text;必须  */
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  padding:0.10rem;
  box-sizing: border-box;
  border-radius: 0.1rem;
}
.welcome-btn {
  width: 50%;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  margin: 0.5rem auto;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  color: #fff;
  font-size: 0.12rem;
}
.name{
    text-align: left;
    font-size:0.14rem;
}
@keyframes my {
  10% {
    background-image: linear-gradient(36deg, #5ee7df 10%, #b490ca);
  }
  20% {
    background-image: linear-gradient(72deg, #5ee7df 20%, #b490ca);
  }
  30% {
    background-image: linear-gradient(108deg, #5ee7df 30%, #b490ca);
  }
  40% {
    background-image: linear-gradient(144deg, #5ee7df 40%, #b490ca);
  }
  50% {
    background-image: linear-gradient(180deg, #5ee7df, #b490ca);
  }
  60% {
    background-image: linear-gradient(216deg, #5ee7df, #b490ca);
  }
  70% {
    background-image: linear-gradient(252deg, #5ee7df, #b490ca);
  }
  80% {
    background-image: linear-gradient(288deg, #5ee7df, #b490ca);
  }
  90% {
    background-image: linear-gradient(324deg, #5ee7df, #b490ca);
  }
  100% {
    background-image: linear-gradient(360deg, #5ee7df 20%, #b490ca);
  }
}
</style>>

