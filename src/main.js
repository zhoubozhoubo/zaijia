// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Dialog } from 'vant'
import Axios from 'axios'
import Fly from 'flyio'

Vue.use(Vant)
Vue.use(Dialog)
Vue.config.productionTip = false

const host = "http://127.0.0.1:8001/api/";
Vue.prototype.apiList={
  apiAreaList:        host+"5d0253080db26",    //地区列表
  apiBannerList:      host+"5d0286898878a",    //轮播图列表
  apiLinkList:        host+"5d0286b4ea311",    //链接列表
  apiTaskList:        host+"5d0286cb35cb3",    //任务列表
  apiTaskDetails:     host+"5d0286f251c4d",    //任务详情
  apiSendCode:        host+"5d02871310048",    //发送验证码
  apiRegister:        host+"5d02872f6e368",    //用户注册
  apiLogin:           host+"5d0287415a574",    //用户登录
  apiInfo:            host+"5d028757a9784",    //用户个人信息
  apiMyIncomeList:    host+"5d02876d5d982",    //用户收入列表
  apiMyTeamList:      host+"5d02879991352",    //用户团队列表
  apiTeamIncomeList:  host+"5d0287d22f573",    //用户团队收入列表
  apiNoticeList:      host+"5d02b2c1a7b23",    //用户消息列表
  apiWithdrawList:    host+"5d0287e451a4c",    //用户提现列表
  apiUserTaskList:    host+"5d0287facb879",    //用户任务列表
  apiAddTask:         host+"5d0288178f14a",    //用户添加任务
  apiSubmitTask:      host+"5d02882d0a05a",    //用户提交任务
  apiDelTask:         host+"5d0288414ff33",    //用户放弃任务
  apiUserTaskDetails: host+"5d0379759b283",    //用户任务详情
}

Vue.prototype.axios=Axios
Vue.prototype.fly=Fly

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
