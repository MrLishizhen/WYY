<template>
  <div class="userG">
    <div class="userG-top">
      <div
        class="userG-item"
        @click="getData(i)"
        v-for="(item,i) in data"
        :key="i"
        :class="{active:item.isShow}"
        :style="{width:`${100/data.length}%`}"
      >{{item.name}}</div>
    </div>
    <div class="userG-bom">
      <!-- 歌单 -->
      <song :song_sheet="song_data" v-if="show==0"></song>
      <!-- 专辑 -->
      <div class="album" v-else-if="show==1">暂未开发此模块...</div>
      <!-- 歌手 -->
      <div class="singer" v-else-if="show==2">暂未开发此模块...</div>
      <!-- 歌曲 -->
      <div class="Song" v-else-if="show==3">
        <div class="song_item" v-for="item in song_default" :key="item.id">
          <div class="song_item_left">
            <span class="song_name" v-text="item.name"></span>
            <span class="song_gname" v-text="names(item)"></span>
          </div>
          <div class="song_item_right iconfont ">&#xe61d;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const song = () => import("./song_sheet.vue");
export default {
  props: ["data", "song_data", "show", "song_default"],
  components: { song },
  data() {
    return {};
  },
  methods: {
    getData(i) {
      this.$emit("itemClick", i);
    },
    names(item) {
	  
	  let arr = [];
      
         item.ar.forEach(item=>{
      	   arr.push(item.name)
         })
         return arr.join("/");
    }
  },
  computed: {
    
  }
};
</script>

<style scoped>
.userG {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.1rem;
}
.userG-top {
  height: 0.4rem;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
}
.active {
  color: red;
  border-bottom: 1px solid red;
}
.userG-item {
  line-height: 0.4rem;
}
.userG-bom {
  flex-grow: 1;
  overflow: auto;
}
.song::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.album,
.singer,
.Song {
  height: 100%;
  overflow: auto;
}
.album,
.singer {
  color: #e0e0e0;
  font-size: 0.14rem;
}
.song_item{
	display:flex;
	height:0.4rem;
	margin:0.09rem 0;
	/* box-shadow: 0.04rem 0.04rem 0.04rem #e0e0e0; */
	border-bottom: 0.01rem solid #e0e0e0;
	
}
.song_item_left{
	flex-grow: 1;
	display:flex;
	flex-direction: column;
	text-align:left;
	padding-left:0.15rem;
}
.song_item_right{
	width:0.4rem;
	line-height:0.4rem;
	flex-shrink: 0;
	color:#f40;
}
.song_name{
	font-size:0.14rem;
}
.song_gname{
	font-size:0.12rem;
	color:#e0e0e0;
}
</style>