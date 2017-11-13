<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
      <!-- <li><a href="/">Home</a></li>
      <li><a href="/test">Test</a></li> -->
    </ul>
    <router-view></router-view> 
  </div>
</template>
<!--
    属性传值：从父组件传到子组件
    1.属性绑定<v-bind>
    2自定义属性<users>
    3.props
    4. 传值 & 传引用
    引用：Object Array  传值：String Number Boolean ...
  
    事件传值 ：子组件传到父组件
    1.注册事件<$emit>
    2.绑定事件<v-on:自定义事件>
    3.实现方法及逻辑
-->

<script>
export default {
  name: 'app',
  data(){
    return {
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>

</style>
