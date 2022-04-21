<template>
  <li v-for="task in taskList" :key="task.id">
    <label>
      <input type="checkbox" v-model="task.isChecked" />
      <span>{{ task.name }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTask(task.name)">删除</button>
  </li>
</template>

<script lang='ts'>
import { computed, defineComponent, Ref, ref, watchEffect } from "vue";
import bus from "../utils";

interface objElement{
  name:string
  isChecked:boolean
}

export default defineComponent({
  name: "Todo",
  setup() {
    const taskList: Ref = ref([]);
    /* 删除任务 */
    function deleteTask(taskName: string): void {
      taskList.value.forEach((element: objElement, index: number) => {
        if (element.name === taskName) {
          taskList.value.splice(index, 1);
        }
      });
    }
    /* 计算任务总数 */
    const count = computed((): number => {
      return taskList.value.length;
    });
    /* 计算打钩的任务总数 */
    const trueCount = computed((): number => {
      return taskList.value.reduce((total: number, value: objElement) => {
        if (value.isChecked) {
          total++;
        }
        return total;
      }, 0);
    });
    /* 监视任务数组向footer传递任务总数和打钩的任务总数*/
    watchEffect((): void => {
      bus.emit("getData", { count: count.value, trueCount: trueCount.value });
    });
    /* 接收header的任务名称 */
    bus.on("sendMsg", (data: any): void => {
      let isIn = taskList.value.some((value: objElement) => {
        return value.name.indexOf(data.name) != -1;
      });
      if (!isIn) {
        taskList.value.push(data);
      } else {
        alert("该任务已存在");
      }
    });
   /* 全选所有任务 */
    bus.on("changeAllCkeck", (Check: any): void => {
      taskList.value.forEach((element: objElement) => {
        element.isChecked = Check;
      });
    });
     /* 删除所有已完成的任务 */
    bus.on("deleteTrueCheck", (): void => {
      taskList.value=taskList.value.filter((value:objElement)=>{
        return value.isChecked !=true;
      })
    });

    return {
      taskList,
      count,
      trueCount,
      deleteTask,
    };
  },
});
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>