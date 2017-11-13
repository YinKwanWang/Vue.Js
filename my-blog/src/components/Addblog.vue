<template>
  <div id="add-blog">
   <div class="container">
    <h5 class="mt-3 bg-b py-2 px-2">发表博客</h5>
    <form @submit.prevent="Blogs">
      <div class="card mt-3">
        <div class="card-body">
          <h6 class="danger bg-danger text-light text-center"></h6>
          <h5 class="card-title">主题:</h5>
          <div class="form-group">
            <input v-model="Blog.title" type="text" class="form-control" id="exampleInputEmail1">
          </div>
           <h5 class="card-title">内容:</h5>

          <div class="form-group">
          <textarea v-model="Blog.body" class="form-control" cols="30" rows="10"></textarea>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input v-model="Blog.class" value="生活笔记"  type="checkbox" class="form-check-input">
              生活笔记
            </label>
            <label class="form-check-label ml-4">
              <input v-model="Blog.class" value="技术杂谈" type="checkbox" class="form-check-input">
              技术杂谈
            </label>
            <label class="form-check-label ml-4">
              <input v-model="Blog.class" value="福利专区" type="checkbox" class="form-check-input">
              福利专区
            </label>
            <label class="form-check-label ml-4">
              <input v-model="Blog.class" value="技术交流" type="checkbox" class="form-check-input">
              技术交流
            </label>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">作者:</label>
            <select class="form-control" v-model="Blog.author">
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
  name: 'add-blog',
  data(){
     return {
        Blog:{
           title:"",
           body:"",
           class:[],
           author:""
        }  
     }
  },
  methods:{
      Blogs:function(){
         if (!this.Blog.title||!this.Blog.body) {
            document.querySelector(".danger").innerHTML="内容不能为空，亲×";
         }else{
            document.querySelector(".danger").innerHTML="";
            console.log(this.Blog);
             this.$http.post("http://localhost:3000/users",this.Blog)
             .then((res)=>{
                 this.$router.push({path:"/",query:{alert:"博客发表成功"}});
            })
         }
      }
  }
}
</script>

<style scoped>
.bg-b{
  width: 100px;
  height: 40px;
  background: skyblue;
  color: white;
  -webkit-transform: skewX(15deg);
  cursor: pointer;
  border-radius: 10px;
  transition: 1s linear;
}
.bg-b:hover{
  -webkit-transform: scale(1.2);
  border-radius: 15px;
}
</style>
