import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Send from '@/components/Send'
import Query from '@/components/Query'
import TronLinkGuide from '@/components/TronLinkGuide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/Send',
    	name: 'Send',
    	component: Send
    },
    {
      path: '/Query',
      name: 'Query',
      component: Query
    },
    {
      path: '/TronLinkGuide/:installed',
      name: 'TronLinkGuide',
      component: TronLinkGuide
    }
  ]
})
