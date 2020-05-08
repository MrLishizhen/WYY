<template>
  <div class="home">
    <search :text="'发现'" @search="search">
      <i class="iconfont icon-xiugaitouxiang"></i>
    </search>

    <!--轮播图-->
    <banner :banners="banners"></banner>
    <!--导航-->
    <div class="nav">
      <div class="nav-item">
        <router-link to="/recommend" class="nav-item-a">
          <span class="iconfont icon-huabankaobei- nav-span"></span>
          <span class="nav-name">每日推荐</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to class="nav-item-a">
          <span class="iconfont icon-gedan nav-span"></span>
          <span class="nav-name">歌单</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to class="nav-item-a">
          <span class="iconfont icon-icon- nav-span"></span>
          <span class="nav-name">排行榜</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to class="nav-item-a">
          <span class="iconfont icon-diantai nav-span"></span>
          <span class="nav-name">电台</span>
        </router-link>
      </div>
    </div>
    <div class="conent">
      <!--推荐歌单-->
      <song :title="title" :song_data="song_data"></song>
      <!--推荐歌曲-->
      <ti_music :title="title_music" :song_data="song_music"></ti_music>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import search from "@/components/search.vue";
import banner from "@/components/banner.vue";
import song from "@/components/song_model.vue";
import ti_music from "@/components/ti_music.vue";
export default {
  data() {
    return {
      banners: {},
      title: "推荐歌单",
      song_data: [],
      title_music: "推荐歌曲",
      song_music: [] //推荐歌曲
    };
  },
  components: { search, banner, song, ti_music },
  created() {
    this.$http({ url: "/banner", method: "get" }).then(result => {
     
      this.banners = result.banners;
    });
    //请求推荐歌单
    this.$http({ url: "/personalized?limit=6" }).then(res => {
      
      if (res.code === 200) {
        this.song_data = res.result;
      }
    });
    //请求推荐歌曲
    this.$http({ url: "/personalized/newsong?limit=6" }).then(res => {
     
      if (res.code === 200) {
        this.song_music = res.result;
      }
    });
  },
  methods: {
    getData() {},
    search() {
		this.$router.push('/search');
	}
  }
};
</script>

<style scoped>
.home {
  width: 100%;
}
.conent {
  padding-bottom: 0.5rem;
}
.last {
  font-size: 0.12rem;
  color: #ccc;
}
.nav {
  height: 0.6rem;
  padding-top: 0.1rem;
  display: flex;
  background-color: #fff;
}
.nav-item {
  width: 25%;
  height: 100%;
}
.nav-item-a {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.nav-name {
  height: 0.2rem;
  flex-shrink: 0;
  line-height: 0.2rem;
  font-size: 0.12rem;
  color: #666;
}
.nav-span {
  width: 0.4rem;
  margin: 0 auto;
  flex-grow: 1;
  line-height: 0.4rem;
  background-color: #ff5e5e;
  color: #fff;
  border-radius: 50%;
  font-size: 0.18rem;
}
</style>
