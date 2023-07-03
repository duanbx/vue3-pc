<!--
 * @Author: 段本显
 * @FilePath: \Vue3\src\App.vue
 * @Date: 2023-06-30 21:14:28
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-02 12:21:23
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
-->
<template>
  <el-config-provider :locale="locale">
    <RouterView :key="(i18nLocal as string)" />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCN from 'element-plus/lib/locale/lang/zh-cn';
import enUS from 'element-plus/lib/locale/lang/en';

defineOptions({
  name: 'App',
});

const { locale: i18nLocal } = useI18n({ useScope: 'global' });
const locale = ref(i18nLocal.value === 'zhCN' ? zhCN : enUS);
watch(i18nLocal, (value) => {
  locale.value = value === 'zhCN' ? zhCN : enUS;
});
</script>
<style lang="scss">
.box {
  // background-color: $color-info;
  color: red;
  margin: 20px;
  // @include border('', red);
}
</style>
