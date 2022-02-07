<template>
  <div class="cart">
    <header-bar class="header-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </header-bar>
      <cart-list/>
      <cart-bottom-bar></cart-bottom-bar>
      <Tabbar/>
  </div>
</template>

<script>

import Tabbar from '../../components/TabBar/TabBar.vue'
import HeaderBar from '../../components/Header/Header.vue'
import CartList from './components/cartList.vue'
import CartBottomBar from './components/CartBottomBar.vue'
import {mapGetters} from 'vuex'
export default {
components:{
    Tabbar,
    HeaderBar,
    CartList,
    CartBottomBar
},
computed:{
  // cartLength(){
  //   return this.$store.getters.cartLength
  // },
  ...mapGetters(['cartLength'])
},
}
</script>

<style>
.cart{
  height: 100vh;  
}
.header-bar{
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
.cart{
  width: 100%;
}
</style>