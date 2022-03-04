//API配置文件
import requests from "./request"
import mockRequest from './mockAjax'


//三级联动接口,连接后台服务器获取数据
export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}


export const reqBannerList = () => mockRequest.get('/banner');