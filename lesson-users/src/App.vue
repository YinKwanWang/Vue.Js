<template>
  <div id="app">
       <app-header></app-header>
       <app-content></app-content>
       <app-footer></app-footer>   
  </div>
</template>

<script>
import header from './components/header'
import content from './components/content'
import footer from './components/footer'
export default {
  name: 'app',
  components:{
     "app-header":header,
      "app-content":content,
       "app-footer":footer
  },
  data(){
    return{
      
    }
  },
  methods:{
     
  }
}
</script>

<style scoped>
   

</style>
