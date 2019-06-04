<template>
  <div>
    任务详情{{id}}
  </div>
</template>

<script>
export default {
  name: 'TaskDetails',
  data () {
    return {
      id: this.$route.params.id
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

<style scoped>
</style>
