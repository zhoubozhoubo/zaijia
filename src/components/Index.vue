<template>
  <div class="index">
    <!--location-->
    <van-row class="locationRow">
      <van-col span="22" offset="1">
        <div @click="showArea">
          <van-icon name="location" size="20px" class="location"/>
          <span>{{county}}</span>
          <van-icon name="arrow-down" size="20px" class="select"/>
        </div>
      </van-col>
    </van-row>
    <!--banner-->
    <van-row class="bannerRow">
      <van-col span="24">
        <van-swipe :autoplay="3000" :height="200">
          <van-swipe-item v-for="(banner, bannerIndex) in bannerList" :key="bannerIndex">
            <a :href="banner.url">
              <img :src="banner.img"/>
            </a>
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
    <!--link-->
    <van-row class="linkRow">
      <van-col span="6" v-for="(link, linkIndex) in linkList" :key="linkIndex">
        <a :href="link.url">
          <img :src="link.img"/>
        </a>
      </van-col>
    </van-row>
    <!--order-->
    <van-row class="orderRow">
      <van-col span="8" offset="15">
        <div class="orderSelect" @click="showOrder">
          <span>{{order}}</span>
          <van-icon name="arrow-down" />
        </div>
      </van-col>
    </van-row>
    <!--task-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="taskRow" v-for="(task, taskIndex) in taskList" :key="taskIndex">
        <div @click="goTaskDetails(task.task_id)">
          <van-col span="3" offset="1">
            <img :src="task.taskType.img"/>
          </van-col>
          <van-col span="18" offset="1" class="taskContent">
            <h1>{{task.title}}</h1>
            <h2><span class="money">{{task.money}}元/次</span>剩余{{task.surplus_number}}次</h2>
          </van-col>
        </div>
      </van-row>
    </van-list>
    <!--areaShow-->
    <van-popup v-model="areaShow" position="bottom" :overlay="true">
      <van-area :area-list="areaList" value="110101" title="城市" :columns-num="2" @confirm="confirmArea" @cancel="cancelArea"/>
    </van-popup>
    <!--orderShow-->
    <van-actionsheet
      v-model="orderShow"
      :actions="orderList"
      @select="selectOrder"
    />

    <div class="block"></div>
    <van-tabbar v-model="activeBar">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="new-o" to="News">最新资讯</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="User">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<!--<script src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>-->

<script>
  import wx from "weixin-jsapi"
export default {
  name: 'Index',
  data () {
    return {
      bannerList: [],
      linkList: [],
      taskList: [],
      loading: false,
      finished: false,
      param: {
        city: '',
        order: 0,
        page:0
      },
      county: '成都',
      areaShow: false,
      areaList: [],
      order: '默认排序',
      orderShow: false,
      orderList: [
        {
          order: 0,
          name: '默认排序'
        },
        {
          order: 1,
          name: '价格由高到低'
        },
        {
          order: 2,
          name: '价格由低到高'
        },
        {
          order: 3,
          name: '最新发布'
        },
        {
          order: 4,
          name: '人气'
        }
      ],
      activeBar: 0,
      wxConfig: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    initWechat () {
      /*wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: '', // 必填，公众号的唯一标识
        timestamp: '', // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '',// 必填，签名
        jsApiList: [] // 必填，需要使用的JS接口列表
      });*/
      wx.config(this.wxConfig)
      wx.checkJsApi({
        jsApiList: ['getLocation'],
        success: function (res) {
          if (res.checkResult.getLocation == false) {
            alert('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！');
            return;
          }
        }
      })
      wx.ready(function(){
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
      });
      wx.error(function(res){
        console.log(res)
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      });

      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
          console.log(res)
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          var speed = res.speed; // 速度，以米/每秒计
          var accuracy = res.accuracy; // 位置精度
        }
      });
    },
    initTaskList () {
      this.param.page = 0
      this.taskList = []
      this.areaShow = false
      this.orderShow = false
      this.onLoad()
    },
    init () {
      // this.getWeChatSign()
      this.getAreaList()
      this.getBannerList()
      this.getLinkList()
    },
    // 获取微信签名
    getWeChatSign () {
      let vm = this
      this.axios.get(this.apiList.apiWeChatSign).then(function (res) {
        if (res.data.code === 1) {
          console.log(res)
          vm.wxConfig = res.data.data
          vm.initWechat()
        }
      })
    },
    // 获取地区列表
    getAreaList () {
      let vm = this
      this.axios.get(this.apiList.apiAreaList).then(function (res) {
        if (res.data.code === 1) {
          vm.areaList = res.data.data
        }
      })
    },
    // 获取轮播图列表
    getBannerList () {
      let vm = this
      this.axios.get(this.apiList.apiBannerList).then(function (res) {
        if (res.data.code === 1) {
          vm.bannerList = res.data.data
        }
      })
    },
    // 获取链接列表
    getLinkList () {
      let vm = this
      this.axios.get(this.apiList.apiLinkList).then(function (res) {
        if (res.data.code === 1) {
          vm.linkList = res.data.data
        }
      })
    },
    onLoad () {
      let vm = this;
      this.param.page++
      this.axios.get(this.apiList.apiTaskList,{
        params: this.param
      }).then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
          // 加载状态结束
          vm.loading = false
          vm.taskList = vm.taskList.concat(res.data.data.data)
          // 数据全部加载完成
          if (vm.taskList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    },
    goUser () {
      console.log('goUser')
      this.$router.push({
        name: 'User'
      })
    },
    showArea () {
      console.log('showArea')
      this.areaShow = true
    },
    confirmArea (res) {
      console.log(res)
      this.county = res[1].name
      this.param.city = res[1].code
      this.initTaskList()
    },
    cancelArea () {
      console.log('cancelArea')
      this.areaShow = false
    },
    showOrder () {
      console.log('showOrder')
      this.orderShow = true
    },
    selectOrder (item) {
      console.log('selectOrder')
      this.order = item.name
      this.param.order = item.order
      this.initTaskList()
    },
    goTaskDetails (task_id) {
      console.log('goTaskDetails')
      this.$router.push({
        name: 'TaskDetails',
        params: { task_id: task_id }
      })
    }
  }
}
</script>
<style>
  .block{
    height: 60px;
  }
</style>

<style scoped>
  .locationRow{
    height: 40px;
    background-color: #3f3f3f;
    color: #fff;
    font-size: 16px;
  }
  .locationRow .location,.locationRow .select,.locationRow .user{
    line-height: 40px;
  }
  .locationRow .location,.locationRow .user{
    float: left;
  }
  .locationRow span{
    float: left;
    margin: 10px 5px 0;
  }
  .bannerRow img{
    width: 100%;
    height: 200px;
  }
  .linkRow{
    margin: 15px 0;
    text-align: center;
  }
  .linkRow img{
    width: 50px;
    height: 50px;
  }
  .orderRow{
    font-size: 14px;
  }
  .orderRow .orderSelect{
    text-align: right;
  }
  .orderRow span{
    margin-right: 5px;
  }
  .taskRow img{
    width: 50px;
    margin-top: 6.5px;
    border-radius: 50%;
  }
  .taskRow .taskContent{
    border-bottom: 1px solid #eaeaea;
  }
  .taskRow h1{
    font-size: 14px;
    word-wrap: break-word;
    word-break: normal;
  }
  .taskRow h2{
    font-size: 13px;
    color: #666;
  }
  .taskRow h2 .money{
    font-size: 14px;
    color: #ff618e;
    margin-right: 20px;
  }
</style>
