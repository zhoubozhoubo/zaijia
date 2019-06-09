<template>
  <div class="myWithdraw">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>提现记录</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <!--withdrawlist-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="withdraw_list" v-for="(withdraw, withdrawIndex) in withdrawList" :key="withdrawIndex">
        <van-col span="16" offset="1">
          <h1 v-if="withdraw.way === 1">提现到<span class="wechat">微信账号：</span>"{{withdraw.account}}"</h1>
          <h1 v-if="withdraw.way === 2">提现到<span class="alipay">支付宝账号：</span>"{{withdraw.account}}"</h1>
          <h2>{{withdraw.time}}</h2>
        </van-col>
        <van-col span="5" offset="1" class="money">
          <span>-{{withdraw.money}}</span>
        </van-col>
      </van-row>
    </van-list>

  </div>
</template>

<script>
export default {
  name: 'MyWithdraw',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      withdrawList:[
        {
          way: 1,
          account: 'fqwg34t4fwe',
          time: '2019-06-05 12:34:45',
          money: '23.12'
        },
        {
          way: 2,
          account: 'fqwg34t4fwe',
          time: '2019-06-05 12:34:45',
          money: '23.12'
        },
        {
          way: 2,
          account: 'fqwg34t4fwe',
          time: '2019-06-05 12:34:45',
          money: '23.12'
        },
        {
          way: 1,
          account: 'fqwg34t4fwe',
          time: '2019-06-05 12:34:45',
          money: '23.12'
        }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  },
  created () {
  }
}
</script>
<style>
  .nav_block{
    height: 40px;
  }
</style>
<style scoped>
  .navRow{
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: #3f3f3f;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
  }
  .navRow .nav_icon{
    float: left;
    line-height: 40px;
  }
  .navRow .nav_title{
    text-align: center;
  }
  .myWithdraw h1,h2{
    margin: 0;
  }
  .myWithdraw .withdraw_list{
    padding: 10px 0;
    border-bottom: 1px solid #F5F5F5;
  }
  .myWithdraw .withdraw_list h1{
    font-size: 16px;
    line-height: 30px;
    color: #808080;
  }
  .myWithdraw .withdraw_list h1 .wechat{
    color: #62b900;
  }
  .myWithdraw .withdraw_list h1 .alipay{
    color: #1989fa;
  }
  .myWithdraw .withdraw_list h2{
    font-size: 12px;
    line-height: 20px;
    color: #808080;
  }
  .myWithdraw .withdraw_list .money{
    font-size: 16px;
    color: #FFA500;
    line-height: 30px;
    text-align: right;
  }
</style>
