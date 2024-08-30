<script setup lang="ts">
import {onMounted} from 'vue'
import {reqHospital} from '@/api/home/index.ts'
import carouser from './carousel/index.vue'
import search from './search/index.vue'
import level from './level/index.vue'
import region from './region/index.vue'
import card from './card/index.vue'
import type {Content, HospitalResponseData} from '@/api/home/type.ts'
//引入分页器所要的数据
import {ref} from 'vue'
//当前页数
let pageNo = ref<Number>(1)
//每页显示的数量
let page_size = ref<Number>(10)
//存储医院列表数据
let hospHospList = ref<Content>([])
//存储医院总数
let total = <number>ref(0)
//存储医院的等级相应数据
let hostype = ref<string>('')
//存储医院的地区相应数据
let districtCode = ref<string>('')

onMounted(() => {
  getHospitalInfo()
})

//获取医院信息的方法
const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHospital(pageNo.value, page_size.value, hostype.value, districtCode.value)
  //获取已有医院的数据
  if (result.code === 200) {
    hospHospList.value = result.data.content
    total.value = result.data.totalElements
  }
}

//分页器页码发送改变时的处理函数
function curren_change() {
  getHospitalInfo()
}

//分页器页码发生变化是回调
function size_change() {
  getHospitalInfo()
}

//获取等级
function getLevel(level: string) {
  hostype.value = level
  getHospitalInfo()
}

//获取地区
function getRegion(region: string) {
  districtCode.value = region
  getHospitalInfo()
}
</script>

<template>
  <div>
    <!--  首页轮播图结构-->
    <carouser/>
    <!--  首页搜索结构-->
    <search/>
    <!--  首页推荐结构-->
    <el-row gutter="20">
      <el-col :span="20">
        <!--等级子组件-->
        <level @getLevel="getLevel"/>
        <!--地区子组件-->
        <region @getRegion="getRegion"/>
        <!--首页推荐医院结构-->
        <div class="hospital" v-if="hospHospList.length>0">
          <card class="item" v-for="(item,index) in hospHospList" :key="index" :hospitalInfo="item"/><!--首页推荐医院结构-->
        </div>
        <el-empty v-else description="没有找到相关医院"/>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <el-pagination class="pagination"
                   v-model:current-page="pageNo"
                   v-model:page-size="page_size"
                   :page-sizes="[5,10,20]"
                   :background="true"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="total"
                   @currentChange="curren_change"
                   @size-change="size_change"
    />
  </div>
</template>
<style scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0px;
  }
}

.pagination {
  margin-top: 20px;
}

</style>
