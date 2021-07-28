<template>
    <div class="loading-icon-container" ref="iconContainer">
        <i class="el-icon-loading"></i>
        <br>
        <div class="loading-text">请稍后...</div>
    </div>
</template>

<script>
export default ({
  name: 'LoadingPage',
  mounted () {
    this.slideToRight()
  },
  methods: {
    goToRestaurantDetail () {
      this.$router.push({name: 'RestaurantDetails'})
    },
    slideToRight () {
      // console.log(this.$refs.iconContainer)
      setTimeout(() => {
        if (this.$refs.iconContainer) {
          this.$refs.iconContainer.setAttribute('style', 'right: 0')
        }
      }, 0)
    }
  }
})
</script>

<style scoped>
.loading-icon-container {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    right: -50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: right linear 0.15s;
    overflow: hidden;
}
i {
    display: block;
    font-size: 50px;
}
</style>
