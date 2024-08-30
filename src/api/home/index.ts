//统一管理首页模块接口
import request from '../../utils/request.ts';
import type {hospitalInfo, HospitalResponseData, reqHospital_level_region_ResponseData} from '@/api/home/type.ts'
enum API {
    //获取已有医院数据接口
    HOSPITAL_URL='/hosp/hospital/',
    //获取医院和地区的接口
    HOSPITAL_LEVEL_REGION_URL=`/cmn/dict/findByDictCode/`,
    //根据关键字搜索医院接口
    HOSPITALINFO_URL=`/hosp/hospital/findByHosname/`
}
//获取医院列表
export const reqHospital =(page:number,limit:number,hostype:string='',districtCode:string='')=> {
    return request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
}
//获取医院等级或者地区
export const reqHospital_level_region = (dictCode:string)=>{
        return request.get<reqHospital_level_region_ResponseData>(API.HOSPITAL_LEVEL_REGION_URL+dictCode)
    }
//获取医院关键字搜索
export const reqHospitalInfo = (hosname:string)=>{
    return request.get<any,hospitalInfo>(API.HOSPITALINFO_URL+hosname)
}