<template>
  <footer>
  	 <h2>{{title}}</h2>
  </footer>
</template>

<script>

export default {
  data(){
    return{
       title:"Copyright 2017 Vue.js"
    }
  },
  methods:{
     
  }
}
</script>

<style scoped>
  footer{
       background: #eee;
       padding: 10px;
       text-align: center;
   }
   h2{
   	  color: lightblue;
   }
</style>
