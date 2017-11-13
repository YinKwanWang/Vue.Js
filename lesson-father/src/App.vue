<template>
  <div id="app">
     <app-header @titleChange="updateTitle($event)" :title="title"></app-header>
     <app-users :users="dates"></app-users>
     <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Users from './components/Users'
import Footer from './components/Footer'
export default {
  name: 'app',
  components:{
    "app-header":Header,
    "app-users":Users,
    "app-footer":Footer
  },
  data(){
    return{
       dates:[{name:"艾琳",title:"Web开发",bool:false},{name:"花季",title:"UI",bool:false},{name:"滑稽",title:"VR",bool:false},{name:"大飞",title:"JAVA",bool:false},{name:"大牛",title:"大数据",bool:false},{name:"二牛",title:"产品经理",bool:false}],
       title:"AngularJS"
    }
  },
  methods:{
     updateTitle:function(title){
         this.title=title.name;
     }
  }
}
</script>

<style scoped>
   

</style>
