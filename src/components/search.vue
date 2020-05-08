<template>
  <div class="search">
    <div class="text" v-text="text"></div>
    <div class="search-content">
      <input type="text" class="search-input" @focus="$emit('search')" placeholder="请输入搜索内容" />
    </div>
    <div class="search-right">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  props: ["text"]
};
</script>

<style scoped>
.search {
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 10000;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  height: 0.36rem;
  display: flex;
  align-items: center;
}
.text {
  width: 0.6rem;
  height: 0.34rem;
  line-height: 0.34rem;
  font-weight: 600;
  color: #333;
}
.search-content {
  height: 100%;
  border: 0.01rem solid #ccc;
  /*margin:0 auto;*/
  display: flex;
  border-radius: 0.2rem;
  overflow: hidden;
  flex-grow: 1;
}
.search-input {
  flex-grow: 1;
  border: 0;
  outline: 0;
  padding-left: 0.2rem;
}
.search-right {
  width: 0.6rem;
  height: 100%;
  line-height: 0.36rem;
  text-align: center;
}
.search-right > i {
  font-size: 0.2rem;
}
</style>