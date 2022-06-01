import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";
import { nanoid } from "nanoid";
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
            let head = sessionStorage.getItem('userTempId');
            const token = sessionStorage.getItem('token')||localStorage.getItem('token')||'';
            if (head==null) {
                head = nanoid();
                sessionStorage.setItem('userTempId', head);
            }
            if (config.headers) {
                config.headers['userTempId'] = head;
                config.headers['token'] = token;
            }
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use((response: AxiosResponse) => {
            // 对响应数据做点什么
            const { data, status } = response;
            const { msg } = data;
            // console.log(response)
            if (status === 200) {
                return response;
            } else {
                // alert(msg);
                return Promise.reject(msg)
            }
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });

    }
}


export interface ResponseData {
    code: number;
    data?: any
    msg: string
}
export default HttpRequest;