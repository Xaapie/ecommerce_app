//payment actions
import mutations from "./mutations";

const state = () => ({
  status: false,
});

const getters = {
  get_status(state) {
    return state.status;
  },
};

const actions = {
  setStatus({ commit }, data) {
    commit("SET_PAYMENT_STATUS", data);
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
