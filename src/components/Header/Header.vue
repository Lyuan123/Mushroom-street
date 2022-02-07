<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style scoped>
.nav_bar {
  display: flex;
  line-height: 44px;
  text-align: center;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 9;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>