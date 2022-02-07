<template>
  <div id="detail">
    <Header class="detail-header" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
    <!-- <div v-for="item in $store.state.cartList" :key="item.iid">{{item}}</div> -->
      <detail-swipter :top-images="topImages" />
      <detail-base :goods="goods" />
      <detailshopInfo :shop="shop" />
      <dataInfo :detail-info="detailInfo" @imageLoad="imageLoad" />
      <DetailParamInfo :paramInfo="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import detailSwipter from "./components/detailSwiper.vue";
import detailBase from "./components/DetailBaseInfo.vue";
import detailshopInfo from "./components/DetailShopInfo.vue";
import dataInfo from "./components/DetailGoodsInfo.vue";
import DetailParamInfo from "./components/DetailParamInfo.vue";
import DetailCommentInfo from "./components/DetailCommentInfo.vue";
import GoodsList from "components/goods/GoodsList.vue";
import DetailBottomBar from "./components/DetailBottomBar.vue";
import Header from "./components/detailHeader.vue";
import BackTop from "../../components/backtop/BackTop.vue";
import Scroll from "components/scroll/Scroll";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0,
      isShowBackTop: false,
    };
  },
  components: {
    Header,
    detailSwipter,
    detailBase,
    detailshopInfo,
    Scroll,
    dataInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },

  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //1.获取顶部的轮播数据
      console.log(res.result);
      const data = res.result;
      let arr =[]
      let img = data.itemInfo.topImages
      for(let i=0;i<img.length;i++){
        arr[i]='http:'+img[i]
      }
      let add =arr
      console.log(add,"asda");
      this.topImages = add;
      console.log(this.topImages);

      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3.创建店铺信息对象
      this.shop = new Shop(data.shopInfo);

      //4.保存商品的详细数据
      this.detailInfo = data.detailInfo;

      //5.获取我们的参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //7.取出我们的评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  methods: {
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 40);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 40);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 40);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      //1.获取y值
      const positionY = -position.y;
      //2.positionY与主题中的值进行对比
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        // if(positionY > this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[i+1]){
        //
        // }
        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY >= this.themeTopYs[parseInt(i)] &&
            positionY < this.themeTopYs[i + 1]) ||
          (i === length - 1 && positionY > this.themeTopYs[i])
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    contentScroll(position) {
      // 判断backtop是否显示
      this.isShowBackTop = -position.y > 1000;
    },
       backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    addToCart(){
      //获取购物车需要展示的信息
      const product ={}
      product.image  = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      //2.将商品加入购物车
      // this.$store.cartList.push(product)
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart', product).then((res) => {
        // console.log(res);
        this.$toast.show(res)
      })

    }
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
}
.detail-header {
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>