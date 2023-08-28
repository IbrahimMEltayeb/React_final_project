import axios from "axios";


export const StoreInterceptor = axios.create()

StoreInterceptor.interceptors.request.use((config)=>{
    config.headers['code'] = "React store for tech"
    console.log(config)
    console.log('Request Interceptor Runs')
    return config
})


