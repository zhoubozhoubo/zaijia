<template>
  <div class="news">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>{{param.news_type_id == 1 ? '新人须知':'最新资讯'}}</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <!--<van-row class="news_nav">
      <div v-for="(newsType, newsTypeIndex) in newsTypeList" :key="newsTypeIndex" @click="selectNewsType(newsTypeIndex)">
        <van-col class="news_nav_item" :class="{'actice':newsType.news_type_id == param.news_type_id}">
          <span>{{newsType.name}}</span>
        </van-col>
      </div>
    </van-row>
    <div class="bar_block"></div>-->

    <!--news-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="newsRow" v-for="(news, newsIndex) in newsList" :key="newsIndex">
        <div @click="goNewsDetails(news.news_id)">
          <van-col span="6" offset="1">
            <img :src="news.img"/>
          </van-col>
          <van-col span="15" offset="1" class="newsContent">
            <h1>{{news.title}}</h1>
            <h2>{{news.gmt_create}}<span class="number">{{news.number}}</span><van-icon name="eye-o" size="16px"/></h2>
            <p>新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介</p>
          </van-col>
        </div>
      </van-row>
    </van-list>


    <div class="block"></div>
    <!--<van-tabbar v-model="activeBar" active-color="#ed4014">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="new-o" to="News">最新资讯</van-tabbar-item>
      &lt;!&ndash;<van-tabbar-item icon="manager-o" to="User">个人中心</van-tabbar-item>&ndash;&gt;
    </van-tabbar>-->
  </div>
</template>

<script>
  import { Toast } from 'vant';
export default {
  name: 'News',
  data () {
    return {
      param: {
        news_type_id: this.$route.params.news_type_id,
        page:0
      },
      activeBar: 1,
      loading: false,
      finished: false,
      newsTypeList:[],
      newsList: []
    }
  },
  created () {
    // this.getNewsTypeList()
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    initNewsList () {
      this.param.page = 0
      this.finished = false
      this.newsList = []
    },
    getNewsTypeList () {
      let vm = this;
      this.axios.get(this.apiList.apiNewsTypeList).then(function (res) {
        if (res.data.code === 1) {
          vm.newsTypeList = res.data.data
        }
      })
    },
    onLoad () {
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
      let vm = this;
      this.param.page++
      this.axios.get(this.apiList.apiNewsList,{
        params: this.param
      }).then(function (res) {
        if (res.data.code === 1) {
          // 加载状态结束
          vm.loading = false
          vm.newsList = vm.newsList.concat(res.data.data.data)
          Toast.clear()

          // 数据全部加载完成
          if (vm.newsList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    },
    goNewsDetails (id) {
      console.log('goNewsDetails')
      this.$router.push({
        name: 'NewsDetails',
        params: { news_id: id }
      })
    },
    /*selectNewsType (index) {
      this.param.news_type_id = this.newsTypeList[index].news_type_id
      this.initNewsList()
    }*/
  }
}
</script>
<style>
  .nav_block{
    height: 40px;
  }
  .bar_block{
    height: 31px;
  }
  .block{
    height: 60px;
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
  .news h1,h2,p{
    margin: 0;
  }
  .news .news_nav {
    width: 100%;
    height: 31px;
    position: fixed;
    background-color: #FFFFFF;
  }
  .news .news_nav .news_nav_item{
    width: 20%;
    text-align: center;
    padding: 5px 0;
  }
  .news .news_nav .actice{
    color: red;
    border-bottom: 2px solid red;
  }
  .news .news_nav .news_nav_item span{
    font-size: 14px;
  }
  .news .newsRow{
    height: 110px;
    padding: 10px 0;
    border-bottom: 1px solid #eaeaea;
  }
  .news .newsRow img{
    width: 100%;
    height: 110px;
    float: left;
    /*padding: 10px 0;*/
  }
  .news .newsRow h1{
    font-size: 20px;
    /*margin-top: 10px;*/
  }
  .news .newsRow h2{
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #666;
  }
  .news .newsRow h2 .van-icon{
    float: right;
    margin-left: 10px;
    line-height: 30px;
  }
  .news .newsRow h2 .number{
    float: right;
    line-height: 30px;
    margin-left: 5px;
  }
  .news .newsRow p{
    font-size: 16px;
    color: #666;
  }
</style>
