<template>
  <div class="spec-preview">
    <img :src="url" />
    <div class="event" @mousemove="showPosition($event)"></div>
    <div class="big">
      <img
        :src="url"
        :style="{ left: zoomLeft + 'px', top: zoomTtop + 'px' }"
      />
    </div>
    <div
      class="mask"
      :style="{ left: elementLeft + 'px', top: elementTop + 'px' }"
    ></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref, computed } from "vue";
import bus from "@/utils/index.ts";
export default defineComponent({
  name: "Zoom",
  setup() {
    let url = ref("");
    let elementLeft = ref(0),
      elementTop = ref(0);
      /* 计算放大镜位置 */
    function showPosition(event: any): void {
      elementLeft.value =
        event.clientX - event.target.parentElement.parentElement.offsetLeft - 100;
      elementTop.value =
        event.clientY - event.target.parentElement.parentElement.offsetTop + 100;
    }
    let zoomLeft = computed(() => {
      return -2 * elementLeft.value;
    });
    let zoomTtop = computed(() => {
      return -2 * elementTop.value;
    });
    onMounted(() => {
      bus.on("chooseImage", (imgUrl: any): void => {
        url.value = imgUrl;
      });
    });
    return {
      url,
      showPosition,
      elementLeft,
      elementTop,
      zoomLeft,
      zoomTtop,
    };
  },
});
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>