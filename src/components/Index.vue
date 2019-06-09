<template>
  <div class="index">
    <!--location-->
    <van-row class="locationRow">
      <van-col span="6" offset="1">
        <div @click="showArea">
          <van-icon name="location" size="20px" class="location"/>
          <span>{{county}}</span>
          <van-icon name="arrow-down" size="20px" class="select"/>
        </div>
      </van-col>
      <van-col span="1" offset="15">
        <van-icon name="manager" size="20px" @click="goUser" class="user"/>
      </van-col>
    </van-row>
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
    <!--order-->
    <van-row class="orderRow">
      <van-col span="6" offset="17">
        <div class="orderSelect" @click="showOrder">
          <span>{{order}}</span>
          <van-icon name="arrow-down" />
        </div>
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
        <div @click="goTaskDetails">
          <van-col span="3" offset="1">
            <img :src="task.src"/>
          </van-col>
          <van-col span="18" offset="1" class="taskContent">
            <h1>【360借条】新人注册+红包</h1>
            <h2><span class="money">20元/次</span>剩余29次</h2>
          </van-col>
        </div>
      </van-row>
    </van-list>
    <!--areaShow-->
    <van-popup v-model="areaShow" position="bottom" :overlay="true">
      <van-area :area-list="areaList" value="110101" title="城市" :columns-num="2" @confirm="confirmArea" @cancel="cancelArea"/>
    </van-popup>
    <!--orderShow-->
    <van-actionsheet
      v-model="orderShow"
      :actions="orderList"
      @select="selectOrder"
    />
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
      finished: false,
      county: '成都',
      areaShow: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
        }
      },
      order: '默认排序',
      orderShow: false,
      orderList: [
        {
          name: '默认排序'
        },
        {
          name: '价格由高到低'
        },
        {
          name: '价格由低到高'
        },
        {
          name: '最新发布'
        },
        {
          name: '人气'
        }
      ]
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
    goUser () {
      console.log('goUser')
      this.$router.push({
        name: 'User'
      })
    },
    showArea () {
      console.log('showArea')
      this.areaShow = true
    },
    confirmArea (res) {
      console.log('confirmArea')
      this.county = res[1].name
      this.areaShow = false
    },
    cancelArea () {
      console.log('cancelArea')
      this.areaShow = false
    },
    showOrder () {
      console.log('showOrder')
      this.orderShow = true
    },
    selectOrder (item) {
      console.log('selectOrder')
      this.order = item.name
      this.orderShow = false
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
  .locationRow{
    height: 40px;
    background-color: #3f3f3f;
    color: #fff;
    font-size: 16px;
  }
  .locationRow .location,.locationRow .select,.locationRow .user{
    line-height: 40px;
  }
  .locationRow .location,.locationRow .user{
    float: left;
  }
  .locationRow span{
    float: left;
    margin: 10px 5px 0;
  }
  .bannerRow img{
    width: 100%;
  }
  .linkRow{
    margin: 15px 0;
    text-align: center;
  }
  .orderRow{
    font-size: 14px;
  }
  .orderRow .orderSelect{
    text-align: right;
  }
  .orderRow span{
    margin-right: 5px;
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
