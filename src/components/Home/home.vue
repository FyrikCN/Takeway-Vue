<template>
    <div class="homeDiv">
       <headbar :city-name="cityName"
                :rest-array="allRestaurantArray"
                @getSelectionValueFromChild="getRestNameFromHeader"></headbar>
       <filterbox @onFilterClick="onFilterBoxClick($event)"></filterbox>
       <restaurantlist :show-category="showCategory"
                       :show-single-restaurant="selectedRestaurantName"
                       :rest-array="allRestaurantArray"
                       :display-via-category="viaCategory"></restaurantlist>
    </div>
</template>

<script>
import headbar from './Components/Header/headbar.vue'
import filterbox from './Components/FilterBox/filterbox.vue'
import restaurantlist from './Components/RestaurantList/restaurantlist.vue'
export default ({
  data () {
    return {
      cityName: '深圳',
      showCategory: [],
      selectedRestaurantName: '',
      allRestaurantArray: [],
      viaCategory: true
    }
  },
  components: {
    headbar,
    filterbox,
    restaurantlist
  },
  mounted () {
    this.getRestaurants()
  },
  methods: {
    onFilterBoxClick (e) {
      console.log(e)
      this.showCategory = e
      this.viaCategory = true
    },
    getRestaurants () {
      this.axios.get('../../../../../static/json/restaurants.json').then((res) => {
        this.allRestaurantArray = res.data['0']
        // console.log(this.allRestaurantArray)
        // this.setUpRestaurants(this.allRestaurantArray)
      })
    },
    getRestNameFromHeader (restNameFromHeader) {
      this.selectedRestaurantName = restNameFromHeader
      this.viaCategory = false
    }
  }
})
</script>
