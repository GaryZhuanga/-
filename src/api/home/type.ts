//定义首页模块数据类型
export interface ResponseData {
    code: number;
    message: string;
    ok: boolean;
}

//代表已有的医院数据的ts类型
export interface Hospital{
    id: string;
    createTime: string;
    updateTime: string;
    isDelete: number;
    param:{
        hostypeString: string;
        fullAddress: string;
    }
    hostcode: string;
    hostname: string;
    hosttype: string;
    provinceCode: string;
    cityCode: string;
    districtCode: string;
    address: string;
    logoDate: string;
    intro: string;
    route: string;
    status: number;
    bookingRule:{
        cycle: number;
        releaseTime: string;
        stopTime: string;
        quitDay: number;
        quitTime: string;
        rule:Array<string>;
    }
}
//存储全部已有医院的数组类型
export type Content=Hospital[];
//获取已有医院接口返回数据类型
export interface HospitalResponseData extends ResponseData {
    data:{
        content: Content;
        "pageable": {
            "sort": {
                "sorted": boolean,
                "unsorted": boolean,
                "empty": boolean
            },
            "pageNumber": number,
            "pageSize": number,
            "offset": number,
            "paged": boolean,
            "unpaged": boolean
        },
        "totalPages":number,
        "totalElements": number,
        "last": boolean,
        "first": boolean,
        "sort": {
            "sorted": boolean,
            "unsorted": boolean,
            "empty": boolean
        },
        "numberOfElements": number,
        "size": number,
        "number": number,
        "empty": boolean
    }
}


//获取医院等级，地区数据ts类型
export interface reqHospital_level_region {
    "id": number;
    "createTime":string;
    "updateTime":string;
    "isDeleted": number;
    "param": {},
    "parentId": number;
    "name": string
    "value": string
    "dictCode": string
    "hasChildren": boolean
}
//获取医院等级或者地区的返回数组类型
export type reqHospital_level_region_Arr = reqHospital_level_region[]
//获取医院等级或者地区的接口返回数据类型
export interface reqHospital_level_region_ResponseData extends ResponseData {
    data: reqHospital_level_region_Arr
}

export interface hospitalInfo extends ResponseData{
    data:Hospital[];
  //date:Content;

}