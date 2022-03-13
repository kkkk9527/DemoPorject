<template>
  <div id="app">
      <Header/>
      <router-view></router-view>
      <Footer v-show="!$route.meta.footerNotShow"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { 
      Header,
      Footer
  },
  watch:{
    $route(){
      let query = JSON.parse(JSON.stringify(this.$route.query));
      //console.log(query);
      let SearchData=query;
      //this.$router.push({ name: "Search", query: query });
      this.$store.commit("Search/MERGEDATA", SearchData);
      this.$store.dispatch("Search/SearchInfo");
    }
  },
  mounted() {
    //let SearchData=this.$route.query;
    //this.$store.commit("Search/MERGEDATA",SearchData);    
    //this.$store.dispatch("Search/SearchInfo",SearchData);    
    this.$store.dispatch("Home/categoryList"); //调用reqCategoryList
  },
}
</script>

<style>

</style>
