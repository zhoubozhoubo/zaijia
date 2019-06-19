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
        <h1>{{newsDetails.title}}</h1>
        <h2>{{newsDetails.gmt_create}}<span class="number">{{newsDetails.number}}</span><van-icon name="eye-o" size="16px"/></h2>
        <div class="content" v-html="newsDetails.content"></div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Toast } from 'vant';
export default {
  name: 'NewsDetails',
  data () {
    return {
      news_id: this.$route.params.news_id,
      newsDetails: []
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
    getNewsDetails () {
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
      let vm = this
      this.axios.get(this.apiList.apiNewsDetails,{
        params: {news_id: vm.news_id}
      }).then(function (res) {
        if (res.data.code === 1) {
          vm.newsDetails = res.data.data
          Toast.clear()
        }
      })
    },
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
  .newsDetails h1,h2,p{
    margin: 0;
  }
  .newsDetails h1{
    font-size: 22px;
    text-align: center;
    line-height: 50px;
    margin-top: 10px;
  }
  .newsDetails h2{
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #666;
  }
  .newsDetails h2 .van-icon{
    float: right;
    margin-right: 10px;
    line-height: 30px;
  }
  .newsDetails h2 .number{
    float: right;
    line-height: 30px;
  }
  .newsDetails .newsContent .content img{
    width: 100%!important;
  }
</style>
