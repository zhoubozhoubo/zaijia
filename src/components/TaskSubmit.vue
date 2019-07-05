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

        <van-row v-if="taskDetails.task.submit_way == 2">
          <van-col span="24" class="title">
            提交图片
          </van-col>
          <van-col span="6" class="submit_img" v-for="(img, imgIndex) in taskDetails.task.submit_img" :key="imgIndex">
            <img :src="img"  @click="subImgView(imgIndex)"/>
          </van-col>
        </van-row>

        <van-row v-if="taskDetails.task.submit_way == 2">
          <van-col span="24" class="title">
            上传图片
          </van-col>
          <van-col span="6" class="upload_img" v-for="(item,index) in formItem.submit_img" :key="index">
            <img class="image" :src="item" @click="imgView(index)">
            <van-icon name="clear" size="20px" color="#FF0000" class="close_icon" @click="imgclose(index)"/>
          </van-col>
          <van-col span="6" class="upload_img">
            <van-uploader :after-read="onRead">
              <van-icon name="plus" size="30px" color="#00BCD4" class="add_icon"/>
            </van-uploader>
          </van-col>
          <van-col span="6" class="upload_img">
            <input style="width: 20px; height: 20px; background-color: #333;" type="file" @click="upFile"/>
              <!--<van-icon name="plus" size="30px" color="#00BCD4" class="add_icon" @click="upImg"/>-->
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24" class="title">
            上传文本
          </van-col>
          <van-col span="24" class="text_area">
            <van-field :placeholder="taskDetails.task.submit_notice" v-model="formItem.submit_text" type="textarea" @input="inputText"/>
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

    <van-popup v-model="imgShow" class="show_img">
      <img :src="showImg" @click="hideImg">
    </van-popup>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  import Input from "../../../www_tmp/YXJ-StoreWeb/build/vendors";
  export default {
    name: 'TaskSubmit',
    components: {Input},
    data () {
      return {
        id: this.$route.params.id,
        taskDetails: {
          task: {
            take_care: ''
          }
        },
        formItem: {
          id: this.$route.params.id,
          submit_img: [],
          submit_text: ''
        },
        areaPlaceholder: '1、新人注册领红包页面截图\n' +
          '2、借条审核通过通知短信截图\n' +
          '3、借款成功短信截图\n' +
          '文字提交：姓名+手机号',
        countTime: '--:--:--',
        timer: '',
        imgShow: false,
        showImg: '',
        localIds: '',
        imgBase64: ''
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
        this.$router.back({
          params: { task_id: this.taskDetails.task.task_id }
        })
      },
      getTaskDetails () {
        Toast.loading({
          mask: true,
          message: '加载中...',
          duration: 0
        });
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
            if (vm.taskDetails.status == 0 || vm.taskDetails.status == 1) {
              if (vm.taskDetails.surplus_time > 0) {
                vm.resetTime(vm.taskDetails.surplus_time)
              }else{
                vm.getTaskDetails()
              }
            }
            Toast.clear()
          }
        })
      },
      onRead (file) {
        Toast.loading({
          mask: true,
          message: '上传中...',
          duration: 0
        });
        // 大于1.5MB的jpeg和png图片都缩小像素上传
        if(/\/(?:jpeg|png)/i.test(file.file.type)&&file.file.size>1500000) {
          // 创建Canvas对象(画布)
          let canvas =  document.createElement('canvas')
          // 获取对应的CanvasRenderingContext2D对象(画笔)
          let context = canvas.getContext('2d')
          // 创建新的图片对象
          let img = new Image()
          // 指定图片的DataURL(图片的base64编码数据)
          img.src = file.content
          // 监听浏览器加载图片完成，然后进行进行绘制
          img.onload = () => {
            // 指定canvas画布大小，该大小为最后生成图片的大小
            canvas.width = 400
            canvas.height = 300
            /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，300是将图片按给定的像素进行缩小。
            如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/
            context.drawImage(img, 0, 0, 400, 300)
            // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
            file.content = canvas.toDataURL(file.file.type, 0.5)
            // 最后将base64编码的图片保存到数组中，留待上传。
            // this.imgBase64.push(file.content)
          }

        }

        //注意，我们这里没有使用form表单提交文件，所以需要用new FormData来进行提交
        let fd = new FormData()
        if (file && file.length) { // 判断是否是多图上传 多图则循环添加进去
          file.forEach(item => {
            fd.append("file", item.file)//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
          })
        } else {
          fd.append("file", file.file)
        }
        this.axios.post(this.apiList.apiUpload, fd) //url是服务器的提交地址
        //成功回调
          .then(res => {
            Toast.clear()
            //将服务器返回的图片链接添加进img数组，进行预览展示
            this.formItem.submit_img = this.formItem.submit_img.concat(res.data.data.fileUrl)
            Toast('上传成功')
          })
      },
      upImg () {
        let vm =this
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            console.log(res)
            let localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            vm.formItem.submit_img = vm.formItem.submit_img.concat(res.localIds);
            // console.log(vm.formItem.submit_img)
            for (let i=0;i<localIds.length;i++) {
              wx.getLocalImgData({
                localId: localIds[i], // 图片的localID
                success: function (res) {
                  // var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                  // vm.formItem.submit_img = vm.formItem.submit_img.concat(res.localData);
                  // vm.formItem.submit_img.push(res.localData);
                }
              });
            }
          }
        })
      },
      upFile (file) {
        console.log(file)
        /*let vm =this
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            console.log(res)
            let localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            vm.formItem.submit_img = vm.formItem.submit_img.concat(res.localIds);
            // console.log(vm.formItem.submit_img)
            for (let i=0;i<localIds.length;i++) {
              wx.getLocalImgData({
                localId: localIds[i], // 图片的localID
                success: function (res) {
                  // var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                  // vm.formItem.submit_img = vm.formItem.submit_img.concat(res.localData);
                  // vm.formItem.submit_img.push(res.localData);
                }
              });
            }
          }
        })*/
      },
      //删除预览图片按钮
      imgclose (index) {
        this.formItem.submit_img.splice(index, 1)
        Toast('删除成功')
      },
      //图片大图
      subImgView (index) {
        this.showImg = this.taskDetails.task.submit_img[index]
        this.imgShow = true
      },
      //图片大图
      imgView (index) {
        this.showImg = this.formItem.submit_img[index]
        this.imgShow = true
      },
      //关闭大图
      hideImg () {
        this.imgShow = false
      },
      inputText (res) {
        console.log(res)
      },
      submitData () {
        Toast.loading({
          mask: true,
          message: '加载中...',
          duration: 0
        });
        let vm = this
        this.axios.post(this.apiList.apiSubmitTask, vm.formItem, {
          headers: {
            'token': localStorage.getItem('token')
          }
        }).then(function (res) {
          if (res.data.code === 1) {
            Toast.clear()
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
            vm.getTaskDetails()
            /*if(vm.taskDetails.status == 0){
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
    word-wrap: break-word;
    word-break: normal;
  }
  .taskSubmit .content{
    font-size: 14px;
    line-height: 22px;
    color: #555;
    word-wrap: break-word;
    word-break: normal;
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
    position: relative;
    height: 80px;
    text-align: center;
    /*background-color: #ccc;*/
  }
  .taskSubmit .upload_img img{
    width: 60px;
    height: 80px;
    border: 1px solid #00BCD4;
    border-radius: 4px;
  }
  .taskSubmit .upload_img .add_icon{
    /*margin: 25px 10px;*/
    border: 1px solid #00BCD4;
    border-radius: 4px;
    width: 60px;
    height: 80px;
    line-height: 82px;
  }
  .taskSubmit .upload_img .close_icon{
    position: absolute;
    top: 0;
    right: 0;
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
  .taskSubmit .show_img {
    width: 90%;
    text-align: center;
  }
  .taskSubmit .show_img img {
    max-width: 100%;
    max-height: 90%;
  }
</style>
