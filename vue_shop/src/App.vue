<template>
  <div id="app"> 
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'

}
</script>

<style>
.png_type{
  width: 100%;
  height: 100vh;
  /*顾名思义*/
  background-size: 100% 100%;
  /*自适应屏幕大小*/
  position: fixed;

}
</style>
