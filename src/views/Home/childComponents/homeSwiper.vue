<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.length">
        <a :href="item.link">
          <img :src="item.image" alt=""  @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/swiper";
export default {
  data() {
    return {
      isload: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      if(!this.isload){
          this.$emit('swiperImageLoad');
          this.isload=true  
      }
    
    },
  },
};
</script>

<style>
</style>