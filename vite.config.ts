/*
 * @Author: 段本显
 * @FilePath: \Vue3\vite.config.ts
 * @Date: 2023-06-30 21:14:28
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-02 11:54:26
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import postcssNest from 'postcss-nesting';
import postcssPresetEnv from 'postcss-preset-env';
import eslint from '@nabla/vite-plugin-eslint';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import jsxPlugin from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import VueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  base: './',
  plugins: [
    VueDevTools(),
    vue(),
    jsxPlugin(),
    eslint({
      eslintOptions: {
        cache: false,
      },
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
          // directives: true,
          // version: "2.1.5",
        }),
      ],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'vue-i18n', 'pinia'],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@theme/var.scss" as *;',
      },
    },
    postcss: {
      plugins: [
        postcssNest(),
        postcssPresetEnv({
          stage: 3,
          autoprefixer: {
            flexbox: 'no-2009',
          },
        }),
      ],
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  esbuild: {
    legalComments: 'none',
  },
  build: {
    target: browserslistToEsbuild(),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: {
          vueVendor: ['vue', 'vue-router'],
        },
      },
    },
  },
  test: {
    include: ['src/**/*.{test, spec}.{js,jsx,ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  resolve: {
    alias: {
      '@theme': '/src/theme',
      '@assets': '/src/assets',
      '@routes': '/src/routes',
      '@apis': '/src/apis',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@stores': '/src/stores',
      '@models': '/src/models',
      '@utils': '/src/utils',
      '@i18n': '/src/i18n',
    },
  },
});
