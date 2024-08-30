<script setup lang="ts">
import {reqHospital_level_region} from "@/api/home/index.ts";
import {reqHospital_level_region_Arr} from "@/api/home/type.ts";
import {onMounted,ref} from "vue";
//获取医院等级数据
let region_Arr=ref<reqHospital_level_region_Arr[]>([])
//组件挂载完毕
onMounted(() => {
  getRegion()
})
const getRegion = async ()=> {
  let result= await reqHospital_level_region('Beijin')
  if(result.code === 200) {
    region_Arr.value = result.data
  }
}
//控制医院等级响应式数据
let activeFlag=ref<string>("")
const change_region = (region:string)=> {
  activeFlag.value=region
  $emit('getRegion', region)
}

let $emit=defineEmits(['getRegion'])
</script>

<template>
  <div class="region ">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li :class="{active:activeFlag==''}"  @click="change_region('') ">全部</li>
        <li v-for="region in region_Arr" :key="region.value"  @click="change_region(region.value)" :class="{active:activeFlag==region.value}" >{{region.name}}</li>
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