<!-- Cart page-->
<template>
  <Layout>
    <!-- Hero Area Start-->
    <TitlePage title="Cart" />
    <!--================Cart Area =================-->
    <section class="cart_area section_padding">
      <div v-if="cart.length > 0" class="container">
        <div class="row">
          <div class="col-md-12">
            <a-alert
              v-if="!checkShipping"
              style="margin-bottom: 10px"
              message="Please update your shipping address on the Dashboard before proceeding to checkout"
              type="error"
            />
            <div class="cart_inner">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Flavour</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in cart" :key="product.id">
                      <ProductCart
                        :product="product"
                        @updateLine="updateLineItems"
                      />
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5>£{{ subTotal.toFixed(2) }}</h5>
                      </td>
                    </tr>
                    <tr class="shipping_area">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <h5></h5>
                      </td>
                      <td>
                        <div class="shipping_box">
                          <ul class="list">
                            <li>
                              Free Shipping
                              <input
                                type="radio"
                                aria-label="Radio button for following text input"
                                checked="checked"
                              />
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="checkout_btn_inner float-right">
                  <a-button type="primary" size="larger" @click="redirect"
                    >Continue Shopping</a-button
                  >
                  <a-button
                    v-if="!checkShipping"
                    type="primary"
                    size="larger"
                    style="margin-left: 10px"
                    @click="submit"
                    disabled
                    >Proceed to checkout</a-button
                  >
                  <a-button
                    v-else
                    type="primary"
                    size="larger"
                    style="margin-left: 10px"
                    @click="submit"
                    >Proceed to checkout</a-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container">
        <a-empty
          image="https://cdn-icons-png.flaticon.com/512/102/102661.png"
          :image-style="{
            height: '200px',
            marginBottom: '15px',
          }"
        >
          <template #description>
            <span> Your Cart is Empty </span>
          </template>
          <a-button type="primary" @click="redirect">Shop Now</a-button>
        </a-empty>
      </div>
    </section>
  </Layout>
</template>
<script>
import Layout from "@/views/layouts/Layout";
import TitlePage from "@/components/TitlePage";
import ProductCart from "@/components/ProductCart";
import { mapGetters } from "vuex";
import { setDoc, doc, collection, query, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/index";
export default {
  name: "Cart",
  components: {
    TitlePage,
    Layout,
    ProductCart,
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
  computed: {
    ...mapGetters({
      cart: "get_cart",
      user: "get_user_info",
    }),

    getLineItems() {
      return this.lineItems;
    },

    checkShipping() {
      console.log("==============");
      console.log(this.user);
      if (
        this.user &&
        this.user.streetAddress != "" &&
        this.user.town != "" &&
        this.user.postCode != "" &&
        this.user.birthDate != ""
      ) {
        return true;
      } else {
        return false;
      }
    },

    //we calculate the subTotal
    subTotal() {
      let subTotal = 0;
      if (this.cart.length > 0) {
        this.cart.forEach((element) => {
          subTotal += element.price * element.qty;
        });
      }
      return subTotal;
    },
  },
  methods: {
    redirect() {
      this.$router.push("/shop");
    },
    //Get the number of orders
    async getOrdersNumber() {
      let number = 1;
      const q = query(collection(db, `users/${auth.currentUser.uid}/orders`));
      const querySnap = await getDocs(q);
      querySnap.forEach(() => {
        ++number;
      });

      return number;
    },
    //to submit the cart and go to the payment page
    async submit() {
      localStorage.setItem("status", true);
      localStorage.setItem("waiting", true);
      this.$store.dispatch("setStatus", true);
      this.getOrdersNumber().then(async (resp) => {
        let order = {
          numberOrder: resp,
          order_date: new Date(Date.now()).toLocaleString(),
          total_price: this.subTotal,
          status: "Payment Failed",
          streetAddress: this.user.streetAddress,
          town: this.user.town,
          postCode: this.user.postCode,
        };

        let id_order = "OrderNum_" + resp;

        await setDoc(
          doc(db, `users/${auth.currentUser.uid}/orders`, id_order),
          order
        ).then(() => {
          this.cart.forEach(async (element) => {
            let data = {
              id: element.id,
              qty: element.qty,
            };
            await setDoc(
              doc(
                db,
                `users/${auth.currentUser.uid}/orders/${id_order}/products`,
                data.id
              ),
              data
            );
          });
          localStorage.setItem("user_uid", auth.currentUser.uid);
        });
      });
      this.$router.push("/payment-waiting");
    },

    //after makes changes in products, we update the lineItems of stripe
    updateLineItems(data) {
      let item = this.lineItems.find((item) => item.price == data.old_price_id);
      if (item) {
        if (data.price_id) {
          item.price = data.price_id;
        }
        item.quantity = data.quantity;
        localStorage.setItem("lineItems", JSON.stringify(this.lineItems));
      }
    },
  },
  mounted() {
    console.log(this.user);
    if (this.cart.length > 0) {
      console.log(auth.currentUser);
      this.cart.forEach((element) => {
        let data = {
          price: element.price_id,
          quantity: element.qty,
        };
        this.lineItems.push(data);
        localStorage.setItem("lineItems", JSON.stringify(this.lineItems));
      });
    }
  },
};
</script>
<style scoped>
.section_padding {
  padding: 90px 0px;
}
.container-fluid {
  padding: 0px 150px !important;
}
.cart_inner .table thead tr th {
  font-family: unset !important;
}

.cart_inner .table tbody tr td h5 {
  font-family: unset !important;
}
</style>
