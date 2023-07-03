<!--
 * @Author: 段本显
 * @FilePath: \Vue3\src\pages\home\index.vue
 * @Date: 2023-07-02 11:07:22
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-02 12:22:23
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
-->
<template>
  <main>
    <h1>{{ text }}</h1>
    <DemoButton @click="handleCommand">translate</DemoButton>
    <img src="@assets/images/logo.png" />
    <h1 id="count">count is {{ count }}</h1>
    <h2 id="double_count">double count is {{ doubleCount }}</h2>
    <div class="btn-group">
      <DemoButton id="inc_btn" @click="countState.increment">inc</DemoButton>
      <DemoButton id="dec_btn" @click="countState.reduce">dec</DemoButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCountState } from '@stores';
import { DemoButton } from '@components';
// import { useQuery } from '@tanstack/vue-query';
// import { getUser } from '@apis';
// import { User } from '@models';
const { t: $t } = useI18n();

defineOptions({
  name: 'HomeComponent',
});
const { locale } = useI18n({ useScope: 'global' });
const text = ref($t('home.index.044325-0'));
const handleCommand = () => {
  if (locale.value === 'zhCN') locale.value = 'enUS';
  else locale.value = 'zhCN';

  localStorage.setItem('language', locale.value as string);
  // window.location.reload();
};
const countState = useCountState();
const { count, doubleCount } = storeToRefs(countState);
// const user: User = {
//   userName: 'dbx',
//   age: 18,
// };
// const { data } = useQuery({
//   queryKey: ['/getuser'],
//   queryFn() {
//     return getUser(user);
//   },
// });
</script>

<style scoped>
@import './index.css';
</style>
