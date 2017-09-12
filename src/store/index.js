import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  state,
  mutations,
  actions,
});
