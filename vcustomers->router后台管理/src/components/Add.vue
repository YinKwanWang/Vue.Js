<template>
	<div id="add">
    <div class="container">
     <h2>添加用户</h2>
     <div class="card bg-light">
      <div class="card-body">
        <h4>用户信息</h4>
        <form @submit.prevent="Users">
          <div class="form-group bg-light">
           <label for="">姓名</label>
           <input type="text" v-model="user" class="form-control name" placeholder="Enter your name">
         </div>
         <div class="form-group bg-light">
          <label for="">电话</label>
          <input type="number" v-model="phone" class="form-control" placeholder="Enter your phone">
        </div>
        <div class="form-group bg-light">
          <label for="">邮箱</label>
          <input type="email" v-model="email" class="form-control" placeholder="Enter your email">
        </div>
         <div class="form-group bg-light">
          <label for="">学历</label>
          <input type="education" v-model="education" class="form-control" placeholder="Enter your education">
        </div>
         <div class="form-group bg-light">
          <label for="">毕业学校</label>
          <input type="text" v-model="school" class="form-control" placeholder="Enter your school">
        </div>
         <div class="form-group bg-light">
          <label for="">职业</label>
          <input type="text" v-model="profession" class="form-control" placeholder="Enter your profession">
        </div>
         <div class="form-group bg-light">
          <label for="">个人介绍</label>
          <textarea rows="5"  v-model="profile" class="form-control" placeholder="Enter your profile"></textarea> 
        </div>
        <button type="submit" class="btn btn-primary btn-block">提交</button>
      </form>
    </div>
  </div>

</div>
    </div>
</template>

<script>

export default {
  name: 'add',
  data(){
  	return{
  		base:{},
  		user:"",
  		phone:"",
  		email:"",
      education:"",
      school:"",
      profession:"",
      profile:""
  	}
  },
  methods:{
     Users(e){
      console.log(123);
      if (!this.user || !this.email || !this.phone) {
        console.log("请输入对应的内容！");
      }else{
      	  this.base={name:this.user,phone:this.phone,email:this.email,education:this.education,graduationschool:this.school,profession:this.profession,profile:this.profile};
      	  console.log(this.base);
         this.$http.post("http://localhost:3000/users",this.base)
         	 .then((res)=>{
            	console.log(res);
              //路由跳转
              this.$router.push({path:"/",query:{alert:"王彦昆说:亲！用户添加成功了哦"}});
            })
      } 
     }
  }
}
</script>

<style>
#add{
  font-weight: bold;
}
#add input{
   border-radius: 5px;
}
</style>

</template>