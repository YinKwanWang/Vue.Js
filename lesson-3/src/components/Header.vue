<template>
   <header>
   	   <h1>{{title}}</h1>
   </header>
</template>

<script>

export default {
  data(){
    return{
       title:"Vue Demo"
    }
  },
  methods:{
     
  }
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