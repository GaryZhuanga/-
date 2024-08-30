<script setup lang="ts">
import {Search} from "@element-plus/icons-vue"
import { ref } from "vue"
import {reqHospitalInfo} from "@/api/home/index.ts"
import{hospitalInfo,Content} from "@/api/home/type.ts"
import { useRouter } from "vue-router"
//创建路由器对象
let $router=useRouter()

let hosname= ref<string>('')
const fetchdata= async (keyword: string ,cb:any)=> {
  let result=await reqHospitalInfo(keyword)
  let showData=result.data.map(item=> {
      return {
        value: item.hosname,// 显示的医院名字
        hoscode:item.hoscode//存储医院编号
      }
  })
  cb(showData)
}
function goDatail(){
  $router.push({path:'/hosptial'})
}
</script>

<template>
  <div class="search">
    <div class="box">
        <el-autocomplete clearable placeholder="请输入医院名称" v-model="hosname" :fetch-suggestions="fetchdata" @select="goDatail" />
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