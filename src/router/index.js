import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TaskDetails from '@/components/TaskDetails'
import TaskSubmit from '@/components/TaskSubmit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/TaskDetails',
      name: 'TaskDetails',
      component: TaskDetails
    },
    {
      path: '/TaskSubmit',
      name: 'TaskSubmit',
      component: TaskSubmit
    }
  ]
})
