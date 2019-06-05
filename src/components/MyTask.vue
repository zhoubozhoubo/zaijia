<template>
  <div class="myTask">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>我的任务</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row class="task_nav">
      <div v-for="(status, statusIndex) in statusList" :key="statusIndex" @click="selectStatus(statusIndex)">
        <van-col class="task_nav_item" :class="{'actice':status.value === currentStatus}">
          <span>{{status.name}}</span>
        </van-col>
      </div>
    </van-row>

    <!--tasklist-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="task_row" v-for="(task, taskIndex) in taskList" :key="taskIndex">
        <van-col span="22" offset="1" class="task_list">
          <van-row>
            <van-col span="4" offset="1" class="img">
              <img src="../../static/images/checkboxed.png" />
            </van-col>
            <van-col span="17" offset="1" class="content">
              <h1>{{task.name}}<span class="number">/次</span><span class="money">￥{{task.money}}</span></h1>
              <h2>已领取{{task.number}}次 通过率{{task.ratio}}%</h2>
            </van-col>
            <div class="clear"></div>
            <van-row class="handle">
              <van-col span="6" offset="1">
                <h1><van-icon name="underway-o"/>1:00:57</h1>
              </van-col>
              <van-col span="6" offset="5">
                <h3 @click="giveUp">放弃任务</h3>
              </van-col>
              <van-col span="6">
                <van-button @click="goOn">继续任务</van-button>
              </van-col>
            </van-row>
          </van-row>
        </van-col>
      </van-row>
    </van-list>

    <van-dialog v-model="giveUpShow"
                title="确定放弃任务吗？"
                show-cancel-button
                @confirm="confirmGiveUp">
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'MyTask',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      currentStatus: 1,
      statusList:[
        {
          name: '执行中',
          value: 1
        },
        {
          name: '审核中',
          value: 2
        },
        {
          name: '已通过',
          value: 3
        },
        {
          name: '未通过',
          value: 4
        },
        {
          name: '已放弃',
          value: 5
        }
      ],
      taskList: [
        {
          name: '兴业信用卡1',
          money: '50.00',
          number: 3,
          ratio: 100,
        },
        {
          name: '兴业信用卡2',
          money: '50.00',
          number: 3,
          ratio: 100,
        },
        {
          name: '兴业信用卡3',
          money: '50.00',
          number: 3,
          ratio: 100,
        }
      ],
      giveUpShow: false
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
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
    selectStatus (index) {
      this.currentStatus = this.statusList[index].value
    },
    giveUp () {
      console.log('giveUp')
      this.giveUpShow = true
    },
    goOn () {
      console.log('goOn')
      this.$router.push({
        name: 'TaskDetails',
        params: { id: 12 }
      })
    },
    confirmGiveUp () {
      console.log('confirmGiveUp')
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
  .clear{
    clear: both;
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
  .myTask h1,h2,h3{
    margin: 0;
  }
  .myTask .task_nav .task_nav_item{
    width: 20%;
    text-align: center;
    padding: 5px 0;
  }
  .myTask .task_nav .actice{
    color: red;
    border-bottom: 2px solid red;
  }
  .myTask .task_nav .task_nav_item span{
    font-size: 14px;
  }
  .myTask .task_row{
    margin-top: 20px;
  }
  .myTask .task_list{
    border: 1px solid #D3D3D3;
    border-radius: 4px;
    padding: 10px 0 0;
    box-shadow: 0 4px 5px #D3D3D3;;
  }
  .myTask .task_list img{
    border-radius: 50%;
  }
  .myTask .task_list .content h1{
    font-size: 16px;
    color: #575757;
  }
  .myTask .task_list .content h1 .money{
    float: right;
    margin-right: 5px;
    color: red;
  }
  .myTask .task_list .content h1 .number{
    float: right;
    margin-top: 5px;
    font-size: 12px;
    color: #808080;
  }
  .myTask .task_list .content h2{
    font-size: 14px;
    color: #696969;
    line-height: 40px;
  }
  .myTask .task_list .handle{
    height: 40px;
    border-top: 1px solid #D3D3D3;
  }
  .myTask .task_list .handle h1{
    font-size: 16px;
    color: #575757;
    line-height: 40px;
  }
  .myTask .task_list .handle h1 .van-icon{
    float: left;
    line-height: 36px;
    margin-right: 5px;
  }
  .myTask .task_list .handle h3{
    font-size: 14px;
    color: #00CED1;
    line-height: 40px;
    text-align: center;
  }
  .myTask .task_list .handle button{
    width: 100%;
    height: 40px;
    padding: 0 10px;
    background-color: #00CED1;
    line-height: 40px;
    border: 1px solid #00CED1;
    border-radius: 0 0 4px 0;
    color: #fff;
  }
</style>
