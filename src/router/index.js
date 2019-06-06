import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TaskDetails from '@/components/TaskDetails'
import TaskSubmit from '@/components/TaskSubmit'
import SubmitSuccess from '@/components/SubmitSuccess'
import User from '@/components/User'
import Register from '@/components/Register'
import Login from '@/components/Login'
import MyTask from '@/components/MyTask'
import Notice from '@/components/Notice'
import MyTeam from '@/components/MyTeam'
import TeamIncome from '@/components/TeamIncome'
import MyIncome from '@/components/MyIncome'
import Withdraw from '@/components/Withdraw'
import MyWithdraw from '@/components/MyWithdraw'

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
    },
    {
      path: '/SubmitSuccess',
      name: 'SubmitSuccess',
      component: SubmitSuccess
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/MyTask',
      name: 'MyTask',
      component: MyTask
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/MyTeam',
      name: 'MyTeam',
      component: MyTeam
    },
    {
      path: '/TeamIncome',
      name: 'TeamIncome',
      component: TeamIncome
    },
    {
      path: '/MyIncome',
      name: 'MyIncome',
      component: MyIncome
    },
    {
      path: '/Withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/MyWithdraw',
      name: 'MyWithdraw',
      component: MyWithdraw
    }
  ]
})
