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
          <h1 v-if="withdraw.withdraw_way_id == 2">
            <span class="wechat">{{withdraw.withdrawType.name}}：</span>"{{withdraw.account}}"
            <van-tag plain type="primary" v-if="withdraw.status == 0">提现中</van-tag>
            <van-tag plain type="success" v-else-if="withdraw.status == 1">已通过</van-tag>
            <van-tag plain type="danger" v-else-if="withdraw.status == 2">未通过</van-tag>
          </h1>
          <h1 v-if="withdraw.withdraw_way_id == 1">
            <span class="alipay">{{withdraw.withdrawType.name}}：</span>"{{withdraw.account}}"
            <van-tag plain type="primary" v-if="withdraw.status == 0">提现中</van-tag>
            <van-tag plain type="success" v-else-if="withdraw.status == 1">已通过</van-tag>
            <van-tag plain type="danger" v-else-if="withdraw.status == 2">未通过</van-tag>
          </h1>
          <h2>{{withdraw.gmt_create}}</h2>
        </van-col>
        <van-col span="5" offset="1" class="money">
          <span>-{{withdraw.money}}</span>
        </van-col>
      </van-row>
    </van-list>

  </div>
</template>

<script>
  import { Toast } from 'vant';
export default {
  name: 'MyWithdraw',
  data () {
    return {
      param: {
        page:0
      },
      loading: false,
      finished: false,
      withdrawList:[]
    }
  },
  created () {
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    onLoad () {
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
      let vm = this;
      this.param.page++
      this.axios.post(this.apiList.apiWithdrawList,this.param,{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          // 加载状态结束
          vm.loading = false
          vm.withdrawList = vm.withdrawList.concat(res.data.data.data)
          Toast.clear()
          // 数据全部加载完成
          if (vm.withdrawList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    }
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
