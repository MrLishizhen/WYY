<template>
  <div class="message-box" v-if="show">{{title}}</div>
</template>

<script>
export default {};
</script>

<style scoped>
.message-box {
  width: 50%;
  padding: 0.1rem 0.15rem;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 50%;
  font-size: 0.14rem;
  border-radius: 0.2rem;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999999999;
  color: #fff;
  text-align: center;

}


</style>