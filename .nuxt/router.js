import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ad0c5206 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _0327a96a = () => interopDefault(import('../pages/konfigurator.vue' /* webpackChunkName: "pages/konfigurator" */))
const _7d907356 = () => interopDefault(import('../pages/lista.vue' /* webpackChunkName: "pages/lista" */))
const _b8b4218a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _8c99526a = () => interopDefault(import('../pages/maxstone-konfigurator.vue' /* webpackChunkName: "pages/maxstone-konfigurator" */))
const _4c0367b8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _ad0c5206,
    name: "home"
  }, {
    path: "/konfigurator",
    component: _0327a96a,
    name: "konfigurator"
  }, {
    path: "/lista",
    component: _7d907356,
    name: "lista"
  }, {
    path: "/login",
    component: _b8b4218a,
    name: "login"
  }, {
    path: "/maxstone-konfigurator",
    component: _8c99526a,
    name: "maxstone-konfigurator"
  }, {
    path: "/",
    component: _4c0367b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
