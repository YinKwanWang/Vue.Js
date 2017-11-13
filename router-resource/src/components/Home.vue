<template>
  <div id="home">
   <app-header></app-header>
   <app-users v-bind:users="users"></app-users>
   <app-footer v-on:changeFooter = "changeFooter($event)" v-bind:footers="footers"></app-footer>
  </div>
</template>
<!--
    属性传值：从父组件传到子组件
    1.属性绑定<v-bind>
    2自定义属性<users>
    3.props
    4. 传值 & 传引用
    引用：Object Array  传值：String Number Boolean ...
    
    事件传值 ：子组件传到父组件
    1.注册事件<$emit>
    2.绑定事件<v-on:自定义事件>
    3.实现方法及逻辑
-->

<script>
import Header from './header'
import Footer from './footer'
import Users from './users'
export default {
  name: 'home',
  components: {
    "app-header":Header,
    "app-footer":Footer,
    "app-users":Users
  },
  data(){
    return {
      users:[],
      footers : "Vue.js Footer"
    }
  },
  methods:{
    updateTitle:function(title){
      this.title = title.name;
    }
   
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
           this.users = res.body;
        })
  }
}
</script>

<style scoped>
</style>
