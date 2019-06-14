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
          <h1>在 "{{income.gmt_create}}" 完成了任务 "{{income.task.title}}"</h1>
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
  name: 'MyIncome',
  data () {
    return {
      param: {
        page:0
      },
      loading: false,
      finished: false,
      incomeList:[]
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    onLoad () {
      let vm = this;
      this.param.page++
      this.axios.post(this.apiList.apiMyIncomeList,this.param,{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
          // 加载状态结束
          vm.loading = false
          vm.incomeList = vm.incomeList.concat(res.data.data.data)
          // 数据全部加载完成
          if (vm.incomeList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    },
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
