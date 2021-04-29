<template>
<div>
<!--  给按钮增加一个click方法-->
  <el-button type="primary" round @click="logout">退出</el-button>

</div>
</template>

<script>
export default {
  //增加一个方法，再方法里面放置logout @click 操作
methods:{
  logout(){
    window.sessionStorage.clear()
    this.$router.push('/login')
  }
}
};
</script>

<style Lang="less" scoped>

</style>