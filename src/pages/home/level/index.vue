<script setup lang="ts">
import {reqHospital_level_region} from "@/api/home/index.ts";
import {reqHospital_level_region_Arr} from "@/api/home/type.ts";
import {onMounted,ref} from "vue";
//获取医院等级数据
let level_Arr=ref<reqHospital_level_region_Arr[]>([])
//组件挂载完毕
onMounted(() => {
  getlevel()
})
const getlevel= async ()=> {
   let result= await reqHospital_level_region('hosType')
   if(result.code === 200) {
     level_Arr.value = result.data
   }
}


//控制医院等级响应式数据
let activeFlag=ref<string>("")

//切换等级,回传给父亲组件
const changeLevel= (level:string)=> {
  activeFlag.value=level
  $emit('getLevel',level)
}
let $emit=defineEmits(['getLevel'])
</script>

<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul>
        <li :class="{active:activeFlag==''}" @click="changeLevel('')" >全部</li>
        <li v-for="level in level_Arr" :key="level.value" @click="changeLevel(level.value)" :class="{active:activeFlag==level.value}" >{{level.name}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.level {
  color:#7f7f7f;
  h1{
    font-weight:900;
    margin:10px 0px;
  }
  .content{
    display:flex;
   .left{
     margin-right: 10px;
   }
    ul{
      display:flex;
      li{
        margin-right:10px;
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