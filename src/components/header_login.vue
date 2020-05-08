<template>
  <div class="header">
    <div class="back" @click="$router.back()">
      <i class="iconfont">&#xe607;</i>
    </div>
    <div class="header_c">{{title}}</div>
    <div class="header_right">
      <slot name="headersRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.4rem;
  display: flex;
  flex-shrink: 0;
}
.back {
  width: 0.6rem;
  flex-shrink: 0;
  line-height: 0.4rem;
  text-align: center;
}
.back > i {
  font-size: 0.24rem;
}
.header_c {
  flex-grow: 1;
  line-height: 0.4rem;
}
.header_right {
  width: 0.6rem;
  flex-shrink: 0;
  line-height: 0.4rem;
}
</style>