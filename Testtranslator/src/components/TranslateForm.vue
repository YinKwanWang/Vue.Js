<template>
  <div class="row" id="translateForm">
  	 <div class="m-auto p-3">
	      <form id="transForm" class="well form-inline p-3" @submit.prevent="formSubmit()">
	      	  <input class="form-control" v-model=textToTranslate type="text" placeholder="输入需要翻译的内容" >
	      	  <select class="form-control" v-model="language" id="">
	      	  	  <option value="en">English</option>
	      	  	  <option value="ru">Russian</option>
	      	  	  <option value="ko">Korean</option>
	      	  	  <option value="ja">Japanese</option>
	      	  	  <option value="fr">French</option>
	      	  </select>
	      	  <input class="btn btn-primary m-auto" type="submit" value="翻译">
	      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'translateForm',
  data(){
  	return{
       textToTranslate:"",
       language:""
  	}
  },
  methods:{
     formSubmit:function(){
         //alert(this.textToTranslate); 子传父
         this.$emit("formSubmit",this.textToTranslate,this.language);
     }
  },
  created:function(){
  	  this.language = "en";
  }
}
</script>
<!-- 
   style: 样式
 -->
<style>
#transForm{
	border: 1px #ccc solid;
	border-radius: 10px;
}
</style>