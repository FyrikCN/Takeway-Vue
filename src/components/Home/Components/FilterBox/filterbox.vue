<template>
    <el-main @click.native="$emit('onFilterClick', $event.target.id)">
        <span class="filterboxelement">
            <i class="el-icon-menu" id="all"></i>
            <span>所有店家</span>
        </span>
        <span class="filterboxelement">
            <i class="el-icon-food" id="food"></i>
            <span>精品美食</span>
        </span>
        <span class="filterboxelement">
            <i class="el-icon-grape" id="fruit"></i>
            <span>新鲜果蔬</span>
        </span>
        <span class="filterboxelement">
            <i class="el-icon-milk-tea" id="milktea"></i>
            <span>奶茶饮品</span>
        </span>
        <span class="filterboxelement">
            <i class="el-icon-shopping-cart-1" id="supermarket"></i>
            <span>地猫超市</span>
        </span>
        <span class="filterboxelement">
            <i class="el-icon-suitcase-1" id="medicine"></i>
            <span>买药</span>
        </span>
        <span class="filterboxelement">
            <i class="el-icon-dessert" id="happiness"></i>
            <span>夜宵</span>
        </span>
    </el-main>
</template>

<script>
export default {
  methods: {
    onFilterClick: function (e) {
      console.log(e)
    //   var target = e.target.id
    //   if (target) {
    //     console.log(target)
    }
  }
}
</script>

<style scoped>
el-main {
    overflow: auto;
}
.filterboxelement {
    float: left;
    flex-direction: column;
    align-items: center;
    width: 14.28%;
    min-width: 150px;
    padding: 10px 0;
}
.filterboxelement i {
    display: block;
    font-size: 80px;
}
</style>
