<!-- 搭建脚手架
   安装cli
   vue init webpack vcustomers   4个n
   cnpm install 下载依赖的模块
   npm run dev 运行


   在请求数据：
   cnpm install resource --save-dev 安装指令
   npm  run dev
   在main.js里面引用 import VueResource from 'vue-resource'
   Vue.use(VueRsource)
   定义数组
   data(){
    	return{
    		customers:[]
    	}
    },
   请求数据
   created(){
        this.$http.get("http://localhost:3000/users")
            .then((res)=>{
            	this.customers = res.body;
            })
    }
 -->
<template>
  <div id="app">
  	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  		<div class="container">
  		<router-link class="navbar-brand" to="/">用户管理系统</router-link>
  		<div class="collapse navbar-collapse" id="navbarNav">
  			<ul class="navbar-nav">
  				<li class="nav-item active">
  					<router-link to="/" class="nav-link">主页</router-link>
  				</li>
  				<li class="nav-item">
  					<router-link to="/about" class="nav-link">关于</router-link>
  				</li>
  			</ul>
        
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/add" class="nav-link">添加用户</router-link>
          </li>
        </ul>
  		</div>
  	</div>
  	</nav>
  	<div class="nav line"></div>
  	<br>
    
  	<router-view></router-view>
  	
  	<footer class="bg-light p-5 mt-3">
  		<h3 class="text-muted text-center">Users Of Us</h3>
  	</footer>
  </div>
  
</template>

<script>


export default {
   name: 'app'
}
</script>

<style>
.line{
	height: 3px;
    width: 100%;
    background: lightgrey;
}
</style>
