/*
 * @Author: 段本显
 * @FilePath: \Vue3\src\main.ts
 * @Date: 2023-06-30 21:14:28
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-02 12:00:35
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */

import { VueQueryPlugin } from '@tanstack/vue-query';
import axios from 'axios';
import '@theme/global.scss';
import App from './App.vue';
import { router } from '@routes';
import queryClient from './queryClinet';
import i18n from '@i18n';
import '@theme/index.scss';

const app = createApp(App);
app
  .use(router)
  .use(i18n)
  .use(createPinia())
  .use(VueQueryPlugin, { queryClient });

Promise.all([
  axios.get('./lang/zh_CN.json'),
  axios.get('./lang/en_US.json'),
]).then((res) => {
  i18n.global.mergeLocaleMessage('zhCN', res[0].data);
  i18n.global.mergeLocaleMessage('enUS', res[1].data);
  app.mount('#app');
});
