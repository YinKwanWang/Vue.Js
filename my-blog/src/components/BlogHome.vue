<template>
  <div v-theme:column="'narrow'" id="blog-home">
    <div class="container">
    	<Alert :message="alert"></Alert>
       <div class="row">
          <div class="col-3 col-left">
          	 <div class="head">
          	 	 <div class="col-img text-center py-4">
          	 	 	<div class="col-img-img">
          	 	 		<p class="col-sp">
          	 	 	    小赞
          	 	      </p>
          	 	 	</div>
          	 	 	<h6 class="text-warning pt-4" style="cursor:pointer;">粉丝:114</h6>
          	 	 </div>
          	 <div class="col-body">
          	 	 <div style="height:10px;"></div>
          	 	 <h6 class="py-2 px-4 text-body">猜你喜欢</h6>
          	 	 <div style="height:1px;background:#eeeeee;"></div>
          	 	 <div class="media bg-light mt-3 p-3" v-for="log in filterdBlogs">
          	 	 	<img class="mr-3" src="../img/2.jpg" alt="Generic placeholder image" style="width:64px;height:64px;">
          	 	 	<div class="media-body">
          	 	 		<h6 class="mt-0" v-rainbow>{{log.title}}</h6>
          	 	 		<article>{{log.body | snippet}}</article>
          	 	 	</div>
          	 	 </div>
          	 	<div style="height:1px;background:#eeeeee;"></div>
          	 </div> 
          	 </div>
          </div>
          <div class="col-9 col-right log bg-light">
          	         <div class="form-group">
                       <input type="text" class="form-control " placeholder="搜索" v-model="filterInput" >
                 </div>
          			<div class="card p-3 mt-3"  v-for="log in filterdBlogs">
          				<div class="card-body">
          					<span class="text-info" v-for="lei in log.class">类别:{{lei}}</span><h4 class="card-title">
          						<router-link :to="/detail/+log.id"  v-rainbow>{{log.title}}</router-link></h4>
          					 
          					<p class="card-text">
          					<img class="card-img-top" src="../img/2.jpg" alt="Card image cap" style="height: 400px;">
          					 <article>{{log.body | snippet}}</article>
          					</p>
          					<div class="heart"><i class="fa fa-heart" aria-hidden="true" style="color:pink;cursor:pointer;"></i></div>
          					 <footer class="blockquote-footer  float-right">1 day ago      <cite title="Source Title">作者:{{log.author}}</cite></footer>
          			</div>
          		</div>
          	</div>
          </div>
       </div>
    </div>
  </div>
 
</template>

<script>
import Alert from './Alert'
export default {
  name: 'blog-home',
  data(){
     return {
           logs:[],
           alert:"",
           filterInput:""
        }
  },
  created(){
  	   if (this.$route.query.alert) {
  	   	    this.alert=this.$route.query.alert;
  	   }
      this.fetchLogs();
  },
  //下面这个方法能把数组拿到  然后在上面遍历查找 输入的值
  computed:{
      filterdBlogs:function(){
      	   return this.logs.filter((blog)=>{
      	   	   return blog.title.match(this.filterInput)
      	   })
      }
  },
  // filters:{
  //    "to-uppercase":function(value){
  //    	return value.to-upperCase();
  //    }
  // },
  // directives:{
  //     'rainbow':{

  //     }
  // },
  methods:{
  	  fetchLogs:function(){
         this.$http.get("http://localhost:3000/users")
		             .then((res)=>{
		             	 // this.logs=res.body.slice(0,10)+"...";
		             	 this.logs=res.body;
		             })
  	  }
  },
  components:{
  	 Alert
  }
}
</script>

<style scoped>
*{padding: 0;}
.head{
	background: #D26564;
	height: 400px;
	width: 100%;
}
.col-body{
	background: lightpink;
	height: 2535px;
}
.col-img-img{
	background: url(../img/1.jpg) no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
	border: 1px solid #eaeaea;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
}
.col-sp{
    display: none;
	width: 100px;
	height: 55px;
	background: rgba(0,0,0,0.4);
	cursor: pointer;
	font-size: 16px;
	color: white;
	font-weight: bold;
	margin-top: 48px;
}
.col-img-img:hover .col-sp{
    display: block;
    color: lightpink;
    -webkit-transition: 5s linear;
}
.col-sp{
	transform: translate(0,0);
    transition:all .2s ease-in 5s;
}
.text-body{
	width: 115px;
	height: 40px;
    background: hotpink;
    border-radius: 50%;
    color: white;
    -webkit-transform: skewX(18deg);
}
</style>
