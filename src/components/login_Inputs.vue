<template>
  <div class='login_input'>
      <div class='label'>
          <span>{{data.title}}</span>
      </div>
      <div class='inputs'>
          <input :type="data.type" v-model='data.value' :placeholder="data.placeholder">
      </div>
      <div class='bt' v-if='data.show'>
          <i class='iconfont'>&#xe635;</i>
      </div>
  </div>
</template>

<script>
export default {
    name:'inputs',
    props:['data'],
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
    .login_input{
        height:0.4rem;
        display:flex;
        margin-bottom: 0.1rem;
        margin-top:0.1rem;

    }
    .label ,.bt{
        width:20%;
        line-height:0.4rem;
        flex-shrink: 0;
    }
    .inputs{
        line-height:0.4rem;
        flex-grow: 1;
        padding-left:0.15rem;
        border-bottom: 0.01rem solid #ccc;
    }
    .inputs>input{
        width:100%;
        /* height:100%; */
        border:0;
        outline:0;
    }
    .label{
        font-size:0.14rem;
    }
    .bt{
        color:#ff4545;
    }
</style>