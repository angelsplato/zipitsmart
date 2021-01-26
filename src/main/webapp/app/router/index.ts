import Vue from 'vue';
import { Store } from 'vuex';
import Component from 'vue-class-component';
import AccountService from '../account/account.service';
import * as config from '../shared/config/config';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);
import Router from 'vue-router';
import router from '../router';
const Merchant = () => import('@/core/merchants/merchant.vue');
const Home = () => import('@/core/home/home.vue');
const Error = () => import('@/core/error/error.vue');
import account from '@/router/account.ts';
import admin from '@/router/admin.ts';
import entities from '@/router/entities.ts';
import pages from '@/router/pages.ts';
config.initVueApp(Vue);
config.initFortAwesome(Vue);
Vue.use(Router);
const store = config.initVueXStore(Vue);
const accountService = new AccountService(store, router);
export default new Router({

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/merchant',
      name: 'Merchant',
      component: Merchant
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    ...account,
    ...admin,
    ...entities,
    ...pages
  ]
});
