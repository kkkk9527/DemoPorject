//API配置文件
import requests from "./request"

//三级联动接口
export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}