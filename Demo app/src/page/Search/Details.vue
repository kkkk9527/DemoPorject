<template>
  <div class="details clearfix">
    <div class="sui-navbar">
      <div class="navbar-inner filter">
        <ul class="sui-nav">
          <li :class="{ active: isOne }" @click="chooseSortMode(1)">
            <a
              >综合<span
                v-show="isOne"
                class="iconfont"
                :class="{ 'icon-down': isDesc, 'icon-up': isAsc }"
              ></span
            ></a>
          </li>
          <li :class="{ active: isTwo }" @click="chooseSortMode(2)">
            <a
              >价格<span
                v-show="isTwo"
                class="iconfont"
                :class="{ 'icon-down': isDesc, 'icon-up': isAsc }"
              ></span
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods-list">
      <ul class="yui3-g">
        <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
          <div class="list-wrap">
            <div class="p-img">
              <a href="item.html" target="_blank"
                ><img :src="goods.defaultImg"
              /></a>
            </div>
            <div class="price">
              <strong>
                <em>¥</em>
                <i>{{ goods.price }}</i>
              </strong>
            </div>
            <div class="attr">
              <a target="_blank" href="item.html">{{ goods.title }}</a>
            </div>
            <div class="commit">
              <i class="command">已有<span>2000</span>人评价</i>
            </div>
            <div class="operate">
              <a
                href="success-cart.html"
                target="_blank"
                class="sui-btn btn-bordered btn-danger"
                >加入购物车</a
              >
              <a href="javascript:void(0);" class="sui-btn btn-bordered"
                >收藏</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="fr page">
      <div class="sui-pagination clearfix">
        <ul>
          <li class="prev disabled">
            <a href="#">«上一页</a>
          </li>
          <li class="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li class="dotted"><span>...</span></li>
          <li class="next">
            <a href="#">下一页»</a>
          </li>
        </ul>
        <div><span>共10页&nbsp;</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Details",
  data() {
    return {
      order: "1:desc",
    };
  },
  methods: {
    /*
    chooseSortModeOne() {
      //判断当前是以什么条件排序
      if (this.order.indexOf("2") != -1) {
        this.order = "1:desc";
      } else {
        this.order = this.order.indexOf("desc") == -1 ? "1:desc" : "1:asc";
      }
      let query = JSON.parse(JSON.stringify(this.$route.query));
      let local='Search';
      //let searchData = { order: this.order };
      this.$router.push({name:local,query:query})
      //this.$store.commit("Search/MERGEDATA", searchData); //向vuex中添加数据
      //this.$store.dispatch("Search/SearchInfo"); //使用vuex向后台请求数据
    },
    chooseSortModeTwo() {
      //判断当前是以什么条件排序
      if (this.order.indexOf("1") != -1) {
        this.order = "2:desc";
      } else {
        this.order = this.order.indexOf("desc") == -1 ? "2:desc" : "2:asc";
      }
      let query = JSON.parse(JSON.stringify(this.$route.query));
      let local='Search';
      //let searchData = { order: this.order };
      this.$router.push({name:local,query:query});
      console.log()
      //this.$store.commit("Search/MERGEDATA", searchData); //向vuex中添加数据
      //this.$store.dispatch("Search/SearchInfo"); //使用vuex向后台请求数据
    },
    */
    chooseSortMode(flag) {
      //判断Number类型的flag状态
      let Order = this.order.split(":"); //将this.order拆分为数组并赋值给Order
      if (flag != Order[0]) {//判断Order[0]与flag是否相等
        Order[0] = flag;
      } else {
        if (Order[1].indexOf("desc") != -1) {//判断Order[0]是升序还是降序
          Order[1] = "asc";
        } else {
          Order[1] = "desc";
        }
      }
      this.order = Order.join(":");
      let searchData={order:this.order};
      let query = JSON.parse(JSON.stringify(this.$route.query));
      this.$router.push({name:'Search',query:query});
      this.$store.commit("Search/MERGEDATA", searchData); //向vuex中添加数据
      this.$store.dispatch("Search/SearchInfo"); //使用vuex向后台请求数据
    },
  },
  computed: {
    ...mapGetters("Search", ["goodsList"]),
    //判断该给哪个排序选项添加背景色
    isOne() {
      return this.order.indexOf("1") != -1;
    },
    isTwo() {
      return this.order.indexOf("2") != -1;
    },
    //判断添加哪个方向的箭头
    isDesc() {
      return this.order.indexOf("desc") != -1;
    },
    isAsc() {
      return this.order.indexOf("asc") != -1;
    },
  },
};
</script>

<style lang="less" scoped>
.details {
  margin-bottom: 5px;
  .sui-navbar {
    overflow: visible;
    margin-bottom: 0;
    .filter {
      min-height: 40px;
      padding-right: 20px;
      background: #fbfbfb;
      border: 1px solid #e2e2e2;
      padding-left: 0;
      border-radius: 0;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
      .sui-nav {
        position: relative;
        left: 0;
        display: block;
        float: left;
        margin: 0 10px 0 0;
        li {
          float: left;
          line-height: 18px;
          a {
            display: block;
            cursor: pointer;
            padding: 11px 15px;
            color: #777;
            text-decoration: none;
          }
          &.active {
            a {
              background: #e1251b;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .goods-list {
    margin: 20px 0;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        height: 100%;
        width: 20%;
        margin-top: 10px;
        line-height: 28px;
        .list-wrap {
          .p-img {
            padding-left: 15px;
            width: 215px;
            height: 255px;
            a {
              color: #666;
              img {
                max-width: 100%;
                height: auto;
                vertical-align: middle;
              }
            }
          }
          .price {
            padding-left: 15px;
            font-size: 18px;
            color: #c81623;
            strong {
              font-weight: 700;
              i {
                margin-left: -5px;
              }
            }
          }
          .attr {
            padding-left: 15px;
            width: 85%;
            overflow: hidden;
            margin-bottom: 8px;
            min-height: 38px;
            cursor: pointer;
            line-height: 1.8;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            a {
              color: #333;
              text-decoration: none;
            }
          }
          .commit {
            padding-left: 15px;
            height: 22px;
            font-size: 13px;
            color: #a7a7a7;
            span {
              font-weight: 700;
              color: #646fb0;
            }
          }
          .operate {
            padding: 12px 15px;
            .sui-btn {
              display: inline-block;
              padding: 2px 14px;
              box-sizing: border-box;
              margin-bottom: 0;
              font-size: 12px;
              line-height: 18px;
              text-align: center;
              vertical-align: middle;
              cursor: pointer;
              border-radius: 0;
              background-color: transparent;
              margin-right: 15px;
            }
            .btn-bordered {
              min-width: 85px;
              background-color: transparent;
              border: 1px solid #8c8c8c;
              color: #8c8c8c;
              &:hover {
                border: 1px solid #666;
                color: #fff !important;
                background-color: #666;
                text-decoration: none;
              }
            }
            .btn-danger {
              border: 1px solid #e1251b;
              color: #e1251b;
              &:hover {
                border: 1px solid #e1251b;
                background-color: #e1251b;
                color: white !important;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
  .page {
    width: 733px;
    height: 66px;
    overflow: hidden;
    float: right;
    .sui-pagination {
      margin: 18px 0;
      ul {
        margin-left: 0;
        margin-bottom: 0;
        vertical-align: middle;
        width: 490px;
        float: left;
        li {
          line-height: 18px;
          display: inline-block;
          a {
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            border: 1px solid #e0e9ee;
            margin-left: -1px;
            font-size: 14px;
            padding: 9px 18px;
            color: #333;
          }
          &.active {
            a {
              background-color: #fff;
              color: #e1251b;
              border-color: #fff;
              cursor: default;
            }
          }
          &.prev {
            a {
              background-color: #fafafa;
            }
          }
          &.disabled {
            a {
              color: #999;
              cursor: default;
            }
          }
          &.dotted {
            span {
              margin-left: -1px;
              position: relative;
              float: left;
              line-height: 18px;
              text-decoration: none;
              background-color: #fff;
              font-size: 14px;
              border: 0;
              padding: 9px 18px;
              color: #333;
            }
          }
          &.next {
            a {
              background-color: #fafafa;
            }
          }
        }
      }
      div {
        color: #333;
        font-size: 14px;
        float: right;
        width: 241px;
      }
    }
  }
}
</style>