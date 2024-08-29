<template>
  <div class="container">
    <!--顶部全局组件-->
    <hospital-top/>
    <!--展示路由组件区域-->
    <div class="content">
      <router-view/>
    </div>
    <!--底部全局组件-->
    <hospital-bottom/>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
    background-color: #ffffff;
  }

}

</style>