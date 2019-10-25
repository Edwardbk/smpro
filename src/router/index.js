import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../pages/Index'),
    children: [{ path: '/index/item', component: () => import('../pages/index/item/Item') }, //商品管理-商品管理
    { path: '/index/itemadd', component: () => import('../pages/index/item/ItemAdd') },  //商品管理-添加商品

    { path: '/index/account', component: () => import('../pages/index/account/Account') },  //账号管理-账号管理
    { path: '/index/accountadd', component: () => import('../pages/index/account/AccountAdd') },  //账号管理-添加账号
    { path: '/index/accountpwd', component: () => import('../pages/index/account/AccountPwd') }]  //账号管理-密码修改
  }
]

const router = new VueRouter({
  routes
})

export default router
