//cart actions
import mutations from "./mutations";

const state = () => ({
  cart: [],
});

const getters = {
  get_cart(state) {
    return state.cart;
  },
};

const actions = {
  addItem({ commit }, data) {
    commit("ADD_ITEM", data);
  },
  removeItem({ commit }, id) {
    commit("REMOVE_ITEM", id);
  },
  incrementQty({ commit }, data) {
    commit("INCREMENT_QTY", data);
  },
  decrementQty({ commit }, data) {
    commit("DECREMENT_QTY", data);
  },
  clearCart({ commit }) {
    commit("CLEAR_CART");
  },
  changePrice({ commit }, data) {
    commit("CHANGE_PRICE", data);
  },
};

export default {
  namespaced: false,
  state,
  mutations,
  getters,
  actions,
};
