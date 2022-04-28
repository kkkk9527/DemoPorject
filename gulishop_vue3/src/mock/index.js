import Mock from 'mockjs'
import Banner from './banner.json'
import Floor from './floor.json'

Mock.mock('/mock/banner', { code: 200, data: Banner });
Mock.mock('/mock/floor', { code: 200, data: Floor });