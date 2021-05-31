import { defineConfig } from '@fejs/fe';
import { join } from 'path';

export default defineConfig({
  extraBabelIncludes: [
    join(__dirname, '../config'),
  ],
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
