<template>
	<div class="container">
		<h3 class="bg-light p-3 mt-4">展示数据</h3>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">姓名</th>
					<th scope="col">邮箱</th>
					<th scope="col">电话</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in users" class="add">
					<td>{{user.name}}</td>
					<td>{{user.email}}</td>
					<td>{{user.phone}}</td>
					<td class="poiner" @click="del(index)">{{user.symbol}}</td>
				</tr>
			</tbody>
		</table>
		<h3 class="bg-light p-3 mt-4">添加数据</h3>
        <form>
        	<div class="form-group bg-light p-3">
        		<label for="">姓名</label>
        		<input type="text" v-model="name" class="form-control"  placeholder="Enter name">
            <h6 class="bg-danger text-warning text-center mt-3 name"></h6>
        	</div>
        	<div class="form-group bg-light p-3">
        		<label for="">邮箱</label>
        		<input type="email" v-model="email" class="form-control" placeholder="Enter email">
            <h6 class="bg-danger text-warning text-center mt-3 email"></h6>
        	</div>
        	<div class="form-group bg-light p-3">
        		<label>电话</label>
        		<input  type="text" v-model="phone" class="form-control" placeholder="Enter phone">
            <h6 class="bg-danger text-warning text-center mt-3 phone"></h6>
        	</div>
        	<button @click.prevent="add()" type="submit" class="btn btn-info">添加</button>
        </form>
    </div>
</template>

<script>

export default {
  data(){
    return{
      name:"",
      email:"",
      phone:"",
      users:[{name:"Hemiah",email:"Hemiah@gmail.com",phone:"13651322450",symbol:"×"},{name:"Henry",email:"Henry@gmail.com",phone:"1365132000",symbol:"×"},{name:"Elyse",email:"elyse@gmail.com",phone:"13651322400",symbol:"×"}]
    }
  },
  methods:{
    del:function(index){
         this.users.splice(index,1);
    },
    add:function(){
      if (this.name=="") {
          document.querySelector(".name").innerHTML = "姓名不能为空";  
      }
      if (this.email=="") {
          document.querySelector(".email").innerHTML = "邮箱不能为空";   
      }
      if (this.phone=="") {
          document.querySelector(".phone").innerHTML = "电话不能为空";
      }
      if (this.name!=""&&this.email!=""&&this.phone!="") {
        document.querySelector(".name").innerHTML = "";
        document.querySelector(".email").innerHTML = "";
        document.querySelector(".phone").innerHTML = "";
        this.users.push({name:this.name,email:this.email,phone:this.phone,symbol:"×"});
      }
       this.name="";
       this.email="";
       this.phone="";
    } 
  }
}
</script>

<style scoped>
.poiner{
	cursor: pointer;
}

</style>
