<template>
  <div class="me">
    <div class="me_w" v-if="!show">
      <div class="me_w_c">
        <div class="wei">您还未登录...</div>
        <img src="../../assets/login.jpeg" alt class="me_w_img" />
        <div class="me_btn" @click="login">登录</div>
      </div>
    </div>
    <div class="me_y" v-else>
      <div class="user" :style="{backgroundImage: `url(${userData.backgroundUrl})`}">
        <img v-lazy="userData.avatarUrl" alt />
        <div class="userDefault">
          <span class="name">{{userData.nickname}}</span>
          <span class="signature" v-text="userData.signature?userData.signature:'这个人很懒，什么都没留下...'"></span>
        </div>
      </div>
      <div class="userD">
        <userG
          :data="data"
          :show="i"
          :song_data="song_sheet"
          :song_default="userLike"
          @itemClick="itemClick"
        ></userG>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import cookie from "js-cookie";
const userG = () => import("../../components/user.vue");
export default {
  data() {
    return {
      data: [
        { name: "歌单", isShow: true },
        { name: "专辑", isShow: false },
        { name: "歌手", isShow: false },
        { name: "歌曲", isShow: false }
      ],
      song_sheet: [],
      show: false, //判断用户是否登陆
      userData: {},
      userLike: [], //用户喜欢的音乐
      i: 0 //标识初始的请求按钮
    };
  },
  components: { userG },
  created() {
    console.log(1);
    //检查有没有cookie
    if (cookie.get("MUSIC_U")) {
      this.show = true;
    }
    this._loginDefault();
    this.getClick(0);
  },
  methods: {
    login() {
      //跳转登录
      this.$router.push("/login");
    },
    //请求用户的数据
    _loginDefault() {
      let userId = cookie.get("u_n");
      if (cookie.get("u_n")) {
        this.$http({ url: `/user/detail?uid=${userId}` }).then(res => {
          if (res.code === 200) {
            this.userData = res.profile;
          }
        });
      }
    },
    //用来适用上面的tab组件切换用的

    itemClick(index) {
      this.data.forEach(item => {
        item.isShow = false;
      });
      this.data.forEach((item, i, arr) => {
        arr[index].isShow = true;
      });
      if (index === this.i) {
        return;
      }
      this.i = index;
      this.getClick(index);
    },
    //请求下面的歌单数据
    getClick(i) {
      if (cookie.get("u_n")) {
        if (i === 0) {
          this.$http({ url: `/user/playlist?uid=${cookie.get("u_n")}` }).then(
            res => {
              this.song_sheet = res.playlist;
            }
          );
        }
        if (i == 3) {
          this.$http({
            url: `/playlist/detail?id=${this.song_sheet[0].id}`
          }).then(res => {
            console.log(res);
            if (res.code === 200) {
              this.userLike = res.playlist.tracks;
            }
          });
        }
      }
    }
  }
};
</script>

<style scoped>
.me {
  width: 100%;
  height: 100%;
}
.me_w,
.me_y {
  width: 100%;
  height: 100%;
  position: relative;
}

.me_y {
  display: flex;
  flex-direction: column;
}
.me_w_c {
  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
}
.me_w_img {
  width: 100%;
}
.me_btn {
  height: 0.3rem;
  line-height: 0.3rem;
  border: 0.01rem solid #ccc;
  box-shadow: 0.03rem 0.05rem 0.03rem #ccc;
  border-radius: 0.15rem;
}
.wei {
  color: #ccc;
  font-size: 0.14rem;
}
.user {
  height: 1.6rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  flex-shrink: 0;
}
.user img {
  width: 1rem;
  border-radius: 50%;
}
.userDefault {
  display: flex;
  flex-direction: column;
  color: #f5f5f5;
  text-align: left;
  padding-left: 0.15rem;
  background-size: 100% 100%;
}
.name {
  margin-bottom: 0.05rem;
}
.signature {
  color: #999595;
  font-size: 0.12rem;
}
.userD {
  flex-grow: 1;
  padding-bottom: 0.5rem;
  overflow: hidden;
}
</style>