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
          <van-col span="16" class="title">
            {{taskDetails.title}}
          </van-col>
          <van-col span="8" class="money">
            <p>￥{{taskDetails.money}}<span>/次</span></p>
          </van-col>
          <div style="clear: both;"></div>

          <!--info-->
          <van-col span="6" class="label_title">
            截止日期：
          </van-col>
          <van-col span="18" class="label_content">
            {{taskDetails.end_date}}
          </van-col>
          <van-col span="6" class="label_title">
            审核时长：
          </van-col>
          <van-col span="18" class="label_content">
            {{taskDetails.check_duration}}小时
          </van-col>
          <van-col span="6" class="label_title">
            完成时间：
          </van-col>
          <van-col span="18" class="label_content">
            {{taskDetails.finish_duration}}小时
          </van-col>
          <van-col span="6" class="label_title">
            重复执行：
          </van-col>
          <van-col span="18" class="label_content">
            {{taskDetails.is_repeat == 1 ? '是': '否'}}
          </van-col>

          <!--step-->
          <van-col span="24" class="label_title">
            任务说明
          </van-col>
          <template v-for="(stepItem, stepIndex) in taskDetails.step">
            <van-col span="2" class="label_content text_content">
             {{stepIndex+1}}、
            </van-col>
            <van-col span="22" class="label_content text_content">
              {{stepItem}}
            </van-col>
          </template>



          <!--link-->
          <van-col span="23" offset="1" v-if="taskDetails.link">
            <a :href="taskDetails.link" class="link_button">打开链接</a>
          </van-col>

          <!--img-->
          <van-col span="6" class="task_img" v-for="(taskImg, taskImgIndex) in taskDetails.show_img">
            <img :src="taskImg"  @click="subImgView(taskImgIndex)"/>
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
          <van-col span="6" class="task_img" v-for="(img, imgIndex) in taskDetails.submit_img">
            <img :src="img" @click="imgView(imgIndex)"/>
          </van-col>

          <van-col span="24" class="label_title">
            注意事项
          </van-col>
          <van-col span="1" class="label_content text_content red_content">
          </van-col>
          <van-col span="23" class="label_content text_content red_content">
            {{taskDetails.take_care}}
          </van-col>

        </van-row>
      </van-col>
    </van-row>
    <div class="block"></div>

    <!--receiveTask-->
    <van-row class="receive_row">
      <van-col span="22" offset="1">
        <van-button class="receive_task" v-if="taskDetails.can_receive == 1" @click="receiveTask">领取任务</van-button>
        <van-button class="submit_data" v-if="taskDetails.can_receive == 0 && taskDetails.status == 0" @click="submitData">提交材料
          <span class="time">
            <van-icon name="underway-o" class="clock"/>{{countTime}}
          </span>
        </van-button>
        <van-button class="submit_data" v-if="taskDetails.can_receive == 0 && taskDetails.status == 1">待审核
          <span class="time">
            <van-icon name="underway-o" class="clock"/>{{countTime}}
          </span>
        </van-button>
        <!--<van-button class="submit_data" v-if="taskDetails.can_receive == 0 && taskDetails.status == 1">待审核</van-button>-->
        <van-button class="submit_data" v-if="taskDetails.can_receive == 0 && taskDetails.status == 2">已通过</van-button>
        <van-button class="submit_data" v-if="taskDetails.can_receive == 0 && taskDetails.status == 3">未通过</van-button>
        <van-button class="submit_data" v-if="taskDetails.can_receive == 0 && taskDetails.status == 4">已放弃</van-button>
      </van-col>
    </van-row>

    <van-popup v-model="imgShow" class="show_img">
      <img :src="showImg" @click="hideImg">
    </van-popup>
  </div>
</template>

<script>
  import { Toast } from 'vant';
export default {
  name: 'TaskDetails',
  data () {
    return {
      task_id: '',
      status: 0,
      taskDetails:[],
      countTime: '--:--:--',
      timer: '',
      imgShow: false,
      showImg: ''
    }
  },
  created() {
    if(this.$route.params.task_id){
      this.task_id = this.$route.params.task_id
      localStorage.setItem('task_id', this.task_id)
    }else{
      this.task_id = localStorage.getItem('task_id')
    }
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
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
      let vm = this
      this.axios.post(this.apiList.apiTaskDetails,{task_id: vm.task_id},{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          vm.taskDetails = res.data.data
          // 当状态为执行中、审核中时倒计时
          if(vm.taskDetails.status == 0 || vm.taskDetails.status == 1){
            if(vm.taskDetails.surplus_time>0){
              vm.resetTime(vm.taskDetails.surplus_time)
            }else{
              vm.getTaskDetails()
            }
          }
          Toast.clear()
        }
      })
    },
    // 领取任务
    receiveTask () {
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
      let vm = this
      /*if(!localStorage.getItem('token')){
        Toast.clear()
        Toast('请先登录')
        this.$router.push({
          name: 'Login'
        })
        return
      }*/
      this.axios.post(this.apiList.apiAddTask,{
        task_id: vm.task_id
      },{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          Toast.success(res.data.msg)
          vm.taskDetails.can_receive = 0
          vm.taskDetails.status = 0
          if(res.data.data.finish_duration>0){
            vm.resetTime(res.data.data.finish_duration)
          }
          vm.taskDetails.user_task_id = res.data.data.id
        }else{
          Toast(res.data.msg)
        }
        Toast.clear()
      })
    },
    // 提交材料
    submitData () {
      console.log('submitData')
      let vm = this
      this.$router.push({
        name: 'TaskSubmit',
        params: { id: vm.taskDetails.user_task_id }
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
          vm.getTaskDetails()
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
        vm.countTime = h + ":" + m + ":" + s;
      }, 1000);
    },
    //图片大图
    subImgView (index) {
      this.showImg = this.taskDetails.show_img[index]
      this.imgShow = true
    },
    //图片大图
    imgView (index) {
      this.showImg = this.taskDetails.submit_img[index]
      this.imgShow = true
    },
    //关闭大图
    hideImg () {
      this.imgShow = false
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
    z-index: 9999;
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
    word-wrap: break-word;
    word-break: normal;
  }
  .taskDetails .money{
    text-align: right;
    font-size: 17px;
    color: #ff618e;
    line-height: 40px;
  }
  .taskDetails .money p{
    margin: 0;
    float: right;
  }
  .taskDetails .money p span{
    margin-left: 5px;
    font-size: 12px;
    color: #888;
  }
  .taskDetails .label_title{
    font-size: 14px;
    color: #888;
    line-height: 30px;
    word-wrap: break-word;
    word-break: normal;
  }
  .taskDetails .label_content{
    font-size: 14px;
    color: #223a50;
    line-height: 30px;
    word-wrap: break-word;
    word-break: normal;
  }
  .taskDetails .text_content{
    line-height: 25px;
    word-wrap: break-word;
    word-break: normal;
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
  .taskDetails .show_img {
    width: 90%;
    text-align: center;
  }
  .taskDetails .show_img img {
    max-width: 100%;
    max-height: 90%;
  }
</style>
