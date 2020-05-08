<template>
  <div class="default_box">
    <div class="default_box_bom">
      <div class="default_item" v-for="(item,i) in data" :key='item.id' @click='music(item.id)'>
        <div class="dafault_item_left">
          <i v-text="i+1" style="width:0.6rem;line-height: 0.6rem;flex-shrink: 0"></i>
          <div class="dafault-cont">
            <span v-text="item.name" class="span_name ellipsis"></span>
            <span v-text="getAr(item.ar)" class="span_ar ellipsis"></span>
          </div>
        </div>
        <i class="iconfont dafault_item_right icon-arrow-"></i>
      </div>
      <button class="de_btm" v-show="show" @click='getData()'>点击加载更多...</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "default_",
  props: ["data", "show"],
  created(){
	  
  },
  methods: {
    music(id){
        let musicID = this.$route.params.id;
        this.$plays.musicClick(id,musicID).then(res=>{
          if(res){
            //打开play页面
          }else{
            //什么都不做
          }
        });
    },
    getAr(arr) {
      let a = arr;
      let b = [];
      a.forEach(item => {
        b.push(item.name);
      });

      return b.join("-");
    },
	getData(){
		let i = this.data.length;//表示截取的下标
		this.$emit('show',i);
	}
  }
};
</script>

<style scoped>
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