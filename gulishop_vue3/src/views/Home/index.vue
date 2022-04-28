<template>
  <Nav />
  <List />
  <Recommend />
  <Rank />
  <Like />
  <Floor v-for="(FloorData, index) in floorData" :key="index" :data="FloorData"/>
  <Brand />
</template>

<script lang='ts'>
import { defineComponent, onMounted,computed } from "vue";
import { useStore } from "vuex";
import Nav from "../../components/Nav.vue";
import Brand from "./Brand.vue";
import Floor from "./Floor.vue";
import Like from "./Like.vue";
import List from "./List.vue";
import Rank from "./Rank.vue";
import Recommend from "./Recommend.vue";
export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("home/getFloorData");
    });
    return {
      floorData:computed(()=>{
        return store.state.home.floorData
      })
    };
  },
  components: {
    Nav,
    Brand,
    Floor,
    Like,
    List,
    Rank,
    Recommend,
  },
});
</script>

<style>
</style>