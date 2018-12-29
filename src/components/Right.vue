<template>

  <div id="right">
     <!--<div id="Box">-->
        <!--&lt;!&ndash;<Meal></Meal>&ndash;&gt;-->
     <!--</div>-->
  </div>

</template>

<script>

  import Meal from './Meal.vue'

    export default{
        name: 'Right',
//        components:{
//            'Meal':Meal
//        }
    }
</script>

<style scoped lang="less">
  #right{
    width: 1200px;
    height: 672px;
    margin-top: 8px;
    margin-left:18px ;
    background: #333333;
    float: left;
  }
  #Box{
    width: 1200px;
    height: 650px;
    margin: 10px auto;
    background: #f0f0f0;
    position: relative;
  }
</style>
