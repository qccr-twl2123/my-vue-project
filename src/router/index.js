import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import Games from '@/components/Games'
import Filter from '@/components/Filter'
import HandleBetaData from '@/components/HandleBetaData'
import Condition from '@/components/Condition'
import ParentComponent from '@/components/ParentComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/filter',
      name: 'filter',
      component: Filter
    },
    {
      path: '/handleBetaData',
      name: 'HandleBetaData',
      component: HandleBetaData
    },
    {
      path: '/condition',
      name: 'Condition',
      component: Condition
    },
    {
      path: '/parentComponent',
      name: 'ParentComponent',
      component: ParentComponent
    }
  ]
})
