import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Login from '@/views/login'
import HomePage from '@/views/homePage'
import store from '@/store';
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'homePage',
    component: HomePage,
    children: []
  }, {
    path: '/*',
    name: '404',
    component: resolve => require(['@/views/state/404'], resolve)
  }, {
    path: "/login",
    redirect: '/'
  }]
})

// const whiteList = ['/login'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  // 将产生的200出现的页面,变为404页面  
  if (to.path.includes('200')) {
    store.commit('editState', 404);
  }
  next();
});

export default router;
