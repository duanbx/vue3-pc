/*
 * @Author: 段本显
 * @FilePath: \Vue3\src\apis\index.ts
 * @Date: 2023-07-01 15:39:40
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-01 15:55:17
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
import axios from 'axios';

export * from './request';

const instance = axios.create({
  baseURL: '/',
  timeout: 30 * 1000,
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default instance;
