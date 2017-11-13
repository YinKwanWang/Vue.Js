<template>
  <div id="users">
  	  <ul>
  	  	<li v-for="date in dates" >
  	  		<h2 @click="date.bool= !date.bool">{{date.name}}</h2>
  	  		<h3 v-show="date.bool">
  	  			  {{date.title}}
  	  		</h3>
  	  		
  	  	</li>
  	  </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
       dates:[{name:"艾琳",title:"Web开发",bool:false},{name:"花季",title:"UI",bool:false},{name:"滑稽",title:"VR",bool:false},{name:"大飞",title:"JAVA",bool:false},{name:"大牛",title:"大数据",bool:false},{name:"二牛",title:"产品经理",bool:false}]
    }
  },
  methods:{
     
  }
}
</script>

<style scoped>
 #users{
	width: 100%;
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;
}

ul{
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}

li{
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
}
</style>
