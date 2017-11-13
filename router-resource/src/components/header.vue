<template>
   <header>
      <h1 v-on:click="changeTitlt()">{{title}}</h1>
   </header>
</template>

<script>
export default {
  data(){
    return {
       title:"Vue.js title"
    }
  },
  methods:{
     changeTitlt(){
       this.title = "首页"
     }
  }
}
</script>

<style>
header{
  background: cyan;
  padding: 10px;
}
h1{
  color: #fff;
  text-align: center;
}
</style>
