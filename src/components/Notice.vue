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
        <div>
          <van-col span="22" offset="1">
            <h1 :class="{'not_read':notice.is_read == 0}">
              <span class="title">{{notice.title}}</span>
              <van-tag color="#FFA500" plain v-if="notice.is_read == 0" class="status" @click="readNotice(notice.id, noticeIndex)">标记已读</van-tag>
              <van-tag plain v-else class="status">已读</van-tag>
              <span class="time">{{notice.gmt_create}}</span></h1>
            <p>{{notice.content}}</p>
          </van-col>
        </div>
      </van-row>
    </van-list>
  </div>
</template>

<script>
  import { Toast } from 'vant';
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
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
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
          Toast.clear()
          // 数据全部加载完成
          if (vm.noticeList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    },
    readNotice (id, index) {
      console.log('readNotice')
      let vm = this;
      this.axios.post(this.apiList.apiReadNotice,{id: id},{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          vm.noticeList[index].is_read = 1;
          Toast('成功已读')
        }else{
          Toast('操作失败')
        }
      })
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
    z-index: 9999;
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
    position: relative;
    padding: 5px 0;
  }
  .notice .taskRow h1{
    font-size: 18px;
    line-height: 35px;
  }
  .notice .taskRow .not_read{
    color: #FFA500;
  }
  .notice .taskRow h1 .title{
    float: left;
    width: 70%;
  }
  .notice .taskRow h1 .status{
    position: absolute;
    right: 5%;
    top: 5px;
    /*float: left;*/
    /*margin: 8px 0 0 10px;*/
  }
  .notice .taskRow h1 .time{
    position: absolute;
    right: 5%;
    top: 20px;
    /*float: right;*/
    /*width: 200px;*/
    font-size: 12px;
    line-height: 20px;
    color: #808080;
  }
  .notice .taskRow p{
    clear: both;
    font-size: 15px;
    color: #696969;
    line-height: 25px;
  }
</style>
