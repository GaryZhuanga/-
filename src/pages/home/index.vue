<script setup lang="ts">
import {onMounted} from 'vue'
import {reqHospital} from '@/api/home/index.ts'
import carouser from './carousel/index.vue'
import search from './search/index.vue'
import level from './level/index.vue'
import region from './region/index.vue'
import card from './card/index.vue'
//引入分页器所要的数据
import {ref} from 'vue'
//当前页数
let pageNo = ref<Number>(1)
let page_size = ref<Number>(10)
let hospHospList = ref([])
//存储医院总数
let total = ref(0)

onMounted(() => {
  getHospitalInfo()
})
//获取医院信息的方法
const getHospitalInfo = async () => {
  let result: any = await reqHospital(pageNo.value, page_size.value)
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
        <level/>
        <!--地区子组件-->
        <region/>
        <!--首页推荐医院结构-->
        <div class="hospital">
          <card class="item" v-for="(item,index) in hospHospList" :key="index" :hospitalInfo="item"/><!--首页推荐医院结构-->
        </div>
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
