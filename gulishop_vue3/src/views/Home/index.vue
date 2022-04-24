<template>
  <Nav/>
  <List/>
  <Recommend/>
  <Rank/>
  <Like/>
  <Floor/>
  <Floor/>
  <Brand/>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Nav from './Nav.vue';
import Brand from './Brand.vue';
import Floor from './Floor.vue';
import Like from './Like.vue';
import List from './List.vue';
import Rank from './Rank.vue';
import Recommend from './Recommend.vue';
export default defineComponent({
  name:'Home',
  components:{
      Nav,
      Brand,
      Floor,
      Like,
      List,
      Rank,
      Recommend,
  }
});
</script>

<style>

</style>