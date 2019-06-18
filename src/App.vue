<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFF;
}
  h1,h2,h3,h4,h5,h6{
    font-weight: normal;
  }
</style>
