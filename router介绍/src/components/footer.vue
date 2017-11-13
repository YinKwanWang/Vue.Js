<template lang="html">
   <footer>
      <h1 v-on:click="changeFooter">{{footers}}</h1>
   </footer>
</template>

<script>
export default {
  props:{
    footers:{
      type:String,
      required:true
    }
  },
  data(){
     return {

     }
  },
  methods:{
    changeFooter(){
      this.$emit("changeFooter","事件传值");
    }
  }
}
</script>

<style scoped>
footer{
  background: skyblue;
  padding: 10px;
}
h1{
  text-align: center;
}
</style>
