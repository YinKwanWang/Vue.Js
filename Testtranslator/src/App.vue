 
<template>
  <div class=" text-center mt-5" id="app">
  	  <h2>在线翻译</h2>
  	  <h6 class="text-muted">简单 / 易用 / 便捷</h6>
      <translateForm @formSubmit="translateText"></translateForm>
      <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'


export default {
  name: 'app',
  data(){
  	return {
  		translatedText:""
  	}
  },
  components:{TranslateForm,TranslateOutput},
  methods:{
  	translateText:function(text,language){
  		// console.log(text);
  		this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171113T121311Z.39d1ae504a4a06d7.fa5d3f257e2d1dfc3adf1eb816677672d9d2eb44&lang='+language+'&text='+text)
  		     .then((res)=>{
  		     	this.translatedText = res.body.text[0];
  		     })
  	}
  }
}
</script>
<!-- 
   style: 样式
 -->
<style>

</style>
