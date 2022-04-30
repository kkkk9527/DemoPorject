<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseover="showlist()">全部商品分类</h2>
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
      <div class="sort" v-show="show" @mouseleave="notShowList()">
        <div class="all-sort-list2">
          <div
            class="item bo"
            v-for="category in baseCategoryList"
            :key="category.categoryId"
            @click="searchCategory($event)"
          >
            <h3>
              <a
                :data-category1Id="category.categoryId"
                :data-categoryName="category.categoryName"
                >{{ category.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix">
              <div
                class="subitem"
                v-for="subCategory in category.categoryChild"
                :key="subCategory.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-category2Id="subCategory.categoryId"
                      :data-categoryName="subCategory.categoryName"
                      >{{ subCategory.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em
                      v-for="subSubCategory in subCategory.categoryChild"
                      :key="subSubCategory.categoryId"
                    >
                      <a
                        :data-category3Id="subSubCategory.categoryId"
                        :data-categoryName="subSubCategory.categoryName"
                        >{{ subSubCategory.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "Nav",
  setup() {
    let store = useStore(),
      router = useRouter(),
      route = useRoute(),
      show = ref(true), //判断是否显示导航列表的属性
      obj1 = {};
    onMounted((): void => {
      if (route.path != "/home") {
        show.value = false;
      }
      /* 获取目录 */
      store.dispatch("home/GetBaseCategoryList");
    });
    function notShowList(): void {
      if (route.path != "/home") {
        show.value = false;
      }
    }
    function showlist(): void {
      show.value = true;
    }
    /* 跳转到Search页面 */
    function searchCategory(event: any): void {
      let obj = event.target.dataset,
        { category1id, category2id, category3id, categoryname } = obj;
      if (categoryname) {
        if (category1id) {
          obj1 = {
            categoryName: categoryname,
            category1Id: category1id,
          };
        } else if (category2id) {
          obj1 = {
            categoryName: categoryname,
            category2Id: category2id,
          };
        } else if (categoryname && category3id) {
          obj1 = {
            categoryName: categoryname,
            category3Id: category3id,
          };
        }
        router.push({
        name: "search",
        query: obj1,
      });
      }
    }

    return {
      notShowList,
      showlist,
      show,
      // categoryList,
      searchCategory,
      baseCategoryList: computed(() => {
        return store.state.home.List || [];
      }),
    };
  },
  methods: {},
});
</script>

<style lang='less' scoped>
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
            display: none;
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

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>