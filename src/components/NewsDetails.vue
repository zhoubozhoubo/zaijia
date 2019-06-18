<template>
  <div class="newsDetails">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>新闻详情</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row class="newsContent">
      <van-col span="22" offset="1">
        <h1>新闻标题</h1>
        <h2>2019-06-18<span class="number">123</span><van-icon name="eye-o" size="16px"/></h2>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'NewsDetails',
  data () {
    return {
      new_id: this.$route.params.new_id,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getNewsDetails()
    },
    goBack() {
      this.$router.back()
    },
    getNewsDetails() {
      let vm = this
    }
  }
}
</script>
<style>
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
  .newsDetails h1,h2,p{
    margin: 0;
  }
  .newsDetails h1{
    text-align: center;
    line-height: 50px;
  }
  .newsDetails h2{
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #666;
  }
  .newsDetails h2 .van-icon{
    float: right;
    margin-left: 10px;
    line-height: 30px;
  }
  .newsDetails h2 .number{
    float: right;
    line-height: 30px;
  }
</style>
