/*
 * @Author: 段本显
 * @FilePath: \Vue3\src\stores\count.ts
 * @Date: 2023-06-30 21:14:28
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-01 14:50:54
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
import { defineStore } from 'pinia';

export const useCountState = defineStore('count', {
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count =
        process.env.IS_E2E === 'true' ? this.count + 2 : this.count + 1;
    },
    reduce() {
      this.count =
        process.env.IS_E2E === 'true' ? this.count - 2 : this.count - 1;
    },
  },
});
