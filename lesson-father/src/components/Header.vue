<template>
   <header>
   	   <h1 @click = "changeTitle()">{{title}}</h1>
   </header>
</template>

<script>

export default {
  props:{
    title:{
      type:String,
      required:true
    }
  },
  data(){
    return{
       
    }
  },
  methods:{
     changeTitle:function(){
         //this.title="Vue.js";
         //第一个参数是自定义事件名 
         // 第二个参数及以后的参数都是数据
         this.$emit("titleChange",{name:"WuChaoMin",email:"Hello"});
     }
  }
  //生命周期钩子函数
  /*beforeCreate(){
    alert("在页面创建之前,也就会还没有创建");
  },
  created(){
    alert("开始创建页面，但页面还未显示");
  },
  beforeMount(){
    alert("页面创建完毕，但页面还未显示");
  },
  mounted(){
    alert("执行完此方法，页面显示");
  },
  beforeUpdate(){
    alert("页面更改之前");
  },
  updated(){
    alert("页面更改");
  }*/
}
</script>

<style scoped>
   header{
       background: #27b9aa;
       padding: 10px;
       text-align: center;
   }
   h1{
       color: #fff;
       text-align: center;
   }
</style>