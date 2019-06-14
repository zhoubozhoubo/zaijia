<template>
  <div class="test">
    <button @click="getdata()">getdata</button>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
      }
    },
    methods: {
      getdata() {
        var that = this;
        let url =
          "https://www.easy-mock.com/mock/5cdf44273919c8239232c37e/rosso/pager";
        this.axios
          .get(url,{
            headers:{
              token:'123456'
            }
          })
          .then(response => {
            console.log(response.data);
            that.data = response.data;
          })
          .catch(res => {
            console.log(res, "fail");
          });
      }
    }
  };
</script>
<style>
</style>
<style scoped>
</style>
