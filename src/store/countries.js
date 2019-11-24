import Vue from 'vue';
import Vuex from 'vuex';
import countries from '../assets/countries.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries,
  },
  mutations: {
    updateRowData(state, data) {
      state.countries = data;
    },
  },
  actions: {
    updateRowData(context, data) {
      context.commit('updateRowData', data);
    },
  },
});
