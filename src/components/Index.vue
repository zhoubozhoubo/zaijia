<template>
  <div class="index">
    <!--banner-->
    <van-row class="bannerRow">
      <van-col span="24">
        <van-swipe :autoplay="3000" :height="200">
          <van-swipe-item v-for="(banner, bannerIndex) in bannerList" :key="bannerIndex">
            <img :src="banner.src" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
    <!--link-->
    <van-row class="linkRow">
      <van-col span="6" v-for="(link, linkIndex) in linkList" :key="linkIndex">
        <img :src="link.src" />
      </van-col>
    </van-row>
    <!--task-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <!--<van-cell v-for="item in list"
                :key="item"
                :title="item"/>-->
      <van-row class="taskRow" v-for="(task, taskIndex) in taskList" :key="taskIndex">
        <van-col span="3" offset="1">
          <img :src="task.src"/>
        </van-col>
        <van-col span="18" offset="1" class="taskContent">
          <h1>【360借条】新人注册+红包</h1>
          <h2><span class="money">20元/次</span>剩余29次</h2>
        </van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      bannerList: [
        {
          src: 'static/images/banner1.jpg',
          url: ''
        },
        {
          src: 'static/images/banner2.jpg',
          url: ''
        }
      ],
      linkList: [
        {
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          src: 'static/images/checkboxed.png',
          url: ''
        }
      ],
      taskList: [
        {
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          src: 'static/images/checkboxed.png',
          url: ''
        }
      ],
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    goTaskDetails () {
      console.log('goTaskDetails')
      this.$router.push({
        name: 'TaskDetails',
        params: { id: 12 }
      })
    }
  }
}
</script>

<style scoped>
  .bannerRow img{
    width: 100%;
  }
  .linkRow{
    margin: 15px 0;
    text-align: center;
  }
  .taskRow img{
    margin-top: 6.5px;
    border-radius: 50%;
  }
  .taskRow .taskContent{
    border-bottom: 1px solid #eaeaea;
  }
  .taskRow h1{
    font-size: 14px;
  }
  .taskRow h2{
    font-size: 13px;
    color: #666;
  }
  .taskRow h2 .money{
    font-size: 14px;
    color: #ff618e;
    margin-right: 20px;
  }
</style>
