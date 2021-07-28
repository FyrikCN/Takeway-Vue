<template>
    <div class="detail-container" ref="detailDiv">
        <div>欢迎来到 {{ $route.params.name }}</div>
    </div>
</template>

<script>
export default {
  name: 'RestaurantDetails',
  mounted () {
    // 界面由右边滑入
    this.slideToRight()
    // 后退键指定后退至主页
    this.goBackListener()
  },
  methods: {
    slideToRight () {
      console.log(this.$refs.detailDiv)
      setTimeout(() => {
        this.$refs.detailDiv.setAttribute('style', 'right: 0%')
      }, 0)
    },
    goBackListener () {
      let $this = this
      if (window.history && window.history.pushState) {
        window.addEventListener('popstate', function (e) {
          $this.$router.push({path: '/'})
        }, false)
      }
    }
  },
  destroyed () {
    // 后退键监听器使用完后销毁
    window.removeEventListener('popstate', this.goBackListener, false)
  }
}
</script>

<style scoped>
.detail-container {
    position: absolute;
    right: -100%;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    transition: right linear 0.1s;
    overflow: hidden;
}
</style>
