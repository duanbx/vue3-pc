/*

 * @Author: 段本显
 * @FilePath: \Vue3\types\axios.d.ts
 * @Date: 2023-07-01 15:58:58
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-01 16:07:26
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare module 'axios' {
  export interface AxiosRequestConfig {
    noSQ?: boolean;
    loading?: boolean;
  }
}
