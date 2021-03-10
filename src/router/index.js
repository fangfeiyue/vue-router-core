import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '@/vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter) // 为了使vue-router中的Vue的版本和用户使用的一致

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [{
      path: 'info',
      component: {
        render(h) {
          return <h1>基本信息</h1>
          // return h('h1', null, '基本信息')
        }
      }
    }, {
      path: 'history',
      component: {
        render(h) {
          return <h1>工作履历</h1>
        }
      }
    }]
  }
]

/*
前端路由实现：
hash： 兼容性好 主要使用 location.hash = 'xxx' window.addEventListener('hashchange',()=>{}) 实现

history：需要服务端支持 主要使用 pushState  window.addEventListener('popstate') 实现
*/ 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
