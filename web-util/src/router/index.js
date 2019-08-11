import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Managers from '@/components/managers/Managers'
import EnvoyNumDesign from '@/components/managers/envoys/EnvoyNumDesign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/managers',
      name: 'managers',
      component: Managers
    },
    {
      path: '/managers/envoys/EnvoyNumDesign',
      name: 'EnvoyNumDesign',
      component: EnvoyNumDesign
    }
  ]
})
