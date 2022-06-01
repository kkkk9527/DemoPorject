import axios, { ResponseData } from "./index";
import { AxiosPromise } from "axios";
import config from "@/config";
import { string } from "yup";
const baseUrl = config.api.baseUrl;
const baseUrl1 = config.api.baseUrl1;
/* 数据约束接口 */
// 购物车数据接口
interface GoodData {
  skuId: number,
  skuNum: number
}
// 注册数据接口
interface registerData {
  phone: string,
  password: string,
  code: string
}
// 登录数据接口
export interface loginData {
  phone: string,
  password: string
}
// 修改购物车商品数量
export interface ChangeData {
  skuId: string,
  skuNum: string
}
/* *************** */
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
/* 添加到购物车 */
export const addGoodToCart = (goodData: GoodData): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/cart/addToCart/${goodData.skuId}/${goodData.skuNum}`,
    method: 'post'
  })
};
/* 获取购物车 */
export const getCartList = (): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/cart/cartList`,
    method: 'get'
  })
};
/* 修改购物车商品数量 */
export const changeCartList = (changeData: ChangeData): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/cart/addToCart/${changeData.skuId}/${changeData.skuNum}`,
    method: 'post'
  })
};
/* 删除购物车商品 */
export const deleteCartGood = (skuId: string): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/cart/deleteCart/${skuId}`,
    method: 'delete'
  })
};
/* 获取验证码 */
export const getCode = (phone: string): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/user/passport/sendCode/${phone}`,
    method: 'get'
  })
};
/* 注册 */
export const register = (data: registerData): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/user/passport/register`,
    data,
    method: 'post'
  })
};
/* 登录 */
export const login = (data: loginData): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/user/passport/login`,
    data,
    method: 'post'
  })
};
/* 获取用户信息 */
export const getUserInfo = (): AxiosPromise<ResponseData> => {
  return axios.requests({
    url: baseUrl + `/user/passport/auth/getUserInfo`,
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