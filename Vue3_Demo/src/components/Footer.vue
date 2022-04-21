<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span>
      <span>已完成{{ taskData.trueCount }}</span> / 全部{{ taskData.count }}
    </span>
    <button class="btn btn-danger" @click="changeStateTrue">清除已完成任务</button>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive } from "vue";
import bus from "../utils";
export default defineComponent({
  name: "Footer",
  setup() {
    const taskData = reactive({
      count: 0,
      trueCount: 0,
    });
    const isAllCheck = computed({
      get: ():boolean => {
        if (taskData.count === taskData.trueCount && taskData.count != 0) {
          return true;
        } else {
          return false;
        }
      },
      set: (val) => {
        bus.emit('changeAllCkeck',val)
      },
    });

    /* 获取任务总数和已完成任务数 */
    bus.on("getData", (res: any) => {
      taskData.count = res.count;
      taskData.trueCount = res.trueCount;
    });
    /* 删除已完成 */
    function changeStateTrue(){
        bus.emit('deleteTrueCheck');
    }

    return {
      taskData,
      isAllCheck,
      changeStateTrue
    };
  },
});
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>