<template>
  <div id="page_404">
    <h4>错误代码: <span>{{isShow}}</span></h4>
    <van-button type="default" @click='callHome'>返回首页</van-button>
  </div>
</template>
<script>
  export default {
    name: 'page_404',
    data() {
      return {};
    },
    methods: {
      callHome() {
        // 返回首页
        this.$router.push('/home');
      }
    },
    computed: {
      isShow() {
        return this.$store.getters.getState
      }
    }
  }

</script>

<style scoped lang="scss">
  #page_404 {
    max-width: 700px;
    margin: 0 auto;
    background-image: url('../../../static/images/500错误提示.png');
    width: 100%;
    height: 100%;
    background-size: 100% 100%;

    h4 {
      font-size: 26px;
      position: absolute;
      left: calc(50% - 80px);
      top: 30px;

      span {
        color: #ff4c4c;
      }
    }

    button {
      position: absolute;
      bottom: 30px;
      left: calc(50% - 44px);
    }
  }

</style>
