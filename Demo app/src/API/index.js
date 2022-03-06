//API配置文件
import requests from "./request"
import mockRequest from './mockAjax'


//连接后台服务器获取三级菜单数据
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')
    //搜索商品数据
export const searchInfo = (params) => requests.post('/list', params);

export const reqBannerList = () => mockRequest.get('/banner');

export const reqFloorList = () => mockRequest.get('/floor');