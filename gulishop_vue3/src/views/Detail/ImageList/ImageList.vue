<template>
  <div class="swiper-container">
    <swiper
      :slides-per-view="3"
      :modules="modules"
      :space-between="50"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="(img, index) in imageUrlList" :key="img.id">
        <img
          :src="img.imgUrl"
          :class="{ active: img.isDefault === '1' }"
          @click="ChooseImg(index, img.imgUrl)"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang='ts'>
import { defineComponent, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Navigation, Pagination, Scrollbar } from "swiper";
import bus from "@/utils/index.ts";
export default defineComponent({
  name: "ImageList",
  props: ["imageUrlList", "chooseImg"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    /* 选择图片 */
    function ChooseImg(index: number, url: string) {
      props.chooseImg(index);
    }
    /* 监视当前选择的图片 */
    watch(
      () => props.imageUrlList,
      (list: any) => {
        list.forEach((element: any) => {
          if (element.isDefault === "1") {
            bus.emit("chooseImage", element.imgUrl);
          }
        });
      },
      { deep: true }
    );
    return {
      modules: [Navigation, Pagination, Scrollbar],
      ChooseImg,
    };
  },
});
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>