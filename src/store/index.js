import { createStore } from 'vuex'
import auth from './modules/auth/actionCreator'
import products from './modules/products/actionCreator'
import cart from './modules/cart/actionCreator'
import payment from './modules/payment/actionCreator'
import orders from './modules/orders/actionCreator'
import createPersistedState from "vuex-persistedstate";
import contact from './modules/contact/actionCreator'
const items = createPersistedState({
  paths: ['products','cart', 'auth', 'orders', 'userInfo']
})

export default createStore({
  modules: {
    auth,
    products,
    cart,
    payment,
    orders,
    contact
  },
  plugins: [items]
})
