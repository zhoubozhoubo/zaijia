<template>
  <div class="withdraw">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>提现</span>
      </van-col>
      <van-col span="2">
        <van-icon name="bars" size="20px" class="nav_icon withdraw_history" @click="goMyWithdraw"/>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row>
      <van-col span="22" offset="1" class="withdraw_modal">
        <van-row>
          <van-col span="22" offset="1" class="all_money">
            <van-icon name="gold-coin" size="60px" color="#FFA500"/>
            <h1>我的零钱</h1>
            <h2>￥{{userInfo.money}}</h2>
          </van-col>
        </van-row>
        <!--<van-row class="withdraw_way">
          <van-col span="11" offset="1">
            <van-tag type="success" :plain="way === 2" @click="selectWay(1)">
              <span><van-icon size="16px" name="wechat"/>微信提现</span>
            </van-tag>
          </van-col>
          <van-col span="11">
            <van-tag type="primary" :plain="way === 1" @click="selectWay(2)">
              <span><van-icon size="16px" name="alipay"/>支付宝提现</span>
            </van-tag>
          </van-col>
        </van-row>-->
        <van-cell-group>
          <van-field v-model="form.money" placeholder="请输入提现金额">
            <van-icon slot="left-icon" size="16px" name="balance-o" color="#00bcd4"/>
          </van-field>
          <van-field v-model="form.name" type="name" placeholder="请输入身份证名字">
            <van-icon slot="left-icon" size="16px" name="user-o" color="#00bcd4"/>
          </van-field>
        </van-cell-group>
        <van-field v-model="form.account" placeholder="请输入支付宝账号">
          <van-icon slot="left-icon" size="16px" name="edit" color="#00bcd4"/>
        </van-field>
        <van-row class="notice">
          <van-col span="2" offset="1">
            <van-checkbox v-model="checked" checked-color="#00bcd4">
            </van-checkbox>
          </van-col>
          <van-col span="20">
              <p>{{userInfo.withdraw_notice}}</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="22" offset="1">
            <van-button class="withdraw_button" :disabled="!checked" @click="Withdraw">申请提现</van-button>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Toast } from 'vant';
export default {
  name: 'Withdraw',
  data () {
    return {
      userInfo: [],
      form: {
        money: '',
        name: '',
        account: ''
      },
      checked: false
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getInfo()
    },
    goBack() {
      this.$router.back()
    },
    getInfo () {
      let vm = this
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
    goMyWithdraw() {
      this.$router.push({
        name: 'MyWithdraw'
      })
    },
    Withdraw () {
      console.log('Withdraw')
      let vm = this
      if (this.form.money === '' || this.form.money === 0) {
        Toast('请输入提现金额')
        return
      }
      if (this.form.name === '' || this.form.name === 0) {
        Toast('请输入身份证名字')
        return
      }
      if (this.form.account === '' || this.form.account === 0) {
        Toast('请输入支付宝账号')
        return
      }
      this.axios.post(this.apiList.apiAddWithdraw,vm.form,{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          Toast.success(res.data.msg)
          vm.init()
          vm.form = {
            money: '',
            name: '',
            account: ''
          }
        }else{
          Toast.fail(res.data.msg)
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
  .navRow .withdraw_history{
    float: right;
  }
  .navRow .nav_title{
    text-align: center;
  }
  .withdraw_modal {
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px #D3D3D3;
  }
  .withdraw_modal .all_money{
    margin-top: 30px;
    text-align: center;
  }
  .withdraw_modal .all_money h1{
    font-size: 14px;
  }
  .withdraw_modal .all_money{
    font-size: 20px;
  }
  .withdraw_modal .van-field{
    line-height: 30px;
    font-size: 16px;
  }
  .withdraw_modal .withdraw_way{
    text-align: center;
    margin: 20px 0 10px;
  }
  .withdraw_modal .withdraw_way span{
    display: inline-block;
    width: 100%;
    padding: 0;
    font-size: 14px;
    line-height: 30px;
  }
  .withdraw_modal .withdraw_way span span{
    width: auto;
  }
  .withdraw_modal .withdraw_way span span .van-icon{
    float: left;
    line-height: 30px;
    margin-right: 5px;
  }
  .withdraw_modal .notice{
    margin-top: 10px;
  }
  .withdraw_modal .notice p{
    margin: 0;
    font-size: 12px;
    color: #808080;
  }
  .withdraw_modal .withdraw_button{
    width: 100%;
    height: 40px;
    margin: 10px 0 20px;
    line-height: 40px;
    font-size: 14px;
    background-color: #00bcd4;
    border-color: #00bcd4;
    color: #FFF;
  }
</style>
