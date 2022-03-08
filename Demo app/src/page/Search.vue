<template>
  <div>
    <Nav />
    <div class="main">
      <div class="py-container">
        <!--selector-->
        <Selector />
        <!--details-->
        <Details />
        <!--hotsale-->
        <Hotsale />
      </div>
    </div>
  </div>
</template>

<script>
import Details from "./Search/Details.vue";
import Hotsale from "./Search/Hotsale.vue";
import Selector from "./Search/Selector.vue";

export default {
  name: "Search",
  components: {
    Details,
    Hotsale,
    Selector,
  },
  mounted() {
    //console.log(JSON.stringify(this.$route.query));
    //this.$store.dispatch("Search/SearchInfo", this.$route.query);
  },
};
</script>

<style scoped lang="less">
.main {
  margin: 10px 0;
  .py-container {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>