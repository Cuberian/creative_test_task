import Vue from 'vue'
import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store'
import router from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
