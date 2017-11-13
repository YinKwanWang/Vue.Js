
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import Detail from './components/details'
import Editor from './components/editor'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
   routes:[
     {path:"/",component:Customers},
     {path:"/about",component:About},
     {path:"/add",component:Add},
     // 取Id路由参数
     {path:"/details/:id",component:Detail},
     {path:"/editor/:id",component:Editor}
   ],
   mode:"history",
   base:__dirname
})

new Vue({
  router,
  el: '#app',
  template:'<App/>',
  components: { App }
})
