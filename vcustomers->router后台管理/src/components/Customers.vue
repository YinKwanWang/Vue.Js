
<template>
  <div class="customers container">
  	  <Alert :message="alert"></Alert>
      <h1 class="page-header">用户管理系统</h1>
      <br>
      <input type="text" placeholder="根据姓名搜索内容" class="form-control" v-model="filterInput">
      <table class="table table-striped">
      	  <thead>
      	  	<tr>
      	  		<th>姓名</th>
      	  		<th>电话</th>
      	  		<th>邮箱</th>
      	  		<th></th>
      	  	</tr>
      	  </thead>
      	  <tbody>
      	  	<tr v-for="(customer,index) in filterCustomers(customers,filterInput)">
      	  		<td>{{customer.name}}</td>
      	  		<td>{{customer.phone}}</td>
      	  		<td>{{customer.email}}</td>
      	  		<!-- 取单条信息 id拼接 -->
      	  		<td><router-link :to="/details/+customer.id" class="btn btn-light btn_a">详情</router-link></td>
      	  	</tr>
      	  </tbody>
      </table>
  </div>
</template>

<script>

import Alert from './Alert'
  export default {
    name: 'customers',

    data(){
    	return{
    		customers:[],
    		filterInput:"",
    		alert:""
    	}
    },
    created(){
    	if (this.$route.query.alert) {
    		this.alert = this.$route.query.alert;
    	}
        this.fetchCustomers();
    },
    methods:{
        fetchCustomers:function(){
        	this.$http.get("http://localhost:3000/users")
              .then((res)=>{
            	this.customers = res.body;
            	console.log(this.customers);
            })
        },
        filterCustomers:function(customers,filterInput){
        	return customers.filter(function(item){
        		return item.name.match(filterInput);
        	})
        }

    },
    components:{Alert}
  }
</script>

<style>
.btn_a{border-radius: 8px;}
</style>
