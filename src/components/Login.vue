<template>
  <div class="login">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>登录</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row>
      <van-col span="22" offset="1" class="login_modal">
        <van-cell-group>
          <van-field v-model="form.phone" placeholder="请输入手机号" />
          <van-field
            v-model="form.password"
            type="password"
            placeholder="请输入密码"/>
        </van-cell-group>
        <van-row>
          <van-col span="22" offset="1">
            <van-button class="login_button" @click="Login">登录</van-button>
          </van-col>
        </van-row>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="6" offset="9">
        <van-button class="go_register" @click="goRegister">注册 ></van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    Login () {
      console.log('Login')
    },
    goRegister () {
      console.log('goRegister')
      this.$router.push({
        name: 'Register'
      })
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
  .login_modal {
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px #D3D3D3;;
  }
  .login_modal .van-field{
    line-height: 30px;
    font-size: 16px;
  }
  .login_modal .login_button{
    width: 100%;
    height: 40px;
    margin: 10px 0;
    line-height: 40px;
    font-size: 14px;
    background-color: #00bcd4;
    border-color: #00bcd4;
    color: #FFF;
  }
  .login .go_register{
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
