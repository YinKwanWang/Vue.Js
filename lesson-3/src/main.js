import Vue from 'vue'
import App from './App'
//import Users from './components/Users'
Vue.config.productionTip = false
//  注册全局组件 脚手架中默认不给分号
// Vue.component("users",Users)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
