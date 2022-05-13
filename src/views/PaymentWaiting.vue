<!-- Payment waiting animation-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="payment__card">
          <img src="frontend/img/gifs/card.gif" alt="" />
          <p>You will be redirected to payment page in few moments....</p>
        </div>
        <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="(v) => (loading = v)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Layout from "./layouts/Layout.vue";
import TitlePage from "@/components/TitlePage.vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "PaymentWaiting",
  components: {
    Layout,
    TitlePage,
    StripeCheckout,
  },
  data() {
    return {
      publishableKey:
        "pk_test_51KnVADJ5z6e49EHtbjQIXRLoqs1c7ALa4YaSWdsPvFJk6xEDoEOJDPURTbxS7QEXLX2AUryXGSqKSG58p85X87td001fnNpxP1",
      loading: false,
      lineItems: [],
      successURL: "https://e-commerce-3ec83.web.app/success",
      cancelURL: "https://e-commerce-3ec83.web.app/failed",
    };
  },
  mounted() {
    if (localStorage.getItem("waiting")) {
      setTimeout(() => {
        localStorage.removeItem("waiting");
      }, 2000);
    }
    if (localStorage.getItem("lineItems")) {
      let allItems = JSON.parse(localStorage.getItem("lineItems"));
      this.lineItems = allItems;
      if (this.lineItems.length > 0) {
        setTimeout(() => {
          this.$refs.checkoutRef.redirectToCheckout();
        }, 1000);
      }
    }
  },
};
</script>
<style>
.payment__card {
  text-align: center;
  width: 100%;
  margin: auto;
}

.payment__card img {
  width: 400px;
}

.payment__card p {
  font-family: Consolas;
  font-weight: 700;
  font-size: 18px;
}
</style>
