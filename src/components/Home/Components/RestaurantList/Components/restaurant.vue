<template>
    <el-main class="restaurantcontainer">
        <div class="restaurantelement">
            <img :src="imgSrc" alt="">
            <div class="restaurantinfo">
                <h3>{{ resFromJson.name }}</h3>
                <p id="shipminprice">起送费 ￥{{ resFromJson.shipminprice }}.00</p>
                <p id="restaurantdesc">{{ resFromJson.desc }}</p>
            </div>
        </div>
    </el-main>
</template>
<script>

export default {
  props: [
    'resFromJson'
  ],
  computed: {
    imgSrc: function () {
      return ('../../../../../../static/Restaurants/' + this.resFromJson.name + '.jpg')
    }
  }
}
</script>

<style scoped>
.restaurantcontainer {
    display: inline;
    float: left;
    flex: 1;
    flex-basis: auto;
    padding: 0;
    width: 50%;
    min-width: 550px;
}
.restaurantelement {
    background-color: white;
    display: inline;
    border-radius: 5px;
    height: 120px;
    width: 95%;
    display: flex;
    float: left;
    justify-content: space-between;
    margin: 10px 5px;
    padding: 5px;
}
.restaurantinfo {
    display: inline;
    width: 100%;
    text-align: left;
}
img {
    display: inline;
    width: 150px;
    object-fit: cover;
    border-radius: 5px;
}
h3 {
    display: inline;
    margin: 0 5px;
}
#shipminprice {
    margin-left: 5px;
    display: inline;
}
#restaurantdesc {
    height: 70%;
    margin: 0 5px;
}
</style>
