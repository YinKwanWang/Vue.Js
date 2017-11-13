<template>
	<div id="editor">
    <div class="container">
      <h5 class="mt-3 bg-b py-2 px-2">编辑博客</h5>
    <form @submit.prevent="Blogs()">
      <div class="card mt-3">
        <div class="card-body">
          <h6 class="danger bg-danger text-light text-center"></h6>
          <h5 class="card-title">主题:</h5>
          <div class="form-group">
            <input v-model=blogs.title type="text" class="form-control" id="exampleInputEmail1">
          </div>
           <h5 class="card-title">内容:</h5>

          <div class="form-group">
          <textarea v-model=blogs.body class="form-control" cols="30" rows="10"></textarea>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input v-model=blogs.class value="生活笔记"  type="checkbox" class="form-check-input">
              生活笔记
            </label>
            <label class="form-check-label ml-4">
              <input v-model=blogs.class value="技术杂谈" type="checkbox" class="form-check-input">
              技术杂谈
            </label>
            <label class="form-check-label ml-4">
              <input v-model=blogs.class value="福利专区" type="checkbox" class="form-check-input">
              福利专区
            </label>
            <label class="form-check-label ml-4">
              <input v-model=blogs.class value="技术交流" type="checkbox" class="form-check-input">
              技术交流
            </label>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">作者:</label>
            <select class="form-control" v-model="blogs.author">
              <option>Henry</option>
              <option>Bucky</option>
              <option>Emily</option>
              <option>FrankLin</option>
              <option>Light</option>
            </select>
          </div>
          <button type="submit" class="btn btn-info">发表</button>
        </div>
      </div>
    </form>
       </div>
    </div>
</template>

<script>

export default {
  name: 'editor',
  data(){
  	return{
  		 blogs:{}
  	}
  },
 methods:{
       fetchBlog:function(id){
          this.$http.get("http://localhost:3000/users/"+id)
            .then((res)=>{
               this.blogs= res.body;
               // console.log(this.Blog);
            })
       },
       Blogs:function(){
          this.$http.put("http://localhost:3000/users/"+this.$route.params.id,this.blogs)
            .then((res)=>{
                 this.$router.push({path:"/",query:{alert:"博客更新成功！"}});
            })
       }
    },
    created(){
       this.fetchBlog(this.$route.params.id);
    }
}
</script>

<style>

</style>

</template>