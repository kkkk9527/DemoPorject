//API配置文件
import requests from "./request"
import mockRequest from './mockAjax'


//连接后台服务器获取三级菜单数据
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')
    //搜索商品数据
export const searchInfo = (params) => requests.post('/list', params);

export const getGoodsInfo = (params) => requests({
    method: 'get',
    url: `/item/${params}`,
});
//请求添加到购物车数据
export const addToCart = (params) => requests.post(`/cart/addToCart/${params.skuId}/${params.skuNum}`, params);
// 获取购物车数据
export const reqCardList = () => requests.get(`/cart/cartList`);
//删除购物车中的数据
export const deletCardList = (params) => requests.delete(`/cart/deleteCart/${params.skuId}`);
//修改购物车选中状态
export const checkCart = (params) => requests.get(`/cart/checkCart/${params.skuId}/${params.isChecked}`);
//请求Home轮播图地址
export const reqBannerList = () => mockRequest.get('/banner');
//请求floor组件轮播图地址
export const reqFloorList = () => mockRequest.get('/floor');