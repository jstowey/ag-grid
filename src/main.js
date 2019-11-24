import Vue from 'vue';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
