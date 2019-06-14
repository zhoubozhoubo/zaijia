<template>
  <div class="notice">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>最新通知</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <!--notice-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="taskRow" v-for="(notice, noticeIndex) in noticeList" :key="noticeIndex">
        <div @click="readNotice(noticeIndex)">
          <van-col span="22" offset="1">
            <h1 :class="{'not_read':notice.is_read === 0}">{{notice.title}}<span>{{notice.time}}</span></h1>
            <p>{{notice.content}}</p>
          </van-col>
        </div>
      </van-row>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data () {
    return {
      param: {
        page:0
      },
      loading: false,
      finished: false,
      noticeList: []
    }
  },
  created () {
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    onLoad () {
      let vm = this;
      this.param.page++
      this.axios.post(this.apiList.apiNoticeList,this.param,{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          // 加载状态结束
          vm.loading = false
          vm.noticeList = vm.noticeList.concat(res.data.data.data)
          // 数据全部加载完成
          if (vm.noticeList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    },
    readNotice (index) {
      console.log('readNotice')
      this.noticeList[index].is_read = 1;
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
  .notice h1,p{
    margin: 0;
  }
  .notice .taskRow{
    padding: 5px 0;
  }
  .notice .taskRow h1{
    font-size: 18px;
    line-height: 35px;
  }
  .notice .taskRow .not_read{
    color: #FFA500;
  }
  .notice .taskRow h1 span{
    float: right;
    font-size: 12px;
    line-height: 35px;
    color: #808080;
  }
  .notice .taskRow p{
    font-size: 15px;
    color: #696969;
    line-height: 25px;
  }
</style>
