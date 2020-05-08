<template>
  <div class="register">
    <headers :data="header" @Cleft='leftClick'></headers>
    <div class="content">
       <span style='font-size:0.12rem;color:#ccc;'>  暂未开放注册，您可以使用默认账号登录...</span>
    </div>
  </div>
</template>

<script>
const headers = () => import("../../components/headerTop");
export default {
  name: "zhuce",
  data() {
    return {
        header:{
            title:'注册',
            icon:'&#xe607;',
            right:'',
        }
    };
  },
  components: { headers },
  methods:{
      leftClick(){
        this.$router.go(-1);
      }
  },
};
</script>

<style scoped>
.register {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>