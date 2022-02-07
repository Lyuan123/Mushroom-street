<template>
<div class="detail-swiper">
    <swiper class="swiperad">
        <swiper-item v-for="item in topImages" :key="item" >
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</div>
</template>

<script>
import { Swiper, SwiperItem } from "components/swiper";
export default {
  components: {
      Swiper,
      SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.swiperad{
    height: 300px;
    padding-top:40px
}
</style>