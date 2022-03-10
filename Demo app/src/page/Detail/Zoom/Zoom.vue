<template>
  <div class="spec-preview">
    <img :src="imgurl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgurl" ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      imgurl: "",
    };
  },
  props: ["skuImageList"],
  methods: {
    handler(event) {
      //console.log(1);
      let Mask = this.$refs.mask; //获取遮罩板
      let Big=this.$refs.big; //获取放大镜
      let left=event.offsetX-Mask.offsetWidth/2; 
      let top=event.offsetY-Mask.offsetHeight/2;
      if(left<0) left=0;
      if(left>=Mask.offsetWidth) left=Mask.offsetWidth;
      if(top<0) top=0;
      if(top>=Mask.offsetHeight) top=Mask.offsetHeight;
      Mask.style.left=left+'px';
      Mask.style.top=top+'px';
      Big.style.left=-2*left+'px';
      Big.style.top=-2*top+'px';
    },
  },
  watch: {
    skuImageList() {
      this.imgurl = this.skuImageList[0].imgUrl;
    },
  },
  mounted() {
    this.$bus.$on("selectImage", (url) => {
      this.imgurl = url;
    });
  },
};
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