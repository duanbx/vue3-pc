import { createI18n } from 'vue-i18n';

const navigatorLang = navigator.language.toLowerCase();
let locale = '';
if (navigatorLang.indexOf('zh') >= 0) locale = 'zhCN';
else if (navigatorLang.indexOf('en') >= 0) locale = 'enUS';

locale = localStorage.getItem('language') || locale;

const i18n = createI18n({
  // something vue-i18n options here ...
  globalInjection: true,
  locale, // set locale
  legacy: false,
  fallbackLocale: 'zhCN', // set fallback locale
});

export default i18n;
