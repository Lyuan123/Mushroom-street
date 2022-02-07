import axios from 'axios'
export function request(config){
    //创建一个axios实例
    const instance =axios.create({
        baseURL:'http://152.136.185.210:7878/api/hy66',
        timeout:5000
    })
    //axios拦截器
    instance.interceptors.request.use(config =>{
        // console.log(config);
        return config
    },err =>{
        console.log(err);
    })
    //响应拦截
    instance.interceptors.response.use(res =>{
        // console.log(res);
        return res.data
    },err => {
        console.log(err);
    })
   //真正请求数据
    return instance(config)
}