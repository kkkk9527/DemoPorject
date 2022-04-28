import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";
// import config from '@/config'

// const api=config.api.baseUrl;

class HttpRequest {
    //baseUrl: string;
    // constructor(public baseUrl:string = api) {
    //     this.baseUrl = baseUrl;
    // }
    public requests(options: AxiosRequestConfig): AxiosPromise {
        const instance: AxiosInstance = axios.create();
        //options = this.mergeConfig(options);
        //this.interceptors(instance, options.url)
        this.interceptors(instance)
        return instance(options);

    }
    // private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig { // 这个方法用于合并基础路径配置和接口单独配置
    //     return Object.assign({ baseUrl: this.baseUrl }, options);
    // }
    private interceptors(instance: AxiosInstance) {
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use((response: AxiosResponse) => {
            // 对响应数据做点什么
            const { data } = response;
            const { code, msg } = data;
            if (code === 200) {
                return data;
            } else {
                alert(msg);
            }
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });

    }
}

// const requests = axios.create({
//     baseURL: '/api',
//     timeout: 5000
// });
export interface ResponseData{
    code:number;
    data?:any
    msg:string
}
export default HttpRequest;