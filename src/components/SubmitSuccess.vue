<template>
  <div class="submitSuccess">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="cross" size="20px" class="nav_icon" @click="goIndex"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>提交成功</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row>
      <van-col span="20" offset="2" class="success_img">
        <img src="../../static/images/checkboxed.png"/>
        <p>提交成功</p>
        <p>请耐心等待后台审核，如超时，系统将自动通过</p>
      </van-col>
    </van-row>

  </div>
</template>

<script>
export default {
  name: 'SubmitSuccess',
  data () {
    return {
    }
  },
  methods: {
    goIndex () {
      this.$router.push({
        name: 'Index'
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
    z-index: 9999;
  }
  .navRow .nav_icon{
    float: left;
    line-height: 40px;
  }
  .navRow .nav_title{
    text-align: center;
  }
  .submitSuccess .success_img{
    margin-top: 80px;
    text-align: center;
  }
  .submitSuccess .success_img img{
    border-radius: 50%;
  }
</style>
