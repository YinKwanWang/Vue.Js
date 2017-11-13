<template>
	<div id="editor">
    <div class="container">
     <h2>编辑用户信息</h2>
     <div class="card bg-light">
      <div class="card-body">
        <h4>用户信息</h4>
        <form @submit.prevent="update(customer.id)">
          <div class="form-group bg-light">
           <label for="">姓名</label>
           <input type="text" v-model=customer.name class="form-control name">
         </div>
         <div class="form-group bg-light">
          <label for="">电话</label>
          <input type="number" v-model=customer.phone class="form-control" >
        </div>
        <div class="form-group bg-light">
          <label for="">邮箱</label>
          <input type="email" v-model=customer.email class="form-control" >
        </div>
         <div class="form-group bg-light">
          <label for="">学历</label>
          <input type="education" v-model=customer.education class="form-control">
        </div>
         <div class="form-group bg-light">
          <label for="">毕业学校</label>
          <input type="text" v-model=customer.graduationschool class="form-control" >
        </div>
         <div class="form-group bg-light">
          <label for="">职业</label>
          <input type="text" v-model=customer.profession class="form-control">
        </div>
         <div class="form-group bg-light">
          <label for="">个人介绍</label>
          <textarea rows="5"  v-model=customer.profile class="form-control" ></textarea> 
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
  name: 'editor',
  data(){
  	return{
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
     update:function(id){
         this.$http.put("http://localhost:3000/users/"+id,this.customer)
                  .then((res)=>{
                  this.$router.push({path:"/",query:{alert:"王彦昆说:亲！用户信息更新成功了哦"}})
             })
     }
  },
  created(){
      this.fetchCustomer(this.$route.params.id);
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