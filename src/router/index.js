import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NotFound from "../views/NotFound.vue";
import { auth } from "../firebase";
import store from "../store/index";

//routes to different pages
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (auth.currentUser) {
        if (auth.currentUser.emailVerified) {
          next("/");
        }
      }
      next();
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user) {
        if (store.state.auth.user.emailVerified) {
          next("/");
        }
      }
      next();
    },
  },
  {
    path: "/shop/:id?",
    name: "Shop",
    component: () => import("../views/Shop.vue"),
    params: true,
  },
  {
    path: "/product-details/:id",
    name: "ProductDetails",
    component: () => import("../views/ProductDetails.vue"),
    params: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    beforeEnter: (to, from, next) => {
      if (auth.currentUser) {
        if (auth.currentUser.emailVerified) {
          next();
        }
      }
      next("/");
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutUs.vue"),
  },
  {
    path: "/terms-conditions",
    name: "TermsConditions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TermsConditions.vue"),
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../views/Success.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("status")) {
        next("/");
      }
      next();
    },
  },
  {
    path: "/failed",
    name: "Failed",
    component: () => import("../views/Failed.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("status")) {
        next("/");
      }
      next();
    },
  },
  {
    path: "/disposables",
    name: "Disposables",
    component: () => import("../views/Disposables.vue"),
  },
  {
    path: "/delivery-information",
    name: "DeliveryInformation",
    component: () => import("../views/DeliveryInformation.vue"),
  },
  {
    path: "/wholesale",
    name: "Wholesale",
    component: () => import("../views/Wholesale.vue"),
  },
  {
    path: "/return-policy",
    name: "Policy",
    component: () => import("../views/Policy.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/ForgotPassword.vue"),
    beforeEnter: (to, from, next) => {
      if (auth.currentUser) {
        if (auth.currentUser.emailVerified) {
          next("/");
        }
      }
      next();
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/faqs",
    name: "FAQs",
    component: () => import("../views/FAQs.vue"),
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../views/PrivacyPolicy.vue"),
  },
  {
    path: "/wish-list",
    name: "WishList",
    component: () => import("../views/WishList.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next("/");
      }
      next();
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    params: true,
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next("/");
      }
      next();
    },
  },
  {
    path: "/order-details/:nbr",
    name: "ShowDetailsOrder",
    component: () => import("../views/ShowDetailsOrder.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next("/");
      }
      next();
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.state.auth.user) {
        next("/");
      }
      next();
    },
  },
  {
    path: "/payment-waiting",
    name: "PaymentWaiting",
    component: () => import("../views/PaymentWaiting.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("waiting")) {
        next("/");
      }
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
