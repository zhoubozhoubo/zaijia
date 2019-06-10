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
        <img src="../../static/images/fenxiang.jpg"/>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="22" offset="1">
        <van-button>长按图片分享或保存</van-button>
      </van-col>
    </van-row>

  </div>
</template>

<script>
export default {
  name: 'QrCode',
  data () {
    return {
    }
  },
  methods: {
    goBack() {
      this.$router.back()
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
  .qrCode img{
    width: 100%;
  }
  .qrCode button{
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
