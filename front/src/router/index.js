import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import home from '@/components/home'
// import Dao from '@/components/Dao'
// import Hexin from '@/components/Hexin'
// import CaiLiaogys from '@/components/CaiLiaogys'
// import Pingji from '@/components/Pingji'
// import Erro from '@/components/Erro'
// import Qiye from '@/components/Qiye'
// import Fangwen from '@/components/Fangwen'
// import Qiye_pingji from '@/components/Qiye_pingji'
// import Financialdata from '@/components/Financialdata'
// import Wuliao1 from '@/components/Wuliao1'
// import Jiliangdanwei from '@/components/Jiliangdanwei'
// import WuliaoType from '@/components/WuliaoType'
// import JianzhuXiangmu from '@/components/JianzhuXiangmu'
// import ZhizaoXiangmu from '@/components/ZhizaoXiangmu'
// import CaiGou from '@/components/CaiGou'
// import HuanKuan from '@/components/HuanKuan'
// import JinduUpdate from '@/components/JinduUpdate'
// import Ruku from '@/components/Ruku'
// import Chuku from '@/components/Chuku'
// import Kucun from '@/components/Kucun'
// import Login from '@/components/Login'
// import Register from '@/components/Register'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/Dao',
      name: 'Dao',
      component: () => import('@/components/Dao.vue'),
      children:[{
          path: '/',
          component: () => import('@/components/home.vue')
        },
        {
          path: '/Erro',
          component: () => import('@/components/Erro.vue')
        },
        {
          path: '/Bumen',
          component: () => import('@/components/Bumen.vue')
        },
        {
          path: '/Hexin',
          component: () => import('@/components/Hexin.vue')
        },
        {
          path: '/Daping',
          component: () => import('@/components/Daping.vue')
        },
        {
          path: '/Test',
          component: () => import('@/components/Test.vue')
        },
        {
          path: '/CaiLiaogys',
          component: () => import('@/components/CaiLiaogys.vue')
        },
        {
          path: '/Pingji',
          component: () => import('@/components/Pingji.vue')
        },
        {
          path: '/Qiye',
          component: () => import('@/components/Qiye.vue')
        },
        {
          path: '/Fangwen',
          component: () => import('@/components/Fangwen.vue')
        },
        {
          path: '/Qiye_pingji',
          component: () => import('@/components/Qiye_pingji.vue')
        },
        {
          path: '/Financialdata',
          component: () => import('@/components/Financialdata.vue')
        },
        {
          path: '/Wuliao',
          component: () => import('@/components/wuliao.vue')
        },
        {
          path: '/Jiliangdanwei',
          component: () => import('@/components/Jiliangdanwei.vue')
        },
        {
          path: '/WuliaoType',
          component: () => import('@/components/WuliaoType.vue')
        },
        {
          path: '/JianzhuXiangmu',
          component: () => import('@/components/JianzhuXiangmu.vue')
        },
        {
          path: '/ZhizaoXiangmu',
          component: () => import('@/components/ZhizaoXiangmu.vue')
        },
        {
          path: '/CaiGou',
          component: () => import('@/components/CaiGou.vue')
        },
        {
          path: '/FuKuan',
          component: () => import('@/components/Fukuan.vue')
        },
        {
          path: '/HuanKuan',
          component: () => import('@/components/HuanKuan.vue')
        },
        {
          path: '/JinduUpdate',
          component: () => import('@/components/JinduUpdate.vue')
        },
        {
          path: '/Ruku',
          component: () => import('@/components/Ruku.vue')
        },
        {
          path: '/Chuku',
          component: () => import('@/components/Chuku.vue')
        },
        {
          path: '/Kucun',
          component: () => import('@/components/KuCun.vue')
        },
        {
      path: '/profile',
      // lazy-loaded
      component: () => import('@/components/Profile')
    },
      ]
    },
    {
      path: '/',
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/register',
      component: () => import('@/components/Register.vue')
    },
    
  ]
})
