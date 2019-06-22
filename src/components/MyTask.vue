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
        <van-col class="task_nav_item" :class="{'actice':status.value === param.status}">
          <span>{{status.name}}</span>
        </van-col>
      </div>
    </van-row>
    <div class="bar_block"></div>

    <!--tasklist-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="task_row" v-for="(myTask, myTaskIndex) in taskList" :key="myTaskIndex">
        <van-col span="22" offset="1" class="task_list">
          <van-row>
            <div @click="taskDetails(myTask.task_id)">
              <van-col span="4" offset="1" class="img">
                <img :src="myTask.img" />
              </van-col>
              <van-col span="17" offset="1" class="content">
                <h1>
                  <span class="title">{{myTask.task.title}}</span>
                  <span class="number">/次</span>
                  <span class="money">￥{{myTask.task.money}}</span>
                </h1>
                <h2>已领取{{myTask.task.have_number}}次 通过率{{myTask.ratio}}%</h2>
              </van-col>
            </div>

            <div class="clear"></div>
            <div style="height: 10px;"></div>
            <van-row class="handle" v-if="myTask.status == 0">
              <van-col span="8" offset="1">
                <h1><van-icon name="underway-o"/>{{myTask.count_time}}</h1>
              </van-col>
              <van-col span="6" offset="3">
                <h3 @click="giveUp(myTask.id)">放弃任务</h3>
              </van-col>
              <van-col span="6">
                <van-button @click="goOn(myTask.id)">继续任务</van-button>
              </van-col>
            </van-row>
            <van-row class="handle" v-else-if="myTask.status == 1">
              <van-col span="8" offset="1">
                <h1><van-icon name="underway-o"/>{{myTask.count_time}}</h1>
              </van-col>
              <van-col span="6" offset="9">
                <h3>审核中</h3>
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
  import { Toast } from 'vant';
export default {
  name: 'MyTask',
  data () {
    return {
      param: {
        status: 0,
        page:0
      },
      id: '',
      loading: false,
      finished: false,
      statusList:[
        {
          name: '执行中',
          value: 0
        },
        {
          name: '审核中',
          value: 1
        },
        {
          name: '已通过',
          value: 2
        },
        {
          name: '未通过',
          value: 3
        },
        {
          name: '已放弃',
          value: 4
        }
      ],
      taskList: [],
      giveUpShow: false
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    initTaskList () {
      let vm = this
      for (let i=0;i<vm.taskList.length;i++) {
        clearInterval(vm.taskList[i].timer)
      }
      this.param.page = 0
      this.finished = false
      this.taskList = []
    },
    onLoad () {
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
      let vm = this;
      this.param.page++
      this.axios.post(this.apiList.apiUserTaskList,this.param,{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          // 加载状态结束
          vm.loading = false
          vm.taskList = vm.taskList.concat(res.data.data.data)
          Toast.clear()

          // TODO 倒计时生成
          for (let i=0;i<vm.taskList.length;i++) {
            if(vm.taskList[i].surplus_time>0){
              vm.resetTime(vm.taskList[i].surplus_time,i)
            }
          }


          // 数据全部加载完成
          if (vm.taskList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    },
    getTaskDetails (index) {
      let vm = this
      this.axios.post(vm.apiList.apiUserTaskDetails,{id: vm.taskList[index].id},{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          console.log(res)
          vm.taskList.splice(index, 1)
          /*vm.taskDetails = res.data.data
          // 当状态为执行中、审核中时倒计时
          if (vm.taskDetails.status == 0 || vm.taskDetails.status == 1) {
            if (vm.taskDetails.surplus_time > 0) {
              vm.resetTime(vm.taskDetails.surplus_time)
            }else{
              vm.getTaskDetails()
            }
          }*/
        }
      })
    },
    resetTime(hour,i) {
      let vm = this
      this.taskList[i].timer = setInterval(() => {
        hour -= 1000;
        let h = Math.floor(hour / (1000 * 60 * 60));
        let m = Math.floor((hour % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((hour % (1000 * 60)) / 1000);
        if (h == 0 && m == 0 && s == 0) {
          clearInterval(vm.taskList[i].timer);
          vm.getTaskDetails(i)
          /*if(vm.taskDetails.status == 0){
            vm.taskDetails.status = 4
          }else if(vm.taskDetails.status == 1){
            vm.taskDetails.status = 2
          }
          vm.axios.post(vm.apiList.apiTaskDetails, {task_id: vm.task_id}, {
            headers: {
              'token': localStorage.getItem('token')
            }
          }).then(function (res) {
            if (res.data.code === 1) {

            }
          })*/
        }
        // if (h < 10) {
        //   h = "0" + h;
        // }
        if (m < 10) {
          m = "0" + m;
        }
        if (s < 10) {
          s = "0" + s;
        }
        vm.taskList[i].count_time = h + ":" + m + ":" + s;
      }, 1000);
    },
    selectStatus (index) {
      this.param.status = this.statusList[index].value
      this.initTaskList()
    },
    giveUp (id) {
      console.log('giveUp')
      this.id = id
      this.giveUpShow = true
    },
    goOn (id) {
      console.log('goOn')
      this.$router.push({
        name: 'MyTaskDetails',
        params: { id: id }
      })
    },
    taskDetails (task_id) {
      this.$router.push({
        name: 'TaskDetails',
        params: { task_id: task_id }
      })
    },
    confirmGiveUp () {
      let vm = this
      console.log('confirmGiveUp')
      this.axios.post(this.apiList.apiDelTask,{id:vm.id},{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          vm.initTaskList()
        }
      })
    }
  },
  created () {
  },
  onHide:function() {
    let vm = this
    for (let i=0;i<vm.taskList.length;i++) {
        clearInterval(vm.taskList[i].timer)
    }
  },
  onUnload(){
    let vm = this
    for (let i=0;i<vm.taskList.length;i++) {
      clearInterval(vm.taskList[i].timer)
    }
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
  .myTask .task_nav {
    width: 100%;
    height: 31px;
    position: fixed;
    background-color: #FFFFFF;
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
    width: 60px;
    border-radius: 50%;
  }
  .myTask .task_list .content h1{
    font-size: 16px;
    color: #575757;
  }
  .myTask .task_list .content h1 .title{
    float: left;
    width: 60%;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
    clear: both;
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
