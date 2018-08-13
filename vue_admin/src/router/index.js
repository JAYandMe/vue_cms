import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Welcome from '@/views/welcome/Welcome'
import User from '@/views/user/User'
<<<<<<< HEAD
import Rights from '@/views/right/Rights'
import Roles from '@/views/right/Roles'
=======
>>>>>>> user
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: {path: 'welcome'},
      children: [
        {
<<<<<<< HEAD
          name: 'Welcome',
          path: 'welcome',
          component: Welcome
        }, {
          name: 'User',
          path: 'user',
          component: User
        },{
          name:'Rights',
          path:'rights',
          component:Rights
        },{
          name:'Roles',
          path:'roles',
          component:Roles
=======
          name:'elcome',
          path:'Welcome',
          component:Welcome
        },{
          name:'User',
          path:'user',
          component:User
>>>>>>> user
        }
      ]
    }
  ]
})

