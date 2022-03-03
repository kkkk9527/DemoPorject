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
  }
}
</script>

<style>

</style>
