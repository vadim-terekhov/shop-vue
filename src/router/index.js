import Vue from 'vue';
import VueRouter from 'vue-router';

import Catalog from '@/views/Catalog.vue';
import Basket from '@/views/Basket.vue';
import Favorit from '@/views/Favorit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/ex6/",
    name: 'catalog',
    component: Catalog,
  },
  {
    path: '/ex6/basket',
    name: 'basket',
    component: Basket,
  },
  {
    path: '/ex6/favorit',
    name: 'favorit',
    component: Favorit,
  }
];

export default new VueRouter({
  mode: 'history',
  routes,  
});