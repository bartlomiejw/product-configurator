export { default as Cookies } from '../../components/Cookies.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Add } from '../../components/crud/Add.vue'
export { default as Edit } from '../../components/crud/Edit.vue'

export const LazyCookies = import('../../components/Cookies.vue' /* webpackChunkName: "components/Cookies" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyAdd = import('../../components/crud/Add.vue' /* webpackChunkName: "components/crud/Add" */).then(c => c.default || c)
export const LazyEdit = import('../../components/crud/Edit.vue' /* webpackChunkName: "components/crud/Edit" */).then(c => c.default || c)
