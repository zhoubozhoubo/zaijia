<template>
  <div class="user">

    <!--userinfo-->
    <van-row class="user_info">
      <van-col span="4" offset="1">
        <img src="https://wx.qlogo.cn/mmopen/vi_32/h3GVU1Iz7BaOmSSK6NrSBOibq9BzPMo4f4Gaic5pIS95CGMJEMouJQEjjSNPfjqbc11ibicnKJNqicFlLJatGQQNx2g/132"/>
      </van-col>
      <van-col span="17" offset="1">
        <h1>{{userInfo.nickname ? userInfo.nickname : '暂无昵称'}}<van-icon name="share" size="20px" class="logout" @click="logOut"/></h1>
        <h2><span>工号:</span>{{userInfo.code}}</h2>
        <h2><span>职务:</span>合伙人</h2>
        <h2><span>推荐人:</span>{{userInfo.superiorUser ? userInfo.superiorUser.nickname : '惠元财富'}}</h2>
      </van-col>
    </van-row>

    <!--userincome-->
    <van-row class="user_income">
      <van-col span="12" class="income_content">
        <h2>总收入</h2>
        <h1>￥{{userInfo.total_income}}</h1>
      </van-col>
      <van-col span="12" class="income_content">
        <div @click="goMyIncome">
          <h2>个人收入</h2>
          <h1>￥{{userInfo.my_income}}<van-icon name="eye-o" size="20px"/></h1>
        </div>
      </van-col>
      <van-col span="12" class="income_content">
        <div @click="goTeamIncome">
          <h2>团队收入</h2>
          <h1>￥{{userInfo.team_income}}<van-icon name="eye-o" size="20px"/></h1>
        </div>
      </van-col>
      <van-col span="12" class="income_content">
        <van-button @click="goWithdraw">提现</van-button>
      </van-col>
    </van-row>

    <!--handle-->
    <van-row class="handle">
      <van-col span="12" class="handle_content my_qr">
        <div @click="goMyQrCode">
          <van-icon name="gift-card-o" size="30px" color="#FF0000"/>
          <h2>邀请有礼</h2>
        </div>
      </van-col>
      <van-col span="12" class="handle_content my_qr">
        <div @click="showSkill">
          <van-icon name="aim" size="30px" color="#00FFFF"/>
          <h2>邀请技巧</h2>
        </div>
      </van-col>
      <van-col span="12" class="handle_content my_task">
        <div @click="goMyTask">
          <van-icon name="notes-o" size="30px" color="#FFA500"/>
          <h2>我的任务</h2>
        </div>
      </van-col>
      <van-col span="12" class="handle_content my_team">
        <div @click="goMyTeam">
          <van-icon name="friends-o" size="30px" color="#0000FF"/>
          <h2>我的团队</h2>
        </div>
      </van-col>
      <van-col span="12" class="handle_content my_notice">
        <div @click="goMyNotice">
          <van-icon name="chat-o" size="30px" color="#00FF00" :info="userInfo.notice_num ? userInfo.notice_num :''"/>
          <h2>最新通知</h2>
        </div>
      </van-col>
      <van-col span="12" class="handle_content my_notice">
        <div @click="showService">
          <van-icon name="phone-circle-o" size="30px" color="#808000"/>
          <h2>联系客服</h2>
        </div>
      </van-col>
    </van-row>

    <!--otherinfo-->
    <van-row>
      <van-col span="24" class="other_info">
        <!--<h1>慧元财富</h1>-->
        <h2>做任务赚现金，真的可以‘躺着赚’</h2>
      </van-col>
    </van-row>

    <!--skill-->
    <van-popup v-model="skillShow" class="skill">
      <van-row>
        <van-col span="24">
          <h1>邀请技巧</h1>
        </van-col>
        <van-col span="24">
          <p v-for="(item, index) in userInfo.invite" :key="index">{{item}}</p>
        </van-col>
      </van-row>
    </van-popup>

    <!--service-->
    <van-popup v-model="serviceShow" class="service">
      <van-row>
        <van-col span="24">
          <h1>联系客服</h1>
        </van-col>
        <van-col span="24">
          <p v-for="(item, index) in userInfo.customer" :key="index">{{item}}</p>
        </van-col>
      </van-row>
    </van-popup>

    <div class="block"></div>
    <van-tabbar v-model="activeBar">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="new-o" to="News">最新资讯</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="User">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Toast } from 'vant';
export default {
  name: 'User',
  data () {
    return {
      userInfo: [],
      skillShow: false,
      serviceShow: false,
      activeBar: 2
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getInfo()
    },
    getInfo () {
      let vm = this
      if(!localStorage.getItem('token')){
        Toast('请先登录')
        this.$router.push({
          name: 'Login'
        })
        return
        this.axios.post(this.apiList.apiLogin).then(function (res) {
          console.log(res)
          /*if (res.data.code === 1) {
            vm.userInfo = res.data.data
          }*/
        })
        // window.location.href = this.apiList.apiLogin
      }
      this.axios.post(this.apiList.apiInfo,'',{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          vm.userInfo = res.data.data
        }
      })
    },
    logOut () {
      console.log('logOut')
      this.$router.push({
        name: 'Login'
      })
    },
    goMyIncome () {
      console.log('goMyIncome')
      this.$router.push({
        name: 'MyIncome'
      })
    },
    goTeamIncome () {
      console.log('goTeamIncome')
      this.$router.push({
        name: 'TeamIncome'
      })
    },
    goWithdraw () {
      console.log('goWithdraw')
      this.$router.push({
        name: 'Withdraw'
      })
    },
    goMyTask () {
      console.log('goMyTask')
      this.$router.push({
        name: 'MyTask'
      })
    },
    goMyNotice () {
      console.log('goMyNotice')
      this.$router.push({
        name: 'Notice'
      })
    },
    goMyQrCode () {
      console.log('goMyQrCode')
      this.$router.push({
        name: 'QrCode'
      })
    },
    showSkill () {
      console.log('showSkill')
      this.skillShow = true
    },
    showService () {
      console.log('showService')
      this.serviceShow = true
    },
    goMyTeam () {
      console.log('goMyTeam')
      this.$router.push({
        name: 'MyTeam'
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
  .user{
    background-color: #F5F5F5;
  }
  .user h1,h2,p{
    margin: 0;
  }
  .user .user_info{
    height: 145px;
    /*color: #eee;*/
    /*background-color: #555;*/
    /*background-image: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=501549062,1145138333&fm=26&gp=0.jpg");*/
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560156721470&di=a625d21781a90f48dcdf104095ca9403&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20150129%2Fhongsexiqingdonggantupianbeijing_3884592.jpg");
  }
  .user .user_info img{
    width: 60px;
    margin-top: 50px;
    border-radius: 50%;
    /*border: 5px solid #808080;*/
    border: 5px solid #f6adc8;
  }
  .user .user_info h1{
    display: inline-block;
    font-size: 20px;
    color: #FFA500;
    line-height: 40px;
    margin-top: 20px;
  }
  .user .user_info h1 .logout{
    float: right;
    margin-left: 10px;
    line-height: 40px;
    color: #C0C0C0;
  }
  .user .user_info h2{
    font-size: 16px;
    /*color: #C0C0C0;*/
    color: #FFF;
    line-height: 25px;
  }
  .user .user_info h2 span{
    margin-right: 5px;
  }
  .user .user_income{
    height: 155px;
    /*background-color: #555;*/
    color: #eee;
    margin-top: 1px;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560157106571&di=fdb78efa626e913ad65ba352fe9deb33&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F00%2F96%2F16pic_96661_b.jpg");
  }
  .user .user_income .income_content{
    text-align: center;
  }
  .user .user_income h1{
    font-size: 20px;
    color: #FFA500;
    line-height: 30px;
    margin-bottom: 5px;
    display: inline-block;
  }
  .user .user_income h1 .van-icon{
    float: right;
    margin-left: 5px;
    line-height: 28px;
  }
  .user .user_income h2{
    font-size: 16px;
    /*color: #D3D3D3;*/
    color: #FFF;
    line-height: 30px;
    margin-top: 10px;
  }
  .user .user_income button{
    width: 60px;
    height: 30px;
    margin-top: 25px;
    /*background-color: #ff3636;*/
    /*border-color: #ff3636;*/
    background-color: #FFA500;
    border-color: #FFA500;
    color: #fff;
    line-height: 30px;
  }
  .user .handle{
    margin: 10px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    color: #808080;
  }
  .user .handle h2{
    font-size: 16px;
  }
  .user .handle .handle_content{
    padding: 20px 0;
  }
  .user .other_info{
    text-align: center;
    padding: 10px 0;
    margin: 10px 0 50px;
    background-color: #fff;
  }
  .user .other_info h1{
    font-size: 22px;
    color: #000;
  }
  .user .other_info h2{
    font-size: 16px;
    color: #ff3636;
  }
  .user .skill{
    width: 300px;
    border-radius: 5px;
    padding: 20px;
  }
  .user .skill h1{
    margin-bottom: 10px;
    font-size: 20px;
    color: #000;
    text-align: center;
    line-height: 40px;
  }
  .user .skill p{
    font-size: 16px;
    color: #696969;
    line-height: 25px;
  }
  .user .service{
    width: 300px;
    border-radius: 5px;
    padding: 20px;
  }
  .user .service h1{
    margin-bottom: 10px;
    font-size: 20px;
    color: #000;
    text-align: center;
    line-height: 40px;
  }
  .user .service p{
    font-size: 16px;
    color: #696969;
    line-height: 25px;
  }
</style>
