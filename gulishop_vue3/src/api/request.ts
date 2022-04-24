import axios, { ResponseData } from "./index";
import { AxiosPromise } from "axios";
import config from "@/config";
const baseUrl = config.api.baseUrl;

export const getBaseCategoryList = (data?: any): AxiosPromise<ResponseData> => {
    return axios.requests({
        url: baseUrl + '/product/getBaseCategoryList',
        data,
        method: 'GET'
    })
}