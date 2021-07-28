<template>
    <nav id="navbar">
      <div class="navbar-element" id="citynamecontainer">
        <el-button type="primary">{{ cityName }}</el-button></div>
      <div class="navbar-element" id="inputcontainer">
        <el-autocomplete
          v-model="input"
          :fetch-suggestions="getRestNamesArray"
          @select="handleSelect($event)"
          type="text" name="inputbox"
          id="inputbox"
          placeholder="查找店家"
          ></el-autocomplete>
      </div>
      <weatherinfo
        class="navbar-element"
        id="weathercontainer"
        :city-name-from-header="cityName">weather of {{ cityName }}</weatherinfo>
    </nav>
</template>

<script>
import weatherinfo from './Components/weatherinfo.vue'
export default ({
  props: [
    'cityName',
    'restArray'
  ],
  data () {
    return {
      input: ''
    }
  },
  computed: {
    restNamesArray: function () {
      return this.restArray.name
    }
  },
  methods: {
    getRestNamesArray (queryString, cb) {
      let names = []
      for (let rest of this.restArray) {
        names.push({'value': rest.name})
      }
      // console.log(names)
      cb(names)
    },
    handleSelect (selection) {
      this.$emit('getSelectionValueFromChild', selection.value)
    }
  },
  components: {
    weatherinfo
  }
})
</script>

<style scoped>
nav {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: teal;
  margin-bottom: 5px;
  padding: 4px 5px;
  border-radius: 4px;
}
.navbar-element {
  display: inline-block;
  margin: 0 5px;
}
#inputcontainer {
  width: 100%;
}
.el-autocomplete {
  width: 100%;
}
</style>
