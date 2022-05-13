<!-- orders completed successfully-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="payment__card">
          <img src="frontend/img/gifs/success.gif" alt="" />
          <h2>Payment Successful</h2>
          <p>
            <b>Thank you for your payment!</b> Your order is confirmed, you can
            check the orders page to view your order details.
          </p>
          <p>You will be redirected to Homepage in 5 seconds...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Layout from "@/views/layouts/Layout";
import TitlePage from "@/components/TitlePage";
import { mapGetters } from "vuex";
import {
  query,
  collection,
  getDocs,
  orderBy,
  limit,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase/index";
export default {
  name: "success",
  components: {
    Layout,
    TitlePage,
  },
  computed: {
    ...mapGetters({
      status: "get_status",
    }),
  },
  methods: {
    //if payment successful we change the status of order to Payment Successful in firebase
    async getSpecifiedDoc(user_uid) {
      const q = query(
        collection(db, `users/${user_uid}/orders`),
        orderBy("order_date", "desc"),
        limit(1)
      );
      const querySnap = await getDocs(q);

      //We update the status of payment
      querySnap.forEach(async (docs) => {
        let id_order = "OrderNum_" + docs.data().numberOrder;
        await updateDoc(doc(db, `users/${user_uid}/orders/${id_order}`), {
          status: "Payment Successful",
        }).then(() => {
          localStorage.removeItem("user_uid");
          setTimeout(() => {
            this.$router.push("/");
          }, 5000);
        });
      });
    },
  },
  mounted() {
    if (localStorage.getItem("status")) {
      setTimeout(() => {
        localStorage.removeItem("status");
      }, 1500);
    }

    //After payment is done we clear the cart
    this.$store.dispatch("clearCart").then(() => {
      let user_uid = localStorage.getItem("user_uid");
      if (user_uid) {
        this.getSpecifiedDoc(user_uid);
      }
    });
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
  font-weight: 500;
  font-size: 18px;
}
</style>
