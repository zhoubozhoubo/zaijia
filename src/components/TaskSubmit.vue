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
            请详细阅读任务说明，并严格按照任务要求进行任务提交，随意填写会导致您本次任务提交无法通过审核，最终导致通过率下降；
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24" class="title">
            提交说明
          </van-col>
          <van-col span="24" class="content">
            1、新人注册领红包页面截图
            2、借条审核通过通知短信截图
            3、借款成功短信截图
            文字提交：姓名+手机号
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24" class="title">
            提交图片
          </van-col>
          <van-col span="6" class="submit_img" v-for="(submitImg, submitImgIndex) in submitImgList" :key="submitImg.id">
            <img :src="submitImg.src" />
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
        <van-button class="submit_data" @click="submitData">提交材料
          <span class="time">
            <van-icon name="underway-o" class="clock"/>1:00:57
          </span>
        </van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'TaskSubmit',
    data () {
      return {
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
          '文字提交：姓名+手机号'
      }
    },
    methods: {
      goBack () {
        this.$router.back()
      },
      onRead(file) {
        console.log('onRead')
        console.log(file)
      },
      submitData () {
        console.log('submitData')
        this.$router.push({
          name: 'SubmitSuccess',
          params: { id: 12 }
        })
      }
    },
    created() {
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
  .taskSubmit .upload_img{
    height: 80px;
    text-align: center;
    background-color: #ccc;
  }
  .taskSubmit .upload_img .add_icon{
    margin: 25px 10px;
  }
  .taskSubmit .text_area{
    height: 110px;
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
