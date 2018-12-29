<template>
  <div id="left-nav">
    <div id="headImgBox">
      <div id="headImg"></div>
    </div>
    <ul>
      <router-link to="/home" tag="li">首页</router-link>
      <router-link to="/order" tag="li">订单管理</router-link>
      <router-link to="/meal" tag="li">套餐管理</router-link>
      <router-link to="/customer" tag="li">客户管理</router-link>
      <router-link to="/comment" tag="li">客户评论</router-link>
      <router-link to="/advisory" tag="li">客户咨询</router-link>
      <router-link to="/statistical" tag="li">统计报表</router-link>
      <router-link to="/partner" tag="li">合作商</router-link>
      <router-link to="/staff" tag="li">员工管理</router-link>
    </ul>

    <router-view></router-view>
  </div>

</template>

<script>
    export default{
        name: 'LeftNav',
    }
</script>

<style scoped lang="less">

  #left-nav{
    width: 266px;
    height: 672px;
    background: #2a2a2a;
    float: left;
    margin-left: 16px;
    margin-top: 8px;
  }
  #headImgBox{
    width: 248px;
    height: 120px;

  }
  #headImg{
    //border-radius: 50%;
    height: 110px;
    width: 110px;
    background: #f2f2f2;
    margin: 10px auto;
  }

  ul{
    width: 248px;
    height: 500px;
    margin-left:5px;
  }
  li{
    width: 248px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    letter-spacing: 3px;
    color: #ebebeb;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 5px;
    margin-left: 4px;
    background: #353535;
    border-radius: 2%;
  }



  li:hover{
    /*background: #02B1DA;*/
    background: #4a4a4a;
  }

</style>
