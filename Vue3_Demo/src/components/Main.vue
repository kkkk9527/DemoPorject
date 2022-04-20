<template>
  <ul class="todo-main">
      <Todo/>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import Todo from "@/components/Todo.vue";
export default defineComponent({
  name: "Main",
  components:{
      Todo
  }
});
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>