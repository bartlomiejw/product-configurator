import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  apolloProvider: createProvider(),

  created() {
    document.title = 'Fllow.pl - kalkulator produktu';
  },
}).$mount('#app');
