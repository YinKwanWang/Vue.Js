<template>
  <div id="detail">
    <div class="container">
      <div class="card p-3 mt-3">
       <h3>{{Blog.title}}</h3>
       <hr>
       <div class="card-body">
        <span class="text-info" v-for="lei in Blog.class">类别:{{lei}}</span><h4 class="card-title">
          {{Blog.title}}</h4>
          <img src="../img/3.jpg" alt="">
          <p class="card-text">

           <article>{{Blog.body}}</article>
         </p>
         
         
         <router-link :to="/editor/+Blog.id " class="btn btn-info">编辑</router-link>
         <footer class="blockquote-footer  float-right">1 day ago   <cite title="Source Title">作者:{{Blog.author}}</cite></footer>
         <button @click="deleteBlog(Blog.id)" class="btn btn-danger float-right">删除</button>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  
  export default {
    name:'detail',
    data(){
       return {
          Blog:{}
       }
    },
    methods:{
       fetchBlog:function(id){
          this.$http.get("http://localhost:3000/users/"+id)
            .then((res)=>{
               this.Blog= res.body;
               console.log(this.Blog);
            })
       },
       deleteBlog:function(id){
          this.$http.delete("http://localhost:3000/users/"+id)
            .then((res)=>{
                 this.$router.push({path:"/",query:{alert:"博客删除成功！"}});
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

