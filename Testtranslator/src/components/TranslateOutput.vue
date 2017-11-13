<template>
  <div id="translateOutput">
    <h2>{{translatedText}}</h2>
  </div>
</template>

<script>

export default {
  name: 'translateOutput',
  props:[
      "translatedText"
  ]
}
</script>
<!-- 
   style: 样式
 -->
<style>
#translateOutput{
	font-weight: bold;
	font-size: 80px;
	color: lightgreen;
}
</style>