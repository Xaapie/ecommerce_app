//product actions
import mutations from "./mutations";
import { db } from "../../../firebase";
import {
  query,
  collection,
  getDocs,
  collectionGroup,
} from "firebase/firestore";

const state = {
  products: [],
};

const getters = {
  get_products(state) {
    return state.products;
  },
};

const actions = {
  async getProducts({ commit }) {
    const querySnap = await getDocs(query(collection(db, "products")));
    let allProducts = [];
    querySnap.forEach((doc) => {
      allProducts.push(doc.data());
    });
    commit("SET_PRODUCTS", allProducts);
  },
  async getMultiPaymentDiscount(context, id) {
    const discounts = query(collection(db, `products/${id}/multipayment`));
    const querySnapshot = await getDocs(discounts);
    let allDiscounts = [];
    querySnapshot.forEach((doc) => {
      allDiscounts.push(doc.data());
    });
    return allDiscounts;
  },
  async getFlavours(context, id) {
    const discounts = query(collection(db, `products/${id}/flavours`));
    const querySnapshot = await getDocs(discounts);
    let allDiscounts = [];
    querySnapshot.forEach((doc) => {
      allDiscounts.push(doc.data());
    });
    return allDiscounts;
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
