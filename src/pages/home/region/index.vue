<script setup lang="ts">

</script>

<template>
  <div class="region ">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li class="active">全部</li>
        <li>东城区</li>
        <li>西城区</li>
        <li>朝阳区</li>
        <li>丰台区</li>
        <li>石景山区</li>
        <li>海淀区</li>
        <li>门头沟区</li>
        <li>房山区</li>
        <li>通州区</li>
        <li>顺义区</li>
        <li>昌平区</li>
        <li>大兴区</li>
        <li>怀柔区</li>
        <li>平谷区</li>
        <li>密云区</li>
        <li>延庆区</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.region {
  margin-top: 10px;
  color:#7f7f7f;
  h1{
    font-weight:900;
    margin:10px 0px;
  }
  .content{
    display:flex;
    .left{
      margin-right: 10px;
      min-width:49px
    }
    ul{
      display:flex;
      flex-wrap:wrap;
      li{
        margin-right:10px;
        margin-bottom:10px;
        &.active{
          color:#55a6fe;
        }
      }
      li:hover{
        color:#55a6fe;
      }
    }
  }
}
</style>