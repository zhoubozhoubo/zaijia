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
import MyTaskDetails from '@/components/MyTaskDetails'
import Notice from '@/components/Notice'
import QrCode from '@/components/QrCode'
import MyTeam from '@/components/MyTeam'
import TeamIncome from '@/components/TeamIncome'
import MyIncome from '@/components/MyIncome'
import Withdraw from '@/components/Withdraw'
import MyWithdraw from '@/components/MyWithdraw'
import News from '@/components/News'
import NewsCopy from '@/components/NewsCopy'
import NewsDetails from '@/components/NewsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true
      }
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
      component: User,
      meta: {
        keepAlive: true
      }
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
      path: '/MyTaskDetails',
      name: 'MyTaskDetails',
      component: MyTaskDetails
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/QrCode',
      name: 'QrCode',
      component: QrCode
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
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/NewsCopy',
      name: 'NewsCopy',
      component: NewsCopy
    },
    {
      path: '/NewsDetails',
      name: 'NewsDetails',
      component: NewsDetails
    }
  ]
})
