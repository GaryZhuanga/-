<script setup lang="ts">

</script>

<template>
  <div class="search">
    <div class="box">
      <el-autocomplete clearable placeholder="请输入医院名称"/>
    </div>
    <el-button type="primary" size="default" icon="search">搜索</el-button>
  </div>
</template>
<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;

  .box {
    width: 600px;
    margin-right: 10px;
  }
}
</style>