<template>
  <div class="news">

    <!--news-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="newsRow" v-for="(news, newsIndex) in newsList" :key="newsIndex">
        <div @click="goNewsDetails(news.news_id)">
          <van-col span="6" offset="1">
            <img :src="news.newsType.img"/>
          </van-col>
          <van-col span="15" offset="1" class="newsContent">
            <h1>{{news.title}}</h1>
            <h2>2019-06-18<span class="number">123</span><van-icon name="eye-o" size="16px"/></h2>
            <p>新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介</p>
          </van-col>
        </div>
      </van-row>
    </van-list>


    <div class="block"></div>
    <van-tabbar v-model="activeBar">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="new-o" to="News">最新资讯</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="User">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      activeBar: 1,
      loading: false,
      finished: false,
      newsList: [
        {
          new_id: 1,
          title: '新闻标题',
          newsType: {
            img: 'static/images/banner1.jpg'
          }
        },
        {
          new_id: 1,
          title: '新闻标题',
          newsType: {
            img: 'static/images/banner1.jpg'
          }
        }
      ]
    }
  },
  created () {
  },
  methods: {
    goNewsDetails (id) {
      console.log('goNewsDetails')
      this.$router.push({
        name: 'NewsDetails',
        params: { new_id: id }
      })
    },
    onLoad () {

    }
  }
}
</script>
<style>
  .block{
    height: 60px;
  }
</style>
<style scoped>
  .news h1,h2,p{
    margin: 0;
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
  }
  .news .newsRow p{
    font-size: 16px;
    color: #666;
  }
</style>
