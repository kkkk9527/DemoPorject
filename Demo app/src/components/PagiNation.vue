<template>
  <div class="pagination">
    <button @click="choosePage('prev')">上一页</button>
    <button v-show="startNumAndEndNum.start != 1" @click="choosePage(1)">
      1
    </button>
    <button v-show="startNumAndEndNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-show="page >= startNumAndEndNum.start"
      @click="choosePage(page)"
      :class="{ showColor: page == pageNo }"
    >
      {{ page }}
    </button>

    <button v-show="startNumAndEndNum.end != totalPages">···</button>
    <button
      v-show="startNumAndEndNum.end != totalPages"
      @click="choosePage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button @click="choosePage('next')">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "PagiNation", //分页器组件
  props: ["pageNo", "pageSize", "total", "continues", "totalPages"],
  computed: {
    startNumAndEndNum() {
      //分页计算条件
      let start = 0,
        end = 0;
      if (this.totalPages < this.continues) {
        start = 1;
        end = this.totalPages;
      } else {
        start = this.pageNo - parseInt(this.continues / 2);
        end = this.pageNo + parseInt(this.continues / 2);
      }
      if (start < 1 && this.totalPages >= this.continues) {
        start = 1;
        end = this.continues;
      }
      if (end > this.totalPages) {
        start = this.totalPages - this.continues + 1;
        end = this.totalPages;
      }
      return { start, end };
    },
  },
  methods: {
    //选择页数
    choosePage(page) {
      //若当前页数大于1且选择prev时
      if (this.pageNo > 1 && page == "prev") {
        this.choosePage(this.pageNo - 1);
        //若当前页数小于总页数且选择next时
      } else if (this.pageNo < this.totalPages && page == "next") {
        this.choosePage(this.pageNo + 1);
      }
      //若当前页数小于1且选择prev时
      if (page == "prev") {
        page = this.pageNo - 1;
        if (page < 1) {
          page = 1;
        }
        //若当前页数大于总页数且选择next时
      } else if (page == "next") {
        page = this.pageNo + 1;
        if (page > this.totalPages) {
          page = this.totalPages;
        }
      }
      if (this.$route.path == "/center/myorder") {
        this.$store.dispatch("OrderAndPay/GetMyOrder", { page, limit: 3 });
      } else {
        let SearchData = { pageNo: page }; //获取当前页数
        let query = JSON.parse(JSON.stringify(this.$route.query));
        query.pageNo = page;
        this.$router.push({ name: "Search", query: query });
        this.$store.commit("Search/MERGEDATA", SearchData);
        this.$store.dispatch("Search/SearchInfo");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  .showColor {
    background-color: chocolate;
  }
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>