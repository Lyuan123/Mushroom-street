<template>
  <div id="home">
    <header-bar class="home-nav">
      <div slot="center">购物街</div>
    </header-bar>
     <TabControl
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control"
        v-show="isTabFixed"
      />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommer-view :recommends="recommends" />
      <FeatureView />
      <TabControl
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <good-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "../../components/TabBar/TabBar.vue";
import HeaderBar from "../../components/Header/Header.vue";

import HomeSwiper from "./childComponents/homeSwiper.vue";
import RecommerView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/FeatureView.vue";
import TabControl from "components/tabControl/TabControl.vue";
import GoodList from "components/goods/GoodsList";
import Scroll from "components/scroll/Scroll";
import { getHomeMultidata, getHomeGoods } from "network/home";
import BackTop from "../../components/backtop/BackTop.vue";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY)
    this.$refs.scroll.refresh()
    // console.log(this.saveY);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    console.log(this.saveY);
    
  },
  
  
  components: {
    Tabbar,
    HeaderBar,
    HomeSwiper,
    RecommerView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  created() {
    //1.请求我们多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
   
  },
  mounted() {
    //1.监听item中图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh)
     this.$bus.$on('itemImageLoad',() =>{
       refresh()
    })
  },
  
  methods: {
      debounce(func, delay) {
        let timer = null 
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },
    loadMore(){
      this.getHomeGoods(this.currentType)

      this.$refs.scroll.refresh() 
    },  
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //事件监听方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex =index
      this.$refs.tabControl2.currentIndex =index
    },
    contentScroll(position) {
      // 判断backtop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 判断tabcontrol是否吸顶
      this.isTabFixed =(-position.y) > this.tabOffsetTop
    },
    swiperImageLoad(){
      
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    //网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        // console.log(res.data);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
#home {
  padding-top: 43px;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  z-index: 1;
  position: relative;
}
</style>