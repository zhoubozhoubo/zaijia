<template>
  <div class="myTeam">

    <van-row class="navRow">
      <van-col span="2" offset="1">
        <van-icon name="arrow-left" size="20px" class="nav_icon" @click="goBack"/>
      </van-col>
      <van-col span="18" class="nav_title">
        <span>我的团队</span>
      </van-col>
    </van-row>
    <div class="nav_block"></div>

    <van-row class="team_nav">
      <div v-for="(grade, gradeIndex) in gradeList" :key="gradeIndex" @click="selectGrade(gradeIndex)">
        <van-col class="team_nav_item" :class="{'actice':grade.value == param.type}">
          <span>{{grade.name}}</span>
        </van-col>
      </div>
    </van-row>

    <!--userlist-->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-row class="user_list" v-for="(user, userIndex) in userList" :key="userIndex">
        <van-col span="4" offset="1">
          <img :src="user.avatarurl" />
        </van-col>
        <van-col span="18">
          <h1>{{user.nickname}}</h1>
        </van-col>
      </van-row>
    </van-list>

  </div>
</template>

<script>
export default {
  name: 'MyTeam',
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
      userList:[]
    }
  },
  created () {
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    initUserList () {
      this.param.page = 0
      this.userList = []
      this.onLoad()
    },
    onLoad () {
      let vm = this;
      this.param.page++
      this.axios.post(this.apiList.apiMyTeamList, this.param,{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === 1) {
          // 加载状态结束
          vm.loading = false
          vm.userList = vm.userList.concat(res.data.data.data)
          // 数据全部加载完成
          if (vm.userList.length >= res.data.data.total) {
            vm.finished = true
          }
        }
      })
    },
    selectGrade (index) {
      this.param.type = this.gradeList[index].value
      this.initUserList()
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
  }
  .navRow .nav_icon{
    float: left;
    line-height: 40px;
  }
  .navRow .nav_title{
    text-align: center;
  }
  .myTeam h1{
    margin: 0;
  }
  .myTeam .team_nav .team_nav_item{
    width: 50%;
    text-align: center;
    padding: 5px 0;
  }
  .myTeam .team_nav .actice{
    color: red;
    border-bottom: 2px solid red;
  }
  .myTeam .team_nav .team_nav_item span{
    font-size: 14px;
  }
  .myTeam .user_list{
    height: 40px;
    padding: 10px 0;
    border-bottom: 1px solid #F5F5F5;
  }
  .myTeam .user_list img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .myTeam .user_list h1{
    font-size: 16px;
    line-height: 40px;
    color: #808080;
  }
</style>
