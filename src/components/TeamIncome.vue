<template>
  <div class="teamIncome">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>团队收入</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row class="team_nav">
      <div v-for="(grade, gradeIndex) in gradeList" :key="gradeIndex" @click="selectGrade(gradeIndex)">
        <van-col class="team_nav_item" :class="{'actice':grade.value === param.type}">
          <span>{{grade.name}}</span>
        </van-col>
      </div>
    </van-row>
    <div class="bar_block"></div>

    <!--incomelist-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="income_list" v-for="(income, incomeIndex) in incomeList" :key="incomeIndex">
        <van-col span="16" offset="1">
          <h1 v-if="income.type == 3">"在 "{{income.gmt_create}}" 完成了任务 "{{income.task.title}}", 被邀请用户"{{income.fromUser.nickname}}"关注了公众号</h1>
          <h1 v-else>"{{income.fromUser.nickname}}" 在 "{{income.gmt_create}}" 完成了任务 "{{income.task.title}}"</h1>
        </van-col>
        <van-col span="5" offset="1" class="money">
          <span>+{{income.money}}</span>
        </van-col>
      </van-row>
    </van-list>

  </div>
</template>

<script>
  import { Toast } from 'vant';
export default {
  name: 'TeamIncome',
  data () {
    return {
      param: {
        type: 1,
        page:0
      },
      loading: false,
      finished: false,
      gradeList:[
        {
          name: '一级团队',
          value: 1
        },
        {
          name: '二级团队',
          value: 2
        }
      ],
      incomeList:[]
    }
  },
  created () {
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    initIncomeList () {
      this.param.page = 0
      this.finished = false
      this.incomeList = []
    },
    onLoad () {
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0
      });
      let vm = this;
      this.param.page++
      this.axios.post(this.apiList.apiTeamIncomeList,this.param,{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          // 加载状态结束
          vm.loading = false
          vm.incomeList = vm.incomeList.concat(res.data.data.data)
          Toast.clear()
          // 数据全部加载完成
          if (vm.incomeList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    },
    selectGrade (index) {
      this.param.type = this.gradeList[index].value
      this.initIncomeList()
    }
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
    z-index: 9999;
  }
  .navRow .nav_icon{
    float: left;
    line-height: 40px;
  }
  .navRow .nav_title{
    text-align: center;
  }
  .teamIncome h1{
    margin: 0;
  }
  .teamIncome .team_nav {
    width: 100%;
    height: 31px;
    position: fixed;
    background-color: #FFFFFF;
  }
  .teamIncome .team_nav .team_nav_item{
    width: 50%;
    text-align: center;
    padding: 5px 0;
  }
  .teamIncome .team_nav .actice{
    color: red;
    border-bottom: 2px solid red;
  }
  .teamIncome .team_nav .team_nav_item span{
    font-size: 14px;
  }
  .teamIncome .income_list{
    padding: 10px 0;
    border-bottom: 1px solid #F5F5F5;
  }
  .teamIncome .income_list h1{
    font-size: 16px;
    color: #808080;
  }
  .teamIncome .income_list .money{
    font-size: 16px;
    color: #FFA500;
    line-height: 30px;
    text-align: right;
  }
</style>
