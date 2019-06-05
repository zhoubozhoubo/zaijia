<template>
  <div class="myIncome">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>个人收入</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <!--incomelist-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="income_list" v-for="(income, incomeIndex) in incomeList" :key="incomeIndex">
        <van-col span="16" offset="1">
          <h1>在 {{income.time}} 完成了任务</h1>
        </van-col>
        <van-col span="5" offset="1" class="money">
          <span>+{{income.money}}</span>
        </van-col>
      </van-row>
    </van-list>

  </div>
</template>

<script>
export default {
  name: 'TeamIncome',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      incomeList:[
        {
          time: '2019-06-05 12:34',
          money: '23.12'
        },
        {
          time: '2019-06-05 12:34',
          money: '23.12'
        },
        {
          time: '2019-06-05 12:34',
          money: '23.12'
        },
        {
          time: '2019-06-05 12:34',
          money: '23.12'
        }
      ]
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
  .myIncome h1{
    margin: 0;
  }
  .myIncome .income_list{
    padding: 10px 0;
    border-bottom: 1px solid #F5F5F5;
  }
  .myIncome .income_list h1{
    font-size: 16px;
    color: #808080;
  }
  .myIncome .income_list .money{
    font-size: 16px;
    color: #FFA500;
    line-height: 30px;
    text-align: right;
  }
</style>
