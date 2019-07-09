<template>
  <div class="register">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>注册</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row>
      <van-col span="22" offset="1" class="register_modal">
        <van-cell-group>
          <van-field v-model="form.phone" placeholder="请输入手机号">
            <van-icon slot="left-icon" size="16px" name="phone-o" color="#00bcd4"/>
          </van-field>
          <van-field v-model="form.code" clearable placeholder="请输入短信验证码">
            <van-icon slot="left-icon" size="16px" name="comment-o" color="#00bcd4"/>
            <van-button slot="button" size="small" class="get_code" @click="getCode" v-if="!codeStatus">获取验证码</van-button>
            <van-button slot="button" size="small" class="get_code" disabled v-else>重新获取({{countTime}})</van-button>
          </van-field>
          <van-field v-model="form.password" type="password" placeholder="请输入密码">
            <van-icon slot="left-icon" size="16px" name="closed-eye" color="#00bcd4"/>
          </van-field>
        </van-cell-group>
        <van-row>
          <van-col span="22" offset="1">
            <van-button class="register_button" @click="Register">注册</van-button>
          </van-col>
        </van-row>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="6" offset="9">
        <van-button class="go_login" @click="goLogin">登录 ></van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
  import { Toast } from 'vant';
export default {
  name: 'Register',
  data () {
    return {
      form: {
        phone: '',
        code: '',
        password: '',
        invitationCode: this.$route.query.invitationCode
      },
      codeStatus: false,
      countTime: 60,
      timer: ''
    }
  },
  created () {
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    getCode () {
      let vm = this
      this.axios.post(this.apiList.apiSendCode,{
        phone: vm.form.phone
      }).then(function (res) {
        if (res.data.code === 1) {
          Toast.success(res.data.msg)
          vm.countTime = 60
          vm.countDown()
          vm.form.code = res.data.data
        }else{
          Toast(res.data.msg)
        }
      })
    },
    Register () {
      let vm = this
      this.axios.post(this.apiList.apiRegister,vm.form).then(function (res) {
        if (res.data.code === 1) {
          Toast.success(res.data.msg)
          vm.$router.push({
            name: 'Login'
          })
        }else{
          Toast(res.data.msg)
        }
      })
    },
    goLogin () {
      console.log('goLogin')
      this.$router.push({
        name: 'Login'
      })
    },
    countDown() {
      this.codeStatus = true
      this.timer = setInterval(() => {
        this.countTime --
        if (this.countTime == 0) {
          clearInterval(this.timer);
          this.codeStatus = false
        }
        if(this.countTime<10){
          this.countTime="0"+this.countTime;
        }
      }, 1000);
    }
  },
  onHide:function() {
    clearInterval(this.timer);
  },
  onUnload(){
    clearInterval(this.timer);
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
    z-index: 9999;
  }
  .navRow .nav_icon{
    float: left;
    line-height: 40px;
  }
  .navRow .nav_title{
    text-align: center;
  }
  .register_modal {
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px #D3D3D3;;
  }
  .register_modal .van-field{
    line-height: 30px;
    font-size: 16px;
  }
  .register_modal .get_code{
    height: 30px;
    font-size: 14px;
    background-color: #00bcd4;
    border-color: #00bcd4;
    color: #FFF;
  }
  .register_modal .register_button{
    width: 100%;
    height: 40px;
    margin: 10px 0;
    line-height: 40px;
    font-size: 14px;
    background-color: #00bcd4;
    border-color: #00bcd4;
    color: #FFF;
  }
  .register .go_login{
    width: 100%;
    height: 40px;
    margin: 60px 0;
    line-height: 40px;
    font-size: 14px;
    background-color: #fa7a6e;
    border-color: #fa7a6e;
    color: #FFF;
  }
</style>
