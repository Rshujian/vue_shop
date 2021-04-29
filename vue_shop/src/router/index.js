import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from'../components/Login.vue'
import Home from "../components/Home.vue";
import {nextDate} from "element-ui";
Vue.use(VueRouter)
const routes = [

]
// 配置地址
const router = new VueRouter({
  routes:[
  { path:'/',redirect:'/login'},
  { path:'/login',component:Login},
  {path:'/home',component:Home}


  ]
})
//挂载路由导航首位
router.beforeEach((to,from,next) => {
  //to 将要访问的路径
  //from 来时路径
  //next：放行    next(‘xxx’) 强制跳转
  if (to.path=='/login') return next()
  //获取token
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default router


