<template>
  <div class="qrCode">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>一键分享</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row>
      <van-col span="24">
        <img :src="qr_code"/>
        <!--<img :src="backImg"/>-->
        <!--<img src="../../static/images/fenxiang.jpg"/>-->
        <!-- 创建一个div，并设置id为qrcode -->
          <!--<div id="qrcode" class="qr_code">
            <img :src="avatarurl"/>
          </div>-->
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <van-button>长按图片分享或保存</van-button>
      </van-col>
    </van-row>

  </div>
</template>

<script>
  import { Toast } from 'vant';
  import QRCode from 'qrcodejs2'
export default {
  name: 'QrCode',
  data () {
    return {
      qr_code:'',
      backImg:'',
      avatarurl: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getInfo()
      // this.getWechatQrCode()
    },
    getWechatQrCode () {
      let vm = this
      this.axios.get(this.apiList.apiWechatQrCode).then(function (res) {
        if (res.data.code === 1) {
          console.log(res)
          vm.backImg = res.data.data
        }
      })
    },
    getInfo () {
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
      let vm = this
      this.axios.post(this.apiList.apiInfo,'',{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          vm.qr_code = res.data.data.qr_code
          vm.avatarurl = res.data.data.avatarurl
          console.log(vm.qr_code)
          //生成二维码
          // vm.qrcode()
          Toast.clear()
        }else{
          Toast.fail('获取二维码失败')
        }
      })
    },
    qrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 240,
        height: 240,
        text: this.qr_code, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
        correctLevel: QRCode.CorrectLevel.H
      })
    },
    goBack() {
      this.$router.back()
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
  .qrCode img{
    width: 100%;
  }
  .qrCode button{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    /*margin: 10px 0 20px;*/
    line-height: 40px;
    font-size: 14px;
    background-color: #00bcd4;
    border-color: #00bcd4;
    color: #FFF;
  }
  .qrCode .qr_code{
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -120px;
    width: 240px;
    /*margin: 50px auto!important;*/
  }
  .qrCode .qr_code img{
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -20px;
    width: 40px;
  }
</style>
