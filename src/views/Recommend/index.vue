<template>
  <div class="Recommend">
    <headers class="headers" :title="title"></headers>
    <div class="recommend-top">
      <div class="recommend-top-date" v-text="dateText"></div>
      <div class='recommend-top-title'>专属于你的时光</div>
    </div>
    <div class="recommend-com">
      <div class="recommend-com-top"></div>
      <div class="recommend-com-btm">
        <loading v-if='show'></loading>
        <div v-else class="default_box">
          <div class="default_box_bom">
            <div class="default_item" v-for="(item,i) in data" :key="item.id">
              <div class="dafault_item_left">
                <i v-text="i+1" style="width:0.6rem;line-height: 0.6rem;flex-shrink: 0"></i>
                <div class="dafault-cont">
                  <span v-text="item.name" class="span_name ellipsis"></span>
                  <span  class="span_ar ellipsis" v-text='getAr(item.artists)'></span>
                </div>
              </div>
              <i class="iconfont dafault_item_right icon-arrow-"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const headers = () => import("../../components/header_login.vue");
import defaul from "../../components/default.vue";
import loading from "../../components/lodding.vue";
import cookie from "js-cookie";
export default {
  data() {
    return {
      title: "每日推荐",
      data: [],
      dateText: "",
      show: true
    };
  },
  components: { headers, defaul,loading },
  computed: {
    
  },
  created() {
    if (!cookie.get("u_n")) {
      this.$router.push("/me");
    }
    this.$http({ url: "/recommend/songs" }).then(res => {
      this.data = res.recommend;
      this.show=false;
    });
    this.date();
  },
  methods: {
    date() {
      let date = new Date();
      let d = date.getMonth() + 1;
      let r = date.getDate();
      this.dateText = `/ ${d} / ${r}`;
    },
    getAr(arr) {
      let a = arr;
      let b = [];
      a.forEach(item => {
        b.push(item.name);
      });

      return b.join("-");
    }
  }
};
</script>

<style scoped>
.Recommend {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.headers {
  position: fixed;
  width: 100%;
  background-color: transparent;
  color: #fff;
}

.recommend-top-title{
  padding:0.05rem 0.1rem;
  background-color: rgba(255,255,255,0.4);
  position:absolute;
  color:#fff;
  right:0.2rem;
  bottom:0.2rem;
  border-radius: 0.30rem;

}
.recommend-top {
  height: 2rem;
  background-color: #f5f5f5;
  flex-shrink: 0;
  position: relative;
  z-index: -1;
  background: url("../../assets/timg.jpg") no-repeat center/100%;
}
.recommend-top-date {
  position: absolute;
  padding: 0.05rem 0.1rem;
  border-radius: 0.2rem;
  /* background-color: #fff; */
  left: 0.1rem;
  bottom: 0.4rem;
  font-size: 0.24rem;
  color: #f3f3f3;
}
.recommend-com {
  flex-grow: 1;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  overflow:hidden;
}
.recommend-com-top {
  /* height: 0.45rem;
  flex-shrink: 0;
  border-top-left-radius: 0.2rem;
   border-top-right-radius: 0.2rem;
  background-color: #fff;
  margin-top:-0.5rem; */
}
.recommend-com-btm {
  flex-grow: 1;
  overflow: auto;
}
.default_box {
  width: 100%;
  flex-grow: 1;
  overflow: auto;
}
.default_item {
  height: 0.6rem;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
}
.dafault_item_left {
  display: flex;
  flex-grow: 1;
}
.dafault_item_right {
  width: 0.6rem;
  flex-shrink: 0;
  line-height: 0.6rem;
}
.ellipsis {
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dafault-cont {
  /*width:100%;*/
  flex-grow: 1;
}
.dafault-cont > span {
  display: block;
  text-align: left;
  height: 0.3rem;

  line-height: 0.3rem;
}
.span_name {
  font-size: 0.14rem;
}
/* .default_item:last-child {
  border-bottom: 0;
} */
.span_ar {
  font-size: 0.12rem;
  color: #ccc;
}
.de_btm {
  display: block;
  width: 35%;
  margin: 0.1rem auto 0;
  border: 0.01rem solid #ccc;
  outline: 0;
  font-size:0.12rem;
  border-radius: 0.15rem;
  flex-shrink: 0;
  height: 0.25rem;
  background-color: transparent;
}
</style>