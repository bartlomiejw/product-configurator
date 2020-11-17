import Vue from 'vue';
import VueRouter from 'vue-router';
import FllowCalc from '../views/FllowCalc.vue';
import MaxstoneCalc from '../views/MaxstoneCalc.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fllow-calc',
    name: 'FllowCalc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FllowCalc,
  },
  {
    path: '/maxstone-calc',
    name: 'MaxstoneCalc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MaxstoneCalc,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
