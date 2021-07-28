<template>
    <div class="restaurantlistcontainer">
        <restaurant
            v-for="rest in selectedRestaurants"
            :resFromJson="rest"
            :key="rest.id"
            @click.native="onRestaurantClick($event, rest.name)"
        ></restaurant>
    </div>
</template>

<script>
import Restaurant from './Components/restaurant.vue'
// import RestaurantClass from '../../../../../static/class/restaurantClass'

export default ({
  data () {
    return {
    }
  },
  props: [
    'showCategory', // 从home接受该显示的餐厅类别
    'restArray',
    'showSingleRestaurant', // 从home接受该显示哪家餐厅
    'displayViaCategory'
  ],
  computed: {
    restaurantArray: function () {
      return this.restArray
    },
    selectedCategory: function () {
      return this.showCategory
    },
    selectedSingleRestaurant: function () {
      return this.showSingleRestaurant
    },
    selectedRestaurants: function () {
      let selectedRests = []
      if (this.displayViaCategory) {
        if (this.selectedCategory.length === 0) { // 长度为0，也就是当未选择任何标签时，直接返回整个数组
          return this.restaurantArray
        }
        for (let i = 0; i < this.restaurantArray.length; i++) {
          if (this.restaurantArray[i].tags.indexOf(this.selectedCategory) !== -1) {
            selectedRests.push(this.restaurantArray[i])
          }
        }
      } else {
        for (let i = 0; i < this.restaurantArray.length; i++) {
          if (this.restaurantArray[i].name.indexOf(this.selectedSingleRestaurant) !== -1) {
            selectedRests.push(this.restaurantArray[i])
          }
        }
      }
      return selectedRests
    }
  },
  components: {
    Restaurant
  },
  methods: {
    onRestaurantClick (e, restName) {
      let $this = this
      // var target = e.target
      console.log(e.target, restName)
      // setTimeout(() => {
      //   this.$router.push({name: 'RestaurantDetails', params: { name: restName }})
      // }, 1000)
      let promise = new Promise(function (resolve, reject) {
        $this.$router.push({name: 'LoadingPage'})
        resolve()
      })
      promise.then(
        setTimeout(() => {
          $this.$router.push({name: 'RestaurantDetails', params: { name: restName }})
        }, 800)
      )
    }
  }
})
</script>
<style scoped>
.restaurantlistcontainer {
    float: left;
    padding: 10px;
    width: -webkit-fill-available;
    width: -moz-available;
    background-color: rgb(240, 240, 240);
}
</style>
