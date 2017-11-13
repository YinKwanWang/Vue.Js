<template>
  <div id="detail">
     <div class="container">
     	<router-link to="/" class="btn border">返回</router-link>
     	<h3 class="mt-3">用户个人详情</h3>
     		<h3 class="">
     			{{customer.name}}
     			<span class="float-right">
     				<router-link :to="/editor/+customer.id" class="btn btn-primary">编辑</router-link>
     				<span @click="deleteCustomer(customer.id)" class="btn btn-danger">删除</span>
     			</span>
     		</h3>
     	<div class="inline bg-light"></div>

     	<div class="input-group mt-3">
     		<div class="input-group-addon"><i class="fa fa-mobile" ></i></div>
     		<input type="text" v-model=customer.phone class="form-control">
     	</div>
     	<div class="input-group mt-3">
     		<span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
     		<input type="text"  v-model=customer.email class="form-control" placeholder="Username">
     	</div>
     	<div class="input-group mt-3">
     		<span class="input-group-addon" id="basic-addon1"><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>
     		<input type="text"   v-model=customer.education class="form-control">
     	</div>
     	<div class="input-group mt-3">
     		<span class="input-group-addon" id="basic-addon1"><i class="fa fa-bandcamp" aria-hidden="true"></i></span>
     		<input type="text" v-model=customer.graduationschool class="form-control">
     	</div>
     	<div class="input-group mt-3">
     		<span class="input-group-addon" id="basic-addon1"><i class="fa fa-wrench" aria-hidden="true"></i></span>
     		<input type="text" v-model=customer.profession class="form-control">
     	</div>
     	<div class="input-group mt-3">
     		<span class="input-group-addon" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
     		<textarea rows="5" v-model="customer.profile" class="form-control"></textarea> 
     	</div>
     </div>
  </div>
</template>

<script>

  export default {
    name:'detail',
     data(){
    	return{
    		// $route 可以拿到浏览器的参数
    		//id:this.$route.params.id
    		customer:{}
    	}
    },
    methods:{
        fetchCustomer:function(id){
        	this.$http.get("http://localhost:3000/users/"+id)
            .then((res)=>{
            	this.customer = res.body;
            	console.log(this.customer);
            })
        },
        deleteCustomer(id){
        	this.$http.delete("http://localhost:3000/users/"+id).then((res)=>{
            	         this.$router.push({path:"/",query:{alert:"王彦昆说:亲！用户删除成功了哦"}});
              })
        }
    } ,
    created(){
        this.fetchCustomer(this.$route.params.id);
    }
  }
</script>

<style>
.border{
	border-radius: 8px;
	color: black;
}
.inline{height: 5px;}
</style>