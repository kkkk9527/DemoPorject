import axios, { ResponseData } from "./index";
import { AxiosPromise } from "axios";
import config from "@/config";
const baseUrl = config.api.baseUrl;
const baseUrl1 = config.api.baseUrl1;
/* 获取三级菜单 */
export const getBaseCategoryList = (data?: any): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + '/product/getBaseCategoryList',
    data,
    method: 'GET'
  })
};
/* 获取商品列表 */
export const getGoodList = (data?: any): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + '/list',
    data,
    method: 'post'
  })
};
/* 获取商品详细信息 */
export const getGoodInformation = (skuId: number): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/item/${skuId}`,
    method: 'get'
  })
};
/* 获取轮播图地址 */
export const getBannerList = (data?: any): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl1 + '/banner',
    data,
    method: 'get'
  })
};
/* 获取轮播图地址 */
export const getFloorList = (data?: any): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl1 + '/floor',
    data,
    method: 'get'
  })
};