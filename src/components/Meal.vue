<template>
     <div id="Meal-Box">
       <!--顶部-->
       <ul class="top-Box">
           <router-link to="/weddingMeal" tag="li">婚纱套餐</router-link>
           <router-link to="/otherMeal" tag="li">私人定制套餐</router-link>
       </ul>



         <router-view></router-view>





     </div>
</template>

<script>

    import WeddingMeal from './WeddingMeal.vue'


    export default{
        name: 'Meal'
    }
</script>

<style scoped lang="less">

  #Meal-Box{
    width: 1160px;
    height: 600px;
    margin-top: 5px;
    position:absolute;
    left: 300px;
    top:62px;
    background: white;
    border-bottom:1px solid #5b5b5b;
    /*border: 1px solid #a2a2a2;*/
  }

  .top-Box{
    width: 1160px;
    height: 48px;
    border-bottom:1px solid #5b5b5b;
  ul{
    width:200px;
    height:48px;
  }
  li{
    float: left;
    line-height: 48px;
    font-size: 17px;
    margin-left: 24px;
    cursor: pointer;
    color:#000;
  }
  li:hover{
    color: #409eff;
  }
  }


</style>
