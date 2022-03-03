<template>
  <div>
    <Nav/>
    <GoodsList/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import Floor from "./Floor/Floor.vue";
import Brand from "./Brand/Brand.vue";
import Rank from "./Rank/Rank.vue";
import Recommend from "./Recommend/Recommend.vue";
import GoodsList from "./GoodsList/GoodsList.vue";
import Like from './Like/like'

export default {
  name: "Home",
  components: {
    Floor,
    Brand,
    Like,
    Rank,
    Recommend,
    GoodsList,
  },
};
</script>

<style>
</style>