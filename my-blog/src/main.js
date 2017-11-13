
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import bloghome from './components/BlogHome'
import About from './components/About'
import addblog from './components/Addblog'
import detail from './components/Detail'
import editor from './components/Editor'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)


//自定义指令
Vue.directive('rainbow',{
	bind(el,binding,vnode){
		el.style.color = "#"+Math.random().toString(16).slice(2,8);
	}
})
Vue.directive('theme',{
	bind(el,binding,vnode){
		if (binding.arg == 'column') {
			// el.style.background = "#6677cc";
			el.style.padding = "20px";
		}
	}
})

//过滤器的使用 管道左边是拿到的值 vlue 接受
Vue.filter("to-uppercase",function(value){
     //return value.to-UpperCase();//字母大写
})

Vue.filter("snippet",function(value){
     return value.slice(0,100) + "...";
})


const router = new VueRouter({
   routes:[
     {path:"/",component:bloghome},
     {path:"/about",component:About},
     {path:"/add",component:addblog},
     {path:"/detail/:id",component:detail},
     {path:"/editor/:id",component:editor}
   ],
   mode:"history",
   base:__dirname
})



new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
