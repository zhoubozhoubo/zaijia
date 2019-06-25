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
import VueJsonp from 'vue-jsonp'

Vue.use(Vant)
Vue.use(Dialog)
Vue.use(VueJsonp)
Vue.config.productionTip = false

const host = "http://127.0.0.1:8001/api/";
// const host = "http://jianzhi.hmdog.com/api/";
// const host = "http://zaijia.huiyuancaifu.cn/api/";
Vue.prototype.apiList={
  apiWeChatSign:      host+"5d09ec134b44e",    //微信签名
  apiUpload:          host+"5d08606042e0e",    //文件上传
  apiWechatQrCode:    host+"5d0b5433d9ae1",    //微信公众号二维码
  apiAreaList:        host+"5d0253080db26",    //地区列表
  apiNewsTypeList:    host+"5d0928d42c8e4",    //新闻类型列表
  apiNewsList:        host+"5d092b3207a43",    //新闻列表
  apiNewsDetails:     host+"5d092d1e330fa",    //新闻详情
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
  apiReadNotice:      host+"5d0460e82d9c3",    //用户标记消息已读
  apiWithdrawList:    host+"5d0287e451a4c",    //用户提现列表
  apiAddWithdraw:     host+"5d04437d3bcd4",    //用户申请提现
  apiUserTaskList:    host+"5d0287facb879",    //用户任务列表
  apiAddTask:         host+"5d0288178f14a",    //用户添加任务
  apiSubmitTask:      host+"5d02882d0a05a",    //用户提交任务
  apiDelTask:         host+"5d0288414ff33",    //用户放弃任务
  apiUserTaskDetails: host+"5d0379759b283",    //用户任务详情
}

Vue.prototype.axios=Axios
Vue.prototype.fly=Fly



// var geolocation = new qq.maps.Geolocation("7XXBZ-X753F-4A3JN-JENMQ-LSMTZ-M6FCR", "jianke");
// geolocation.getLocation(function (res) {
//   // $('.currentCity span').html(res.city);
//   // $('.may_city a').html(res.city);
//   console.log(res.city)
// }, function (err) {
//   console.log(err)
// }, {
//   timeout: 3000
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
