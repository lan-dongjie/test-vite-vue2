import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/index.vue'),
  },
  {
    name: 'second',
    path: '/second',
    component: () => import('@/views/second.vue'),
  },
];
const router = new VueRouter({
  base: '/',
  routes,
});
export default router;
