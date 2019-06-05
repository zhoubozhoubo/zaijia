<template>
  <div class="user">

    <!--userinfo-->
    <van-row class="user_info">
      <van-col span="4" offset="1">
        <img src="../../static/images/checkboxed.png"/>
      </van-col>
      <van-col span="17" offset="1">
        <h1>昵称</h1>
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
          <h1>￥0.00</h1>
        </div>
      </van-col>
      <van-col span="12" class="income_content">
        <div @click="goTeamIncome">
          <h2>团队收入</h2>
          <h1>￥0.00</h1>
        </div>
      </van-col>
      <van-col span="12" class="income_content">
        <van-button>提现</van-button>
      </van-col>
    </van-row>

    <!--handle-->
    <van-row class="handle">
      <van-col span="12" class="handle_content my_task">
        <div @click="goMyTask">
          <van-icon name="notes-o" size="30px" color="#FFA500"/>
          <h2>我的任务</h2>
        </div>
      </van-col>
      <van-col span="12" class="handle_content my_notice">
        <div @click="goMyNotice">
          <van-icon name="chat-o" size="30px" color="#00FF00" info="9"/>
          <h2>最新通知</h2>
        </div>
      </van-col>
      <van-col span="12" class="handle_content my_qr">
        <div @click="goMyQr">
          <van-icon name="qr" size="30px" color="#000000"/>
          <h2>一键分享</h2>
        </div>
      </van-col>
      <van-col span="12" class="handle_content my_team">
        <div @click="goMyTeam">
          <van-icon name="friends-o" size="30px" color="#0000FF"/>
          <h2>我的团队</h2>
        </div>
      </van-col>
    </van-row>

    <!--otherinfo-->
    <van-row>
      <van-col span="24" class="other_info">
        <h1>慧元财富</h1>
        <h2>客服热线：123123123</h2>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
    }
  },
  methods: {
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
    goMyQr () {
      console.log('goMyQr')
      this.$router.push({
        name: 'MyQr'
      })
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
  .user h1,h2{
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
    font-size: 20px;
    color: #FFA500;
    line-height: 40px;
    margin-top: 20px;
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
    margin: 40px 0 60px;
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
</style>
