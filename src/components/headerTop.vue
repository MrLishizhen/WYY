<template>
  <div class='header'>
         <div class='header-left iconfont' @click="$emit('Cleft')" v-html='data.icon'></div>
         <div class='header-content' v-text='data.title'></div>
         <div class='header-right' @click="$emit('Cright')" v-html='data.right'></div>
     </div>
</template>

<script>
export default {
    props:['data'],
}
</script>

<style scoped>
 .header{
        height:0.4rem;
        flex-shrink: 0;
        background-color: #f5f5f5;
        display:flex;
        line-height:0.4rem;
    }
    .header-left,.header-right{
        width:0.4rem;
        font-size:0.24rem;
    }
    .header-content{
        flex-grow: 1;
    }
    .header-right{
        font-size:0.14rem;
    }
</style>