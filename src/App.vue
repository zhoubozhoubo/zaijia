<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    /*login () {
      let vm = this
      if(!localStorage.getItem('token')){
        Toast('请先登录')
        vm.$router.push({
          name: 'Login'
        })
        return
        /!*this.axios.post(this.apiList.apiLogin).then(function (res) {
          console.log(res)
          /!*if (res.data.code === 1) {
            vm.userInfo = res.data.data
          }*!/
        })*!/
      }
    },*/
    login () {
      if(!localStorage.getItem('token')){
        window.location.href =this.apiList.apiLogin
      }else{
        this.getInfo()
      }
    },
    getInfo () {
      let vm = this
      this.axios.post(vm.apiList.apiInfo,'',{
        headers: {
          'token': localStorage.getItem('token')
        }
      }).then(function (res) {
        if (res.data.code === -19) {
          window.location.href =vm.apiList.apiLogin
        }
      })
    }
  },
  created() {
    this.login()
    if (localStorage.getItem('subscribe') != 1) {
      this.qrcodeShow = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFF;
  overflow: hidden;
}
  h1,h2,h3,h4,h5,h6{
    font-weight: normal;
  }
</style>
