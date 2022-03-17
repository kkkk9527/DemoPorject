<template>
  <div>
    <Nav />
    <GoodsList />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand />
  </div>
</template>

<script>
import Floor from "./Floor/Floor.vue";
import Brand from "./Brand/Brand.vue";
import Rank from "./Rank/Rank.vue";
import Recommend from "./Recommend/Recommend.vue";
import GoodsList from "./GoodsList/GoodsList.vue";
import Like from "./Like/like";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("Home", ["floorList"]),
  },
  mounted() {
    this.$store.dispatch("Home/getFloorList");
    this.$store.dispatch("RegisterAndLogin/RequestUserInfo");
  },
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