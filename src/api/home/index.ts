//统一管理首页模块接口
import request from '../../utils/request.ts';
enum API {
    HOSPITAL_URL='/hosp/hospital/'
}
//获取医院列表
export const reqHospital =(page:number,limit:number)=> {
    return request.get(API.HOSPITAL_URL+`${page}/${limit}`)
}