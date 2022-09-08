import axios from './request';

//首页数据接口
export const getHomeData=()=>{
  return axios.get('/public/mock/home.json') 
}

//商店数据接口
export const getStoreData=()=>{
  return axios.get('/public/mock/store.json') 
}