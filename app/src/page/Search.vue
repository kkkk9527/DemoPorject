<template>
  <div>
    <Nav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <Bread/>
        <!--selector-->
        <Selector/>
        <!--details-->
        <Details/>
        <!--hotsale-->
        <Hotsale/>
      </div>
    </div>
  </div>
</template>

<script>
import Bread from './Search/Bread.vue'
import Details from './Search/Details.vue';
import Hotsale from './Search/Hotsale.vue';
import Selector from './Search/Selector.vue'

export default {
  name: "Search",
  components:{
    Bread,Details,Hotsale,Selector
  },
  mounted() {
    //console.log(JSON.stringify(this.$route.query));
    this.$store.dispatch('Search/SearchInfo',this.$route.query);
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