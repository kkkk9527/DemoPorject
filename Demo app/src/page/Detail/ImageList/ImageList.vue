<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="imageItem in skuImageList"
        :key="imageItem.id"
      >
        <img
          :src="imageItem.imgUrl"
          :class="{ active: imageItem.isDefault == 1 }"
          @click="changeFlag(skuImageList, imageItem)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  methods: {
    changeFlag(outArr, innerArr) {
      //Arr为图片数据数组,isDefault为是否显示边框,完成响应式改变边框颜色。
      outArr.forEach((item) => {
        if (item.isDefault == 1) {
          item.isDefault = 0;
        }
        innerArr.isDefault = 1;
      });
      this.$bus.$emit('selectImage',innerArr.imgUrl)
    },
  },
  props: ["skuImageList"],
  watch: {
    skuImageList: {
      immediate: true,
      handler() {
        this.$nextTick(function () {
          new Swiper(this.$refs.mySwiper, {
            slidesPerView: 3, //每页显示几张图片
            //direction: "vertical", // 垂直切换选项
            //loop: true, // 循环模式选项

            // 如果需要分页器
            // pagination: {
            // el: ".swiper-pagination",
            // clickable: true,
            // },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            //scrollbar: {
            //  el: ".swiper-scrollbar",
            //},
          });
        });
      },     
    },
  },
  mounted() {
    //this.$bus.$emit('selectImage',this.skuImageList[0].imgUrl)
    //console.log(this.skuImageList[0].imgUrl)
  },
};
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