import axios, { ResponseData } from "./index";
import { AxiosPromise } from "axios";
import config from "@/config";
const baseUrl = config.api.baseUrl;
const baseUrl1 = config.api.baseUrl1;

export const getBaseCategoryList = (data?: any): AxiosPromise<ResponseData> => {
    return axios.requests({
        url: baseUrl + '/product/getBaseCategoryList',
        data,
        method: 'GET'
    })
};

export const getBannerList=(data?:any):AxiosPromise<ResponseData>=>{
  return axios.requests({
    url:baseUrl1+'/banner',
    data,
    method:'get'  
  })
};

export const getFloorList=(data?:any):AxiosPromise<ResponseData>=>{
  return axios.requests({
    url:baseUrl1+'/floor',
    data,
    method:'get'  
  })
};