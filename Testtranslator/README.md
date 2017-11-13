# vue-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

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
*/