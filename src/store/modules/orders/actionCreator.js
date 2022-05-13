//order actions
import mutations from "./mutations";
import { db, auth } from "../../../firebase/index";
import { getDocs, query, collection, orderBy } from "firebase/firestore";
const state = {
  orders: [],
};

const getters = {
  get_orders(state) {
    return state.orders;
  },
};

const actions = {
  async getOrders({ commit }) {
    const querySnap = await getDocs(
      query(
        collection(db, `users/${auth.currentUser.uid}/orders`),
        orderBy("order_date", "desc")
      )
    );
    let allOrders = [];
    querySnap.forEach((doc) => {
      allOrders.push(doc.data());
    });
    commit("SET_ORDERS", allOrders);
  },
  async getOrder(context, nbr) {
    let id_order = "OrderNum_" + nbr;
    const querySnap = await getDocs(
      query(
        collection(
          db,
          `users/${auth.currentUser.uid}/orders/${id_order}/products`
        )
      )
    );
    let allProducts = [];
    querySnap.forEach((doc) => {
      allProducts.push(doc.data());
    });
    return allProducts;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
