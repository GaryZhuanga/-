<script setup lang="ts">

</script>

<template>
  <el-carousel height="350px">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="../../../static/images/web-banner-1.png" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
img{
  width: 100%;
  height: 350px;
}
</style>