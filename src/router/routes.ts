import { RouteRecordRaw } from 'vue-router';

import Login from "pages/Login.vue";
import Dashboard from "pages/Dashboard.vue";
import RecordAdd from "pages/records/Add.vue";
import RecordList from "pages/records/List.vue";

import AuthLayout from "layouts/AuthLayout.vue";
import DefaultLayout from "layouts/DefaultLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: Dashboard, name: "Dashboard" }
    ],
  },
  {
    path: '/login',
    component: AuthLayout,
    children: [
      { path: '', component: Login, name: 'Login' }
    ]
  },
  {
    path: '/records/list',
    component: DefaultLayout,
    children: [
      { path: '', component: RecordList, name: 'List of Records' }
    ]
  },
  {
    path: '/records/add',
    component: DefaultLayout,
    children: [
      { path: '', component: RecordAdd, name: 'Add Record' }
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
