<template>
  <div class="taskSubmit">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>提交材料</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row>
      <van-col span="22" offset="1">
        <van-row>
          <van-col span="24" class="title">
            注意
          </van-col>
          <van-col span="24" class="content">
            {{taskDetails.task.take_care}}
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24" class="title">
            提交说明
          </van-col>
          <van-col span="24" class="content">
            {{taskDetails.task.submit_notice}}
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24" class="title">
            提交图片
          </van-col>
          <van-col span="6" class="submit_img" v-for="(img, imgIndex) in taskDetails.task.submit_img" :key="imgIndex">
            <img :src="img" />
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24" class="title">
            上传图片
          </van-col>
          <van-col span="6" class="upload_img">
            <van-uploader :after-read="onRead">
              <van-icon name="plus" size="30px" color="#fff" class="add_icon"/>
            </van-uploader>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24" class="title">
            上传文本
          </van-col>
          <van-col span="24" class="text_area">
            <van-field :placeholder="areaPlaceholder" type="textarea"/>
          </van-col>
        </van-row>

      </van-col>
    </van-row>
    <div class="block"></div>

    <!--receiveTask-->
    <van-row class="receive_row">
      <van-col span="22" offset="1">
        <van-button class="submit_data" @click="submitData" v-if="taskDetails.status == 0">提交材料
          <span class="time">
            <van-icon name="underway-o" class="clock"/>{{countTime}}
          </span>
        </van-button>
        <van-button class="submit_data" v-if="taskDetails.status == 1">待审核
          <span class="time">
            <van-icon name="underway-o" class="clock"/>{{countTime}}
          </span>
        </van-button>
        <van-button class="submit_data" v-if="taskDetails.status == 2">已通过</van-button>
        <van-button class="submit_data" v-if="taskDetails.status == 3">未通过</van-button>
        <van-button class="submit_data" v-if="taskDetails.status == 4">已放弃</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: 'TaskSubmit',
    data () {
      return {
        id: this.$route.params.id,
        taskDetails: [],
        submitImgList: [
          {
            id: 1,
            src: 'static/images/checkboxed.png',
            url: ''
          },
          {
            id: 2,
            src: 'static/images/checkboxed.png',
            url: ''
          },
          {
            id: 3,
            src: 'static/images/checkboxed.png',
            url: ''
          },
          {
            id: 4,
            src: 'static/images/checkboxed.png',
            url: ''
          }
        ],
        areaPlaceholder: '1、新人注册领红包页面截图\n' +
          '2、借条审核通过通知短信截图\n' +
          '3、借款成功短信截图\n' +
          '文字提交：姓名+手机号',
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
            console.log(res)
            vm.taskDetails = res.data.data
            // 当状态为执行中、审核中时倒计时
            if (vm.taskDetails.status === 0 || vm.taskDetails.status === 1) {
              if (vm.taskDetails.surplus_time > 0) {
                vm.resetTime(vm.taskDetails.surplus_time)
              }
            }
          }
        })
      },
      onRead(file) {
        console.log('onRead')
        console.log(file)
      },
      submitData () {
        let vm = this
        this.axios.post(this.apiList.apiSubmitTask, {id: vm.taskDetails.id,submit_img: '',submit_text: ''}, {
          headers: {
            'token': localStorage.getItem('token')
          }
        }).then(function (res) {
          if (res.data.code === 1) {
            vm.$router.push({
              name: 'SubmitSuccess'
            })
          }else{
            Toast(res.data.msg)
          }
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
            this.axios.post(this.apiList.apiUserTaskDetails, {id: vm.id}, {
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
  .taskSubmit .title{
    margin: 15px 0 8px;
    font-weight: 600;
    font-size: 18px;
    color: #555;
  }
  .taskSubmit .content{
    font-size: 14px;
    line-height: 22px;
    color: #555;
  }
  .taskSubmit .submit_img{
    text-align: center;
  }
  .taskSubmit .submit_img img{
    width: 60px;
    height: 80px;
    border: 1px solid #00BCD4;
    border-radius: 4px;
  }
  .taskSubmit .upload_img{
    height: 80px;
    text-align: center;
    background-color: #ccc;
  }
  .taskSubmit .upload_img .add_icon{
    margin: 25px 10px;
  }
  .taskSubmit .text_area{
    /*height: 100px!important;*/
    border-radius: 2px;
    border: 1px solid #ccc;
  }
  .taskSubmit .receive_row{
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 5px 0 10px;
    background-color: #fff;
  }
  .taskSubmit .receive_row button{
    position: relative;
    width: 100%;
    background-color: #00BCD4;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
  }
  .taskSubmit .receive_row .submit_data .time{
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
  .taskSubmit .receive_row .submit_data .time .clock{
    float: left;
    margin: 6px 4px 0 0;
  }
</style>
