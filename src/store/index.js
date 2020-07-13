import Vue from 'vue';
import Vuex from 'vuex';
import loginHistory from './modules/loginHistory';
import main from './modules/main';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginHistory,
    main,
  }
})