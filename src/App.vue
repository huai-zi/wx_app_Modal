<template>
  <div id="app">
    <router-view />
    <div class="modules_loading" v-show='loadingShow'>
      <van-loading color="white" size='50' />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        show: false
      }
    },
    computed: {
      loadingShow() {
        return this.$store.getters.loadingSh
      }
    }
  }

</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;

    // loding蒙版,禁止点击
    .modules_loading {
      width: 100%;
      height: 100%;
      text-align: center;
      position: absolute;
      top: 0;
      z-index: 999;
      padding-top: 100px;
      background: rgba(255, 255, 255, .5);
    }

    // loding样式
    .van-loading {
      padding: 10px;
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.5);
      margin: 0 auto;
    }
  }

</style>
