<template>
  <div id="users">
  	  <ul>
  	  	<li v-for="date in users" >
  	  		<h2 @click="date.bool= !date.bool">{{date.name}}</h2>
  	  		<h3 v-show="date.bool">
  	  			  {{date.title}}
  	  		</h3>
  	  		
  	  	</li>
  	  </ul>

      <button @click="deleteUser()">删除用户</button>
  </div>
</template>

<script>

export default {
  //props:["users"],
  props:{
    users:{
       type:Array,
       required:true
    }
  },
  data(){
    return{
       
    }
  },
  methods:{
     deleteUser:function(){
        this.users.pop();
     }
  }
}

/*
* 属性传值：从父组件传到子组件
* 1.属性绑定 《v-bind:》
* 2.自定义属性<users>
* 3.props

* 引用： Object Array
* 传值: String, Number , Boolean ...

* 事件传值：从子组件传到父组件
* 1.注册事件<$emit> 2.绑定事件<v-on:自定义事件> 3.实现方法及逻辑
*/
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
