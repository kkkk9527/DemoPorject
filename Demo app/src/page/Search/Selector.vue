<template>
  <div>
    <!--bread-->
    <div class="bread">
      <ul class="fl sui-breadcrumb">
        <li>
          <a href="#">全部结果</a>
        </li>
      </ul>
      <ul class="fl sui-tag">
        <li class="with-x" v-for="(prop, index) in breadData" :key="index">
          {{ prop }}<i @click="removeProp(prop)">×</i>
        </li>
        <li class="with-x" v-show="keyWord">
          {{ keyWord }}<i @click="removeKeyWord">×</i>
        </li>
        <li class="with-x" v-show="categoryName">
          {{ categoryName }}<i @click="removeCategoryName">×</i>
        </li>
      </ul>
    </div>
    <!--selector-->
    <div class="clearfix selector">
      <div class="type-wrap logo">
        <div class="fl key brand">品牌</div>
        <div class="value logos">
          <ul class="logo-list">
            <li v-for="trademark in trademarkList" :key="trademark.tmId" @click="chooseLogo(trademark.tmName,trademark.tmId)">
              {{ trademark.tmName }}
            </li>
          </ul>
        </div>
        <div class="ext">
          <a href="javascript:void(0);" class="sui-btn">多选</a>
          <a href="javascript:void(0);">更多</a>
        </div>
      </div>
      <div
        class="type-wrap"
        v-for="attribute in attrsList"
        :key="attribute.attrId"
      >
        <div class="fl key">{{ attribute.attrName }}</div>
        <div class="fl value">
          <ul class="type-list">
            <li
              v-for="(childAttribute, index) in attribute.attrValueList"
              :key="index"
            >
              <a
                @click="
                  chooseItem(
                    attribute.attrId,
                    attribute.attrName,
                    childAttribute
                  )
                "
                >{{ childAttribute }}</a
              >
            </li>
          </ul>
        </div>
        <div class="fl ext"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Selector",
  data() {
    return {
      //存储selector列表中的属性
      props: [],
      //存储面包屑数据
      breadData: [],
      keyWord:'',
      categoryName:'',
    };
  },
  methods: {
    //选择列表子属性并向后台请求数据
    chooseItem(attrId, attribute, childAttribute) {
      let str = `${attrId}:${childAttribute}:${attribute}`; //拼接子属性
      this.props.unshift(str);
      this.breadData.unshift(childAttribute);
      //console.log(this.props)
    },
    removeProp(prop) {
      /**首先判断删除的prop属性是logo还是其他属性 */
      let count=this.props.length;
      //不是logo
      for (let i = 0; i < this.props.length; i++) {
        if(this.props[i].indexOf(prop) != -1){
          this.props.splice(i,1);
        }
      }
      //是logo
      if (this.props.length==count) {
        let searchData={trademark:undefined};
        this.$store.commit("Search/MERGEDATA", searchData); //向vuex中添加数据
        this.$store.dispatch("Search/SearchInfo");          //使用vuex向后台请求数据
      }
      this.breadData.splice(this.breadData.indexOf(prop), 1);
    },
    chooseLogo(trademark,id){
      this.breadData.unshift(trademark); //向bread中添加logo信息
      let str=`${id}:${trademark}`;  //拼接子属性
      let searchData={trademark:str};
      this.$store.commit("Search/MERGEDATA", searchData); //向vuex中添加数据
      this.$store.dispatch("Search/SearchInfo");          //使用vuex向后台请求数据
    },
    removeKeyWord(){
      this.keyWord=undefined;
      let query=JSON.parse(JSON.stringify(this.$route.query)) //获取路由参数
      query.keyword=undefined;    //修改路由参数
      let searchData = {keyword:undefined};
      this.$router.push({name:'Search',query:query}); //重新跳转路由
      this.$store.commit("Search/MERGEDATA", searchData);
      this.$store.dispatch("Search/SearchInfo");
    },
    removeCategoryName(){
      this.categoryName=undefined;
      let query=JSON.parse(JSON.stringify(this.$route.query)) //获取路由参数
      query.categoryName=undefined;    //修改路由参数
      query.category1Id=undefined;    //修改路由参数
      let searchData = {categoryName:undefined,category1Id:undefined};
      this.$router.push({name:'Search',query:query}); //重新跳转路由
      this.$store.commit("Search/MERGEDATA", searchData);
      this.$store.dispatch("Search/SearchInfo");
    }
  },
  computed: {
    ...mapGetters("Search", ["trademarkList", "attrsList"]),
  },
  watch: {
    //监视props属性，请求服务器数据
    props() {
      let searchData = {};
      if (this.props.length == 0) {
        searchData = { props: undefined };
      } else {
        searchData = { props: this.props };
      }
      this.$store.commit("Search/MERGEDATA", searchData);
      this.$store.dispatch("Search/SearchInfo");
    },
  },
  mounted() {
      this.$bus.$on('addKeyWord',(val)=>{
        this.keyWord=val;
      });
      this.$bus.$on('addCategoryName',(val)=>{
        this.categoryName=val;
      });
    },
};
</script>

<style lang="less" scoped>
.bread {
  margin-bottom: 5px;
  overflow: hidden;
  .sui-breadcrumb {
    padding: 3px 15px;
    margin: 0;
    font-weight: 400;
    border-radius: 3px;
    float: left;
    li {
      display: inline-block;
      line-height: 18px;
      a {
        color: #666;
        text-decoration: none;
        &:hover {
          color: #4cb9fc;
        }
      }
    }
  }
  .sui-tag {
    margin-top: -5px;
    list-style: none;
    font-size: 0;
    line-height: 0;
    padding: 5px 0 0;
    margin-bottom: 18px;
    float: left;
    .with-x {
      font-size: 12px;
      margin: 0 5px 5px 0;
      display: inline-block;
      overflow: hidden;
      color: #000;
      background: #f7f7f7;
      padding: 0 7px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #dedede;
      white-space: nowrap;
      transition: color 400ms;
      cursor: pointer;
      i {
        margin-left: 10px;
        cursor: pointer;
        font: 400 14px tahoma;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      &:hover {
        color: #28a3ef;
      }
    }
  }
}
.selector {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  overflow: hidden;
  .logo {
    border-top: 0;
    margin: 0;
    position: relative;
    overflow: hidden;
    .key {
      padding-bottom: 87px !important;
    }
  }
  .type-wrap {
    margin: 0;
    position: relative;
    border-top: 1px solid #ddd;
    overflow: hidden;
    .key {
      width: 100px;
      background: #f1f1f1;
      line-height: 26px;
      text-align: right;
      padding: 10px 10px 0 15px;
      float: left;
    }
    .value {
      overflow: hidden;
      padding: 10px 0 0 15px;
      color: #333;
      margin-left: 120px;
      padding-right: 90px;
      .logo-list {
        li {
          float: left;
          border: 1px solid #e4e4e4;
          margin: -1px -1px 0 0;
          width: 105px;
          height: 52px;
          text-align: center;
          line-height: 52px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
          color: #e1251b;
          font-style: italic;
          font-size: 14px;
          img {
            max-width: 100%;
            vertical-align: middle;
          }
        }
      }
      .type-list {
        li {
          float: left;
          display: block;
          margin-right: 30px;
          line-height: 26px;
          a {
            text-decoration: none;
            color: #666;
          }
        }
      }
    }
    .ext {
      position: absolute;
      top: 10px;
      right: 10px;
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
        padding: 0 10px;
        background: #fff;
        border: 1px solid #d5d5d5;
      }
      a {
        color: #666;
      }
    }
  }
}
</style>