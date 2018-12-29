<template>
     <div id="weddingMealBox">
       <!--查询框-->
       <div class="query-Box">

         <span>查询套餐：</span>

         <select name="selectqueryWay" id="selectqueryWay">
           <option value="1">按套餐编号</option>
           <option value="2">按套餐标题</option>
           <option value="3">按拍摄地</option>
         </select>

         <input type="text" id="keyInput" placeholder="请输入关键字">
         <button id="searchBtn">搜索</button>


       </div>

       <!--表格部分-->
       <div class="table-Box">

         <el-table
           :data="tableData"
           stripe
           style="width: 100%">
           <el-table-column
             prop="date"
             label="日期"
             width="180">
           </el-table-column>
           <el-table-column
             prop="name"
             label="姓名"
             width="180">
           </el-table-column>
           <el-table-column
             prop="address"
             label="地址">
           </el-table-column>
         </el-table>

       </div>

       <!--分页部分-->
       <div class="page-Box">
         <el-pagination
           background
           layout="prev, pager, next"
           :total="100">
         </el-pagination>
       </div>
     </div>
</template>

<script>
    export default{
        name: 'WeddingMeal',
        data(){
//          return {
//            activeName: 'second',
//            tableData: [
//              {
//                date: '2016-05-02',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1518 弄'
//              },
//              {
//                date: '2016-05-04',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1517 弄'
//              },
//              {
//                date: '2016-05-01',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1519 弄'
//              },
//              {
//                date: '2016-05-03',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1516 弄'
//              }],
//          }
        },
//      methods: {
//        handleClick(tab, event) {
//          console.log(tab, event);
//        }
//      }

    }

</script>

<style scoped lang="less">
  /*#weddingMealBox{*/
    /*width: 1160px;*/
    /*height: 600px;*/
    /*margin-top: 5px;*/
    /*position:absolute;*/
    /*left: 300px;*/
    /*top:62px;*/
    /*background: white;*/
    /*border-bottom:1px solid #5b5b5b;*/
  /*}*/
  .query-Box{
    width: 1160px;
    height: 46px;
    margin-top: 5px;
    position:relative;
    border-bottom:1px solid #5b5b5b;
  span{
    position: absolute;
    display: inline-block;
    left:18px;
    top:12px;
  }
  #selectqueryWay{
    position: absolute;
    width: 120px;
    height: 32px;
    left:110px;
    top:7px;
    text-align: center;
  }
  #keyInput{
    position: absolute;
    left:248px;
    top:8px;
    width: 180px;
    height: 27px;
  }
  #searchBtn{
    position: absolute;
    left:432px;
    top:8px;
    width: 54px;
    height: 31px;
    letter-spacing: 3px;
  }

  }

  .table-Box{
    width: 1160px;
    height: 420px;
    margin-top: 8px;
  }

  .page-Box{
    width: 1160px;
    height: 46px;
    margin-top: 5px;

  }
  .query-Box,.page-Box,.table-Box{
    /*border: 1px solid saddlebrown;*/
  }

</style>
