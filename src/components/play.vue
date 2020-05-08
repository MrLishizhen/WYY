<template>
  <div class="play">
    <!-- 播放 -->
    <div class="play-top">
      <div class="play-top-left iconfont" @click="hide">&#xe607;</div>
      <div class="play-top-cont ellipsis">{{data.musicName||'播放器'}}</div>
      <div class="play-top-right iconfont">&#xe617;</div>
    </div>
    <div class="play-cont">
      <div class="play-cont-cont">
        <div class="play-cont-cont-img">
          <img src alt class="img" />
        </div>
      </div>
    </div>
    <div class="play-foot">
      <div class="foot-top"></div>
      <div class="foot-btm">
        <div class="random-box">
          <span class="iconfont random" v-html="Button.random"></span>
        </div>
        <div class="Last-box">
          <span class="iconfont Last" v-html="Button.Last"></span>
        </div>
        <div class="Play-box">
            <span class="iconfont Last" @click='show' style='font-size:0.32rem;' v-html="Button.Play"></span>
        </div>
        <div class="Next-box">
           <span class="iconfont Next" v-html="Button.Next"></span>
        </div>
        <div class="song-box">
           <span class="iconfont song" v-html="Button.song"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      Button:{
        random: "&#xe77d;",
        Last:'&#xe60b;',
        Play:'&#xe628;',
        Next:'&#xe60b;',
        song:'&#xe636;',
      }
    };
  },
  created(){
    this.$plays.verification(347230);
    
  },
  methods: {
    hide() {
      this.$store.commit("isShow", false);
    },
    show(){
      this.$message('暗巫版权，轻轻期待暗巫版权，轻轻期待暗巫版权，轻轻期待');
    }

  }
};
</script>

<style scoped>
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.play {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 99999999999;
  display: flex;
  flex-direction: column;
}
.play-top {
  height: 0.6rem;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
}
.play-top-left {
  width: 0.6rem;
  height: 0.6rem;
  flex-shrink: 0;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.26rem;
  color: #fff;
}
.play-top-cont {
  flex-grow: 1;
  line-height: 0.6rem;
  font-size: 0.16rem;
}
.play-cont-cont-img {
  width: 70%;
  height: 70%;
  background-color: #fff;
  border-radius: 50%;
}
.play-cont-cont {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.play-top-right {
  width: 0.6rem;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.26rem;
  color: #fff;
}
.play-cont {
  flex-grow: 1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.play-foot {
  height: 1.5rem;
  flex-shrink: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
}
.foot-top {
  height: 0.6rem;
  background-color: red;
  flex-shrink: 0;
}
.foot-btm {
  flex-grow: 1;
  display: flex;
}
.foot-btm > div {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.foot-btm > div>span {
  width: 0.4rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.26rem;
}
.Next{
  transform: rotate(180deg);
}
</style>