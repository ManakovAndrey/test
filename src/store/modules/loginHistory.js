const state = {
  loginAttempts: [],
};

const getters = {
};

const mutations = {
  SET_LOGIN_ATTEMPT(state, type) {
    state.loginAttempts.push({ text: `Попытка авторизации: ${type === 'success' ? 'Успех' : 'Неудача'}; Дата: ${new Date()}`, type });
  },
  CLEAR_LOGIN_ATTEMPTS(state) {
    state.loginAttempts = [];
  },
};

const actions = {
  addLoginAttempt({commit}, payload) {
    commit('SET_LOGIN_ATTEMPT', payload);
  },
  clearLoginAttempts({commit}) {
    commit('CLEAR_LOGIN_ATTEMPTS');
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};