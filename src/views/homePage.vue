<template>
  <div id="homePage">
    <div class="demo">
      首页内容
    </div>
  </div>
</template>
<script>
  import {
    http
  } from './../api/index.js'
  export default {
    data() {
      return {

      }
    },
    mounted() {
      http.get('./../../static/json/login.json').then(res => {
        console.log(res)
      })
    },
    components: {}
  }

</script>
<style lang="scss" scoped>
  #homePage {
    .demo {
      height: 2rem;
    }
  }


</style>
