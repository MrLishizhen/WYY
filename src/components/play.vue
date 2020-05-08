<template>
  <div class="play" >
    <!-- 播放 -->
    <div class="play-top">
      <div class="play-top-left iconfont" @click='hide'>&#xe607;</div>
      <div class="play-top-cont ellipsis">{{data.musicName||'播放器'}}</div>
      <div class="play-top-right iconfont">&#xe617;</div>
    </div>
    <div class="play-cont">
      <div class="play-cont-cont">
        <div class="play-cont-cont-img">
          <img src="" alt="" class='img'>
        </div>
      </div>
    </div>
    <div class="play-foot">
        <div class='foot-top'></div>
        <div class='foot-btm'>
          <div class='iconfont random' v-html='random'></div>
          <div class='iconfont'></div>
          <div class='iconfont'></div>
          <div class='iconfont'></div>
          <div class='iconfont'></div> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      random:'&#xe77d;'
    };
  },
  methods:{
    hide(){
      this.$store.commit('isShow',false);
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
.play-cont-cont-img{
  width:70%;
  height:70%;
  background-color: #fff;
  border-radius: 50%;

}
.play-cont-cont {
  width: 2.5rem;
  height: 2.5rem;
  background-color:rgba(0,0,0,.7);
  border-radius: 50%;
  display:flex;
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
  display:flex;
  flex-direction: column;
}
.foot-top{
  height:0.6rem;
  background-color:red;
  flex-shrink: 0;
}
.foot-btm{
  flex-grow: 1;

}
</style>