<template>
    <div @click="newCity()" :title="weather">
      <img :src="imgSrc"/>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: [
    'cityNameFromHeader'
  ],
  data () {
    return {
      cityName: this.cityNameFromHeader,
      imgSrcCode: 999,
      weather: ''
    }
  },
  computed: {
    imgSrc: function () {
      return ('../../../../../../static/color-64/' + this.imgSrcCode + '.png')
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      let api = 'https://geoapi.qweather.com/v2/city/lookup?location=' + this.cityName + '&key=50de9b662e1e423a98722d226000ab38'
      this.axios.get(api).then((response) => {
        let cityCode = response.data.location[0].id
        // console.log(cityCode + ', ' + this.cityName)
        this.getWeatherInfo(cityCode)
      })
    },
    getWeatherInfo (cityCode) {
      let api = 'https://devapi.qweather.com/v7/weather/now?key=50de9b662e1e423a98722d226000ab38&location=' + cityCode
      this.axios.get(api).then((response) => {
        // console.log(response.data.now.icon)
        this.imgSrcCode = response.data.now.icon
        this.weather = response.data.now.text
      })
    },
    newCity () {
      this.cityName = '北京'
      this.getCityInfo()
    }
  }
})
</script>

<style scoped>
img {
  width: 40px;
  height: 40px;
}
</style>
