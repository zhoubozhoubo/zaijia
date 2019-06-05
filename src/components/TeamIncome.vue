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
        <van-col class="team_nav_item" :class="{'actice':grade.value === currentGrade}">
          <span>{{grade.name}}</span>
        </van-col>
      </div>
    </van-row>

    <!--incomelist-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="income_list" v-for="(income, incomeIndex) in incomeList" :key="incomeIndex">
        <van-col span="16" offset="1">
          <h1>"{{income.nickname}}"在 {{income.time}} 完成了任务</h1>
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
      currentGrade: 1,
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
      incomeList:[
        {
          nickname: '成员a',
          time: '2019-06-05 12:34',
          money: '23.12'
        },
        {
          nickname: '成员a',
          time: '2019-06-05 12:34',
          money: '23.12'
        },
        {
          nickname: '成员c',
          time: '2019-06-05 12:34',
          money: '23.12'
        },
        {
          nickname: '成员d',
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
    },
    selectGrade (index) {
      this.currentGrade = this.gradeList[index].value
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
  .teamIncome h1{
    margin: 0;
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
