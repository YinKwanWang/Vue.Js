// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//es6中语法引入模块
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


/*
* vue-app/ index.html : 整个项目的入口文件
* src/ main.js : 整个项目逻辑主文件
* Vue实例 : vue的实例化对象 包含：el / tem / com 
* temp: 模板中可以写html / 调用其他组件
* <App/> : 代表模板要执行的组件文件，跟App.vue中的name属性有关
* comp : 组件组中要包含需要调用的组件名，例如上面模板调用了<App/>,
  那么组件组中一定要包含App组件
* import: imgport用于导入需要依赖的文件，
  例如上方组件中，想要引入App组件，那么首先要使用import引入这个组件文件
* import ... from ... 
  import 后面是自己起的名字，from 后面是组件的名字
* // 端口号 可以改
  build/  const port = process.env.PORT || config.dev.port

*-- tools->最上面第一个->installpakge-> syntaxhightlight
 根组件 高亮显示
*/
