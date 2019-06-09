<template>
  <div class="user">

    <!--userinfo-->
    <van-row class="user_info">
      <van-col span="4" offset="1">
        <img src="../../static/images/checkboxed.png"/>
      </van-col>
      <van-col span="17" offset="1">
        <h1>昵称<van-icon name="share" size="20px" class="logout" @click="logOut"/></h1>
        <h2><span>工号:</span>12351234</h2>
        <h2><span>推荐人:</span>慧元财富</h2>
      </van-col>
    </van-row>

    <!--userincome-->
    <van-row class="user_income">
      <van-col span="12" class="income_content">
        <h2>总收入</h2>
        <h1>￥0.00</h1>
      </van-col>
      <van-col span="12" class="income_content">
        <div @click="goMyIncome">
          <h2>个人收入</h2>
          <h1>￥0.00<van-icon name="eye-o" size="20px"/></h1>
        </div>
      </van-col>
      <van-col span="12" class="income_content">
        <div @click="goTeamIncome">
          <h2>团队收入</h2>
          <h1>￥0.00<van-icon name="eye-o" size="20px"/></h1>
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
          <van-icon name="chat-o" size="30px" color="#00FF00" info="9"/>
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
        <h1>慧元财富</h1>
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
          <p>1. 自己先做任务赚钱，并提现，然后分享赚钱乐趣；</p>
          <p>2. 私下邀请家人、朋友、同学、同事加入赚钱行列，成为你的队员；</p>
          <p>3. 分享到3个以上微信群，每天坚持发朋友圈，成功邀请几率提升200%；</p>
          <p>4. 告诉好友：在家就能兼职赚钱，推广拿高额团队佣金；</p>
          <p>5. 合伙人永享一级队员22%的团队佣金，永享二级队员3%的团队佣金;</p>
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
          <p>客服 QQ：2332155808</p>
          <p>合作邮箱：2332155808@qq.com</p>
        </van-col>
      </van-row>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      skillShow: false,
      serviceShow: false
    }
  },
  methods: {
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
  },
  created () {
  }
}
</script>
<style>
</style>
<style scoped>
  .user{
    background-color: #F5F5F5;
  }
  .user h1,h2,p{
    margin: 0;
  }
  .user .user_info{
    height: 130px;
    background-color: #555;
    color: #eee;
  }
  .user .user_info img{
    margin-top: 40px;
    border-radius: 50%;
    border: 5px solid #808080;
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
    color: #C0C0C0;
    line-height: 30px;
  }
  .user .user_info h2 span{
    margin-right: 5px;
  }
  .user .user_income{
    height: 155px;
    background-color: #555;
    color: #eee;
    margin-top: 1px;
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
    color: #D3D3D3;
    line-height: 30px;
    margin-top: 10px;
  }
  .user .user_income button{
    width: 60px;
    height: 30px;
    margin-top: 25px;
    background-color: #ff3636;
    border-color: #ff3636;
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
    margin: 60px 0 100px;
    background-color: #fff;
  }
  .user .other_info h1{
    font-size: 22px;
    color: #000;
  }
  .user .other_info h2{
    font-size: 14px;
    color: #808080;
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
