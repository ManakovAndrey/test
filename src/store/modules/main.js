// import mainApi from '@/api/mainApi';
import { tryLogin } from '@/api/mockRequests';

const state = {
  isLogin: false,
};

const getters = {
};

const mutations = {
  SET_LOGIN_STATE(state, data) {
    state.isLogin = data;
  },
};

const actions = {
  // eslint-disable-next-line
  async tryLogin({commit, dispatch}, payload) {
    // try {
    //   await mainApi.post('logIn', {
    //     login: payload.login,
    //     password: payload.password,
    //   });
    // } catch (e) {
    //   console.log('error: ', e);
    // }
    try {
      await tryLogin( payload.login, payload.password);
      dispatch('loginHistory/addLoginAttempt', 'success', { root: true })
      commit('SET_LOGIN_STATE', true)
    } catch (e) {
      dispatch('loginHistory/addLoginAttempt', 'error', { root: true })
      throw 'error';
    }
  },
  logout({ commit }) {
    commit('SET_LOGIN_STATE', false);
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};