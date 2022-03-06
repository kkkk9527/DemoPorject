<template>
  <div class="type-nav">
    <div class="container" @mouseleave="mouseLeave">
      <h2 class="all" @mouseenter="showList">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="showAnime">
        <div class="sort" v-show="show">
          <div class="all-sort-list2">
            <div
              class="item bo"
              v-for="(c1, categoryId) in categorylist.categoryList"
              :key="categoryId"
              @mouseenter="mouseEnter(categoryId)"
              :class="{ changeColor: currentIndex == categoryId }"
              @click="goSearch($event, categoryId)"
            >
              <h3>
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <div
                class="item-list clearfix"
                v-show="currentIndex == categoryId"
              >
                <div
                  class="subitem"
                  v-for="(c2, categoryId) in c1.categoryChild"
                  :key="categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, categoryId) in c2.categoryChild"
                        :key="categoryId"
                      >
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
//import{mapMutations} from 'vuex'
import throttle from "loadsh/throttle";
export default {
  name: "Nav",
  data() {
    return {
      currentIndex: -1,
      show: true,
      /*
      searchData: {
        category1Id: "2",
          //一级id
        category2Id: "", 
          //二级id
        category3Id: "",  
         //三级id
        categoryName: "",
        //商品种类
        keyword: "",
        //关键字
        order: "",  
        //排序
        pageNo: 1,
        //代表第几页
        pageSize: 10,
        //每页展示的数据数量
        props: [],
        //平台给商品的信息
        trademark: "",
        //品牌
      },
      */
    };
  },
  computed: {
    categorylist() {
      return this.$store.state.Home;
    },
  },
  methods: {
    // mouseEnter(categoryId) {
    // this.currentIndex = categoryId;
    // },
    /**防止过快触发请求 */
    mouseEnter: throttle(function (categoryId) {
      this.currentIndex = categoryId;
    }, 50),
    mouseLeave() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
    /** 可以使用element.dataset获取元素自定义标签*/
    goSearch(event) {
      let element = event.target; //获取目标元素
      let { categoryname, category1id, category2id, category3id } =
        element.dataset; //获取目标元素自定义属性
      if (categoryname) {
        //let local = { path: "/Search" };
        let local = "Search";
        // let query = {
        // categoryName: categoryname,
        // };
        //let Query1 = this.$route.query; //获取当前路由中的query参数
        let query = JSON.parse(JSON.stringify(this.$route.query)); //保留原本路由中的参数
        query.categoryName = categoryname; //获取当前路由中的query参数
        //query对象赋值
        if (category1id) {
          query.category1Id = category1id;
          query.category2Id = undefined;
          query.category3Id = undefined;
        } else if (category2id) {
          query.category1Id = undefined;
          query.category2Id = category2id;
          query.category3Id = undefined;
        } else {
          query.category1Id = undefined;
          query.category2Id = undefined;
          query.category3Id = category3id;
        }
        this.$store.commit("Search/MERGEDATA", query); //将query中的数据添加到vuex中
        this.$router.push({ name: local, query: query });
        console.log(this.$route.query);
        // 调用查询服务器方法
        this.$store.dispatch("Search/SearchInfo");
        this.$bus.$emit('addCategoryName',categoryname)
      }
    },
    showList() {
      this.show = true;
    },
  },
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
};
</script>

<style scoped lang='less'>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          //&:hover{
          //  background-color: rgb(135,206,235);
          //}
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          .isShow {
            display: block;
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .changeColor {
          background-color: rgb(135, 206, 235);
        }
      }
    }
    .showAnime-enter,
    .showAnime-leave-to {
      height: 0px;
      opacity: 0;
    }
  }
  .showAnime-enter-to,
  .showAnime-leave {
    height: 461px;
    opacity: 1;
  }
  .showAnime-enter-active,
  .showAnime-leave-active {
    transition: all 0.5s linear;
  }
}
</style>