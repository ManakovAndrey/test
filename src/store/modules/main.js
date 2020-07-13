const state = {
  isLogin: false,
};

const getters = {
};

const mutations = {
  SET_OFFER_DATA(state, data) {
    state.offerData = data;
  },
};

const actions = {
};


export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};