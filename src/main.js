import Vue from 'vue'
import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
