//对于axios函数库进行二次封装
//为什么要二次封装
//1.利用axios请求,响应拦截器功能
//2.请求拦截器,可以在请求头中携带公共参数:token
//3.响应拦截器,可以简化服务器返回的数据,处理http网络错误
import axios from "axios";
import {ElMessage} from "element-plus";
//利用axios.create方法创建一个axios示例,可以设置基础路径,超时时间设置
const request=axios.create({
    baseURL:'/api',//基础路径设置
    timeout:5000,
})
//请求拦截器
request.interceptors.request.use((config)=>{
    //config:请求拦截器回调注入的对象,配置对象最重要的事件是headers,可以设置公共请求头
    //可以通过请求头携带公共参数--token
    return config;
})
request.interceptors.response.use((response)=>{
    //响应拦截器成功的回调
    return response.data;
},(error)=>{
    //响应拦截器失败的回调
    let status = error.response.status;
    console.log(error);
    switch (status) {
        case 400:
            ElMessage({
                type: 'error',
                message:"请求错误(400)",
            })
            break;
        case 401:
            ElMessage({
                type: 'error',
                message:"未授权，请登录(401)",
            })
            break;
        case 403:
            ElMessage({
                type: 'error',
                message:"拒绝访问(403)",
            })
            break;
        case 404:
            ElMessage({
               type: 'error',
               message:"请求的资源不存在(404)",
           })
            break;
    }
    return Promise.reject(new Error(error.message));

})
export default request;