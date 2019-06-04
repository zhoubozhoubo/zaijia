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
            【百度口碑】好评即可不下载
          </van-col>
          <van-col span="6" class="money">
            ￥1<span>/次</span>
          </van-col>

          <!--info-->
          <van-col span="6" class="label_title">
            截止日期：
          </van-col>
          <van-col span="18" class="label_content">
            2019-06-30
          </van-col>
          <van-col span="6" class="label_title">
            审核时长：
          </van-col>
          <van-col span="18" class="label_content">
            72小时
          </van-col>
          <van-col span="6" class="label_title">
            完成时间：
          </van-col>
          <van-col span="18" class="label_content">
            2小时
          </van-col>
          <van-col span="6" class="label_title">
            重复执行：
          </van-col>
          <van-col span="18" class="label_content">
            是
          </van-col>

          <!--step-->
          <van-col span="24" class="label_title">
            任务说明
          </van-col>
          <van-col span="1" class="label_content text_content">
            1、
          </van-col>
          <van-col span="23" class="label_content text_content">
            （评语请加微信号377047364，备注：百度口碑+你的手机品牌，客服通过你的好友验证发评语给你）
          </van-col>
          <van-col span="1" class="label_content text_content">
            2、
          </van-col>
          <van-col span="23" class="label_content text_content">
            一定要加客服等客服给你评语在做任务，不是客服给的评语不合格
          </van-col>
          <van-col span="1" class="label_content text_content">
            3、
          </van-col>
          <van-col span="23" class="label_content text_content">
            （复制注意事项中的链接到浏览器进入，点击登陆账号，给五星好评+评语+上传图片即可
          </van-col>
          <van-col span="1" class="label_content text_content">
            4、
          </van-col>
          <van-col span="23" class="label_content text_content">
            （需要有百度账号，如已有账号，直接登录评价，如果没有自行注册一个号
          </van-col>
          <van-col span="1" class="label_content text_content">
            5、
          </van-col>
          <van-col span="23" class="label_content text_content">
            一人只能评论一次，设置不限次数是因为怕有的超时没办法提交
          </van-col>

          <!--img-->
          <van-col span="6" class="task_img" v-for="(taskImg, taskImgIndex) in taskImgList" :key="taskImg.id">
            <img :src="taskImg.src" />
          </van-col>

          <van-col span="24" class="label_title">
            提交说明
          </van-col>
          <van-col span="1" class="label_content text_content">
            1、
          </van-col>
          <van-col span="23" class="label_content text_content">
            必须扫图中二维码
          </van-col>
          <van-col span="1" class="label_content text_content">
            2、
          </van-col>
          <van-col span="23" class="label_content text_content">
            成功之后必须有当天赠送的卡券
          </van-col>

          <!--img-->
          <van-col span="6" class="task_img" v-for="(img, imgIndex) in imgList" :key="img.id">
            <img :src="img.src" />
          </van-col>

          <van-col span="24" class="label_title">
            注意事项
          </van-col>
          <van-col span="1" class="label_content text_content red_content">
            1、
          </van-col>
          <van-col span="23" class="label_content text_content red_content">
            一个手机只能注册一次，注册过的用户不能再注册，新用户收到借条额度通过通知和成功借款的用户才有奖励，
          </van-col>
          <van-col span="1" class="label_content text_content red_content">
            2、
          </van-col>
          <van-col span="23" class="label_content text_content red_content">
            可以随意借一笔款，几天后还款，利息按日计算，红包可以抵扣利息。
          </van-col>

        </van-row>
      </van-col>
    </van-row>
    <div class="block"></div>

    <!--receiveTask-->
    <van-row class="receive_row">
      <van-col span="22" offset="1">
        <van-button class="receive_task" v-if="status === 0" @click="receiveTask">领取任务</van-button>
        <van-button class="submit_data" v-if="status === 1" @click="submitData">提交材料
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
  name: 'TaskDetails',
  data () {
    return {
      id: this.$route.params.id,
      status: 0,
      taskImgList: [
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
      imgList: [
        {
          id: 5,
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          id: 6,
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          id: 7,
          src: 'static/images/checkboxed.png',
          url: ''
        },
        {
          id: 8,
          src: 'static/images/checkboxed.png',
          url: ''
        }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    receiveTask () {
      console.log('receiveTask')
      this.status = 1
    },
    submitData () {
      console.log('submitData')
      this.$router.push({
        name: 'TaskSubmit',
        params: { id: 12 }
      })
    }
  },
  created () {
    // this.$http.post(this.myConfig.HttpUrl + '5c3479a1edb44', {
    // }, {
    // }).then((res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log(err)
    // })
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
  .taskDetails .task_img{
    margin: 20px 0 10px;
    text-align: center;
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
