import { defineConfig } from '@fejs/fe';
import { join } from 'path';

export default defineConfig({
  extraBabelIncludes: [
    join(__dirname, '../config'),
  ],
  base: process.env.NODE_ENV === 'production' ? '/eslint-config-magic/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/eslint-config-magic/' : '/',
  routes: [
    {
      path: '/',
      component: '@/layouts/BlankLayout',
      routes: [
        {
          name: 'App',
          path: '/',
          component: './App.tsx',
        },
      ],
    },
  ],
  entry: 'app'
});
