<template>
  <div>
    <div id="tab-bar">
      <div class="tab-bar-item" @click="homeClick()">
        <img v-if="!ishome" src="../../assets/img/tabbar/home.svg" alt="" />
        <img v-else src="../../assets/img/tabbar/home_active.svg" alt="" />
        <div :class="{ active: ishome }">首页</div>
      </div>
      <div class="tab-bar-item" @click="categoryClick()">
        <img
          path="./category"
          v-if="!isActive"
          src="../../assets/img/tabbar/category.svg"
          alt=""
        />
        <img v-else src="../../assets/img/tabbar/category_active.svg" alt="" />
        <div :class="{ active: isActive }">分类</div>
      </div>
      <div class="tab-bar-item" @click="shopcartClick()">
        <img
          v-if="!iscart"
          src="../../assets/img/tabbar/shopcart.svg"
          alt=""
        />
        <img v-else src="../../assets/img/tabbar/shopcart_active.svg" alt="" />
        <div :class="{ active: iscart }">购物车</div>
      </div>
      <div class="tab-bar-item" @click="profileClick()">
        <img
          v-if="!isprofile"
          src="../../assets/img/tabbar/profile.svg"
          alt=""
        />
        <img v-else src="../../assets/img/tabbar/profile_active.svg" alt="" />
        <div :class="{ active: isprofile }">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
      isActive(){
          return this.$route.path=="/category"
      },
      ishome(){
           return this.$route.path==("/")
      },
      iscart(){
          return this.$route.path==("/cart")
      },
      isprofile(){
           return this.$route.path==("/profile")
      }
  },
  methods: {
    categoryClick() {
      if (this.$route.path !== "/category") {
        this.$router.replace("/category");
      }
    },
    homeClick() {
      if (this.$route.path !== "/") {
        this.$router.replace("/");
      }
    },
    shopcartClick() {
      if (this.$route.path !== "/cart") {
        this.$router.replace("/cart");
      }
    },
    profileClick() {
      if (this.$route.path !== "/profile") {
        this.$router.replace("/profile");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: rgb(243, 74, 102);
}
</style>