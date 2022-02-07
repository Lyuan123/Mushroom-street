<template>
  <header-bar style="position:relitive">
      <div slot="left" class="back" @click="backClick()"> 
          <img src="~assets/img/common/back.svg" alt="">
      </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles" 
      :key="index" 
      class="title-item" 
      :class="{active: index === currentIndex}"
      @click="titleClick(index)"
      >
        {{ item}}
      </div>
    </div>
  </header-bar>
</template>

<script>
import HeaderBar from "components/Header/Header.vue";
export default {
  components: {
    HeaderBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
      titleClick(index){
          this.currentIndex = index;
          this.$emit('titleClick',index);
      },
      backClick(){
          this.$router.back(-1)
      }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active{
    color: var(--color-high-text);
}
.back img{
    margin-top: 11px;
}
</style>