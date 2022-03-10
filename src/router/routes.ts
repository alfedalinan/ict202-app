import { RouteRecordRaw } from 'vue-router';

import Login from "pages/Login.vue";

import AuthLayout from "layouts/AuthLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/login',
    component: AuthLayout,
    children: [
      { path: '', component: Login, name: 'Login' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
