<template>
  <div class="default">
    <div class="default_top">
		<i class='iconfont back' @click="$router.back()">&#xe607;</i>
      <div class="bg" :style="{backgroundImage:`url(${coverImgUrl})`}"></div>
      <div class="img_box">
        <img v-lazy="coverImgUrl" alt class="img" />
      </div>
      <div class="user_title">
        <div class="name ellipsis3" v-text="name"></div>
        <div class="title ellipsis3" v-text="description"></div>
        <div class="tags">
          <div class="tags-item" v-for="item in tags" v-text="item" :key='item.id'></div>
        </div>
      </div>
    </div>
    <div class="default_bom">
      <div class="default_box_top">
        <span class="top_title" v-text="`共有：${data.length}`"></span>
        <span class="top_sc">添加收藏</span>
      </div>
      <defaul :data="upData" :show="show" @show="showGet" class="default_box"></defaul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import defaul from "../../components/default.vue";

export default {
  data() {
    return {
      data: [], //保存歌曲数据
      upData: [], //保存的是传递子组件的歌曲数据
      coverImgUrl: "", //保存歌单图片
      name: "", //歌曲名称
      tags: [], //歌曲分类
      description: "", //歌曲简介
      userId: 0, //歌单创建者
      show: false //加载更多
    };
  },
  components: { defaul },
  created() {
    this._getData();
  },
  methods: {
    _getData() {
      let id = this.$route.params.id;
      if (id) {
        this.$http({ url: `/playlist/detail?id=${id}` }).then(res => {
          if (res.code === 200) {
            this.name = res.playlist.name;
            this.coverImgUrl = res.playlist.coverImgUrl;
            this.tags = res.playlist.tags;
            this.description = res.playlist.description;
            this.data = res.playlist.tracks;
            this.userId = res.playlist.userId;
          }
          if (this.data.length >= 30) {
            this.show = true;
            this.upData = this.data.slice(0, 31);
          } else {
            this.upData = [...this.data];
          }
        });
      }
    },
    dataUpdate() {},
    showGet(i) {
	  //声明空数组
	  let arr = [];
	  //截取原始保存歌曲数组数据
	  arr = this.data.slice(i, i + 30);
	  //改变之后的歌单数据，加载更多
	  this.upData.push(...arr);
	  if(arr.length<30){
		  this.show=false;
	  }
    }
  }
};
</script>
<style>
#app {
  background-color: transparent;
}
</style>
<style scoped>
.default_top .back{
	display:block;
	width:0.24rem;
	height:0.24rem;
	position:absolute;
	left:0.1rem;
	top:0.1rem;
	background-color: rgba(255,255,255,.8);
	border-radius:50%;
	line-height:0.24rem;
	text-align: center;
	font-size:0.18rem;
	font-weight: 700;
}
.default {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.default_top {
  height: 1.6rem;
  padding: 0.2rem;
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  overflow: hidden;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
}

.bg::after {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  content: " ";
  background-color: rgba(0, 0, 0, 0.25);
}

.default_bom {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.img_box {
  width: 1.26rem;
  height: 1.26rem;
  flex-shrink: 0;
}

.img {
  width: 100%;
}

.user_title {
  flex-grow: 1;
  height: 100%;
  color: #fff;
  overflow: hidden;
  padding-top: 0.15rem;
  padding-left: 0.15rem;
  text-align: left;
}

.ellipsis3 {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.title {
  padding-top: 0.1rem;
  font-size: 0.12rem;
  margin-bottom: 0.15rem;
  text-align: left;
  max-width:1.8rem;
}

.tags {
  display: flex;
}

.tags-item {
  font-size: 0.12rem;
  padding: 0.02rem 0.08rem;
  border: 1px solid #fff;
  border-radius: 0.1rem;
}

.name {
  width: 100%;
}

.default_box_top {
  height: 0.4rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.top_title {
  color: #ff5e5e;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}

.top_sc {
  margin-right: 0.1rem;
  /*padding:0.03rem;*/
  border: 1px solid #ff5e5e;
  border-radius: 0.05rem;
  padding: 0 0.03rem;
  font-size: 0.12rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #ff5e5e;
}

.default_box {
  overflow: auto;
}
</style>