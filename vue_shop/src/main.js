import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//导入全局样式
import './assets/css/global.css'
//导入axios包,然后挂载到vue的原型对象上
import axios from "axios";
//配置请求的根路径,可以直接加？？？，暂时搞不明白其他的地址怎么加，先用视频给的API接口文档里面的url吧
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http=axios//每一个vue组件都可以通过this直接访问$http 从而发起axios（ajax）请求
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
