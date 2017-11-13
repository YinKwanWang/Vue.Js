<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-info bg-info">
      <div class="container">
        <router-link class="navbar-brand text-light lg-color" to="/">Al~小赞博客首页</router-link>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav nav-color">
            <router-link class="nav-item nav-link active text-warning ml-4" to="/">主页</router-link>
            <router-link class="nav-item text-light nav-link ml-4" to="/about">关于我</router-link>
            <router-link class="nav-item text-warning nav-link ml-4" to="">学无止境</router-link>
            <router-link class="nav-item text-light nav-link ml-4" to="/add">添加博客</router-link>
            <router-link class="nav-item text-warning nav-link disabled ml-4" to="">留言</router-link>
          </div>
        </div>
        
     </div>
   </nav>
   <div class="line"></div>
   <router-view></router-view>
   

  <div style="height:260px;"></div>
  <div class="p-5 text-center bg-info  text-warning fixed-bottom">
   <h5 class="p-3">四季有轮回，日月有圆缺</h5>
   <cite title="Source Title">---作者:Al~小赞</cite>
 </div>
</div>

</template>

<script>

export default {
  name: 'app',
  data(){
     return {
       
     }
  }
}
</script>

<style scoped>
.lg-color{
  display: inline-block;
  width: 150px;
  height: 50px;
  background: #27b99a;
  -webkit-transform: skewY(15deg);
}
.nav-color a:hover{
   display: inline-block;
   width: 100px;
   height: 40px;
   background: #27b99a;
   text-align: center;
   font-size: 16px;
   -webkit-transform: skewY(15deg);
   transition: 1s;
}
.line{width: 100%;height: 3px;background: pink;}

</style>
