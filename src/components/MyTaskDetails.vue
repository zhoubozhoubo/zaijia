<template>
  <div class="taskDetails">

    <van-row class="navRow">
      <van-col span="2" offset="1">
          <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>任务详情</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row>
      <van-col span="22" offset="1">
        <van-row>
          <van-col span="18" class="title">
            {{taskDetails.task.title}}
          </van-col>
          <van-col span="6" class="money">
            ￥{{taskDetails.task.money}}<span>/次</span>
          </van-col>

          <!--info-->
          <van-col span="6" class="label_title">
            截止日期：
          </van-col>
          <van-col span="18" class="label_content">
            {{taskDetails.task.end_date}}
          </van-col>
          <van-col span="6" class="label_title">
            审核时长：
          </van-col>
          <van-col span="18" class="label_content">
            {{taskDetails.task.check_duration}}小时
          </van-col>
          <van-col span="6" class="label_title">
            完成时间：
          </van-col>
          <van-col span="18" class="label_content">
            {{taskDetails.task.finish_duration}}小时
          </van-col>
          <van-col span="6" class="label_title">
            重复执行：
          </van-col>
          <van-col span="18" class="label_content">
            {{taskDetails.task.is_repeat === 1 ? '是': '否'}}
          </van-col>

          <!--step-->
          <van-col span="24" class="label_title">
            任务说明
          </van-col>
          <template v-for="(stepItem, stepIndex) in taskDetails.task.step">
            <van-col span="1" class="label_content text_content">
             {{stepIndex+1}}、
            </van-col>
            <van-col span="23" class="label_content text_content">
              {{stepItem}}
            </van-col>
          </template>



          <!--link-->
          <van-col span="23" offset="1" v-if="taskDetails.task.link">
            <a :href="taskDetails.link" class="link_button">打开链接</a>
          </van-col>

          <!--img-->
          <van-col span="6" class="task_img" v-for="(taskImg, taskImgIndex) in taskDetails.task.show_img">
            <img :src="taskImg" />
          </van-col>

          <van-col span="24" class="label_title">
            提交说明
          </van-col>
          <van-col span="1" class="label_content text_content">
          </van-col>
          <van-col span="23" class="label_content text_content">
            {{taskDetails.submit_notice}}
          </van-col>

          <!--img-->
          <van-col span="6" class="task_img" v-for="(img, imgIndex) in taskDetails.task.submit_img">
            <img :src="img" />
          </van-col>

          <van-col span="24" class="label_title">
            注意事项
          </van-col>
          <van-col span="1" class="label_content text_content red_content">
          </van-col>
          <van-col span="23" class="label_content text_content red_content">
            {{taskDetails.task.take_care}}
          </van-col>

        </van-row>
      </van-col>
    </van-row>
    <div class="block"></div>

    <!--receiveTask-->
    <van-row class="receive_row">
      <van-col span="22" offset="1">
        <!--<van-button class="receive_task" v-if="taskDetails.can_receive === 1" @click="receiveTask">领取任务</van-button>-->
        <van-button class="submit_data" v-if="taskDetails.status === 0" @click="submitData">提交材料
          <span class="time">
            <van-icon name="underway-o" class="clock"/>{{countTime}}
          </span>
        </van-button>
        <van-button class="submit_data" v-if="taskDetails.status === 1">待审核
          <span class="time">
            <van-icon name="underway-o" class="clock"/>{{countTime}}
          </span>
        </van-button>
        <!--<van-button class="submit_data" v-if="taskDetails.can_receive === 0 && taskDetails.status === 1">待审核</van-button>-->
        <van-button class="submit_data" v-if="taskDetails.status === 2">已通过</van-button>
        <van-button class="submit_data" v-if="taskDetails.status === 3">未通过</van-button>
        <van-button class="submit_data" v-if="taskDetails.status === 4">已放弃</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Toast } from 'vant';
export default {
  name: 'MyTaskDetails',
  data () {
    return {
      id: this.$route.params.id,
      status: 0,
      taskDetails:[],
      countTime: '',
      timer: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    init () {
      this.getTaskDetails()
    },
    goBack () {
      this.$router.back()
    },
    getTaskDetails () {
      let vm = this
      this.axios.post(this.apiList.apiUserTaskDetails,{id: vm.id},{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          vm.taskDetails = res.data.data
          // 当状态为执行中、审核中时倒计时
          if(vm.taskDetails.status === 0 || vm.taskDetails.status === 1){
            if(vm.taskDetails.surplus_time>0){
              vm.resetTime(vm.taskDetails.surplus_time)
            }
          }
        }
      })
    },
    // 提交材料
    submitData () {
      console.log('submitData')
      this.$router.push({
        name: 'TaskSubmit',
        params: { id: this.id }
      })
    },
    resetTime(hour) {
      let vm = this
      this.timer = setInterval(() => {
        hour -= 1000;
        let h = Math.floor(hour / (1000 * 60 * 60));
        let m = Math.floor((hour % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((hour % (1000 * 60)) / 1000);
        if (h == 0 && m == 0 && s == 0) {
          clearInterval(vm.timer);
          if(vm.taskDetails.status == 0){
            vm.taskDetails.status = 4
          }else if(vm.taskDetails.status == 1){
            vm.taskDetails.status = 2
          }
          this.axios.post(this.apiList.apiTaskDetails, {task_id: vm.task_id}, {
            headers: {
              'token': localStorage.getItem('token')
            }
          }).then(function (res) {
            if (res.data.code === 1) {

            }
          })
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
        vm.countTime = h + ":" + m + ":" + s;
      }, 1000);
    }
  },
  onHide:function() {
    clearInterval(this.timer);
  },
  onUnload(){
    clearInterval(this.timer);
  }
}
</script>
<style>
  .nav_block{
    height: 40px;
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
  .taskDetails{
    margin-top: 10px;
  }
  .taskDetails .title{
    font-size: 17px;
    color: #223a50;
    line-height: 40px;
  }
  .taskDetails .money{
    text-align: right;
    font-size: 17px;
    color: #ff618e;
    line-height: 40px;
  }
  .taskDetails .money span{
    margin-left: 5px;
    font-size: 12px;
    color: #888;
  }
  .taskDetails .label_title{
    font-size: 14px;
    color: #888;
    line-height: 30px;
  }
  .taskDetails .label_content{
    font-size: 14px;
    color: #223a50;
    line-height: 30px;
  }
  .taskDetails .text_content{
    line-height: 25px;
  }
  .taskDetails .red_content{
    color: #ff618e;
  }
  .taskDetails .link_button{
    padding: 0 10px;
    display: inline-block;
    border: 1px solid #00BCD4;
    background-color: #fff;
    border-radius: 4px;
    /*border-color: #00BCD4;*/
    color: #00BCD4;
    font-size: 16px;
    height: 30px;
    line-height: 32px;
    margin: 10px 0;
  }
  .taskDetails .task_img{
    margin: 10px 0 10px;
    text-align: center;
  }
  .taskDetails .task_img img{
    width: 60px;
    height: 80px;
    border: 1px solid #00BCD4;
    border-radius: 4px;
  }
  .taskDetails .receive_row{
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 5px 0 10px;
    background-color: #fff;
  }
  .taskDetails .receive_row button{
    position: relative;
    width: 100%;
    background-color: #00BCD4;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
  }
  .taskDetails .receive_row .submit_data .time{
    position: absolute;
    display: block;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    border: 1px solid #fff;
    border-right: none;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: blue;
    bottom: 5px;
    right: 0;
  }
  .taskDetails .receive_row .submit_data .time .clock{
    float: left;
    margin: 6px 4px 0 0;
  }
</style>
