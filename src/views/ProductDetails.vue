<!-- Product Details Page-->
<template>
  <Layout>
    <TitlePage title="Product Details" />
    <div v-if="product.image" class="container-fluid my-3" id="mainProduct">
      <div class="card">
        <div class="container-fliud">
          <div class="wrapper row">
            <div class="preview col-md-6">
              <div class="preview-pic tab-content">
                <div class="tab-pane active" id="pic-1">
                  <img :src="mainImage" />
                </div>
              </div>
              <div class="preview-thumbnail nav nav-tabs">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner" v-if="flavours">
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        :src="flavours[0]?.image"
                        alt="First slide"
                      />
                    </div>
                    <div
                      class="carousel-item"
                      v-for="flav in flavours.slice(1, flavours.length)"
                      :key="flav.name"
                      @click="changeImage(flav.image, flav.name)"
                    >
                      <img
                        class="d-block w-100"
                        :src="flav.image"
                        alt="First slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="details col-md-6">
              <h3 class="product-title">{{ product?.name }}</h3>
              <div class="rating">
                <div class="stars">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <span class="review-no">0 reviews</span>
              </div>
              <p class="product-description">{{ product?.description }}</p>
              <h4 class="price">
                Price: <span>£{{ getFinalPrice }}</span>
              </h4>
              <table class="custom_table">
                <thead>
                  <tr>
                    <th>Quantity</th>
                    <th>Discount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(ds, index) in multiPayment" :key="index">
                    <td scope="row">
                      {{ ds.min + (ds.max ? " - " + ds.max : " +") }}
                    </td>
                    <td>£{{ ds.discount }}</td>
                  </tr>
                </tbody>
              </table>
              <a-alert
                v-if="!getFlavourChoose"
                style="margin-bottom: 10px"
                message="Please choose a flavour"
                type="error"
              />
              <h5 class="sizes">
                Flavour:
                <a-select
                  v-model:value="flavour"
                  style="width: 100%; margintop: 10px"
                  @change="handleChange"
                >
                  <a-select-option
                    v-for="(flav, index) in flavours"
                    :key="index"
                    :value="flav.name"
                    >{{ flav.name }}</a-select-option
                  >
                </a-select>
              </h5>
              <h4 class="quantity">Quantity:</h4>
              <div class="product_count d-inline-block">
                <a-input-number
                  min="1"
                  v-model:value="qty"
                  addon-before="Qty"
                ></a-input-number>
              </div>
              <div class="action">
                <button
                  class="add-to-cart btn btn-default"
                  type="button"
                  @click="addItem"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="example" v-else>
      <a-spin size="large" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="Flavours"
              ><InfoFlavours :flavours="flavours"
            /></a-tab-pane>
            <a-tab-pane key="2" tab="Additional information" force-render>
              <AdditionalInformation :name="additInfo" />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Reviews (0)"></a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
    <div class="popular-items">
      <RelatedProducts :products="products" />
    </div>
  </Layout>
</template>
<script>
import InfoFlavours from "@/components/InfoFlavours.vue";
import AdditionalInformation from "@/components/AdditionalInformation.vue";
import RelatedProducts from "@/components/RelatedProducts.vue";
import TitlePage from "../components/TitlePage.vue";
import Layout from "./layouts/Layout.vue";
import "vue3-carousel/dist/carousel.css";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { auth } from "../firebase/index";
import { notification } from "ant-design-vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductDetails",
  components: {
    TitlePage,
    Layout,
    InfoFlavours,
    Carousel,
    ShoppingCartOutlined,
    Slide,
    Pagination,
    Navigation,
    RelatedProducts,
    AdditionalInformation,
  },
  data() {
    return {
      product: {},
      flavour: "Select Flavour",
      qty: 1,
      discounts: [],
      flavours: [],
      mainImage: "",
      additInfo: "",
      activeKey: "1",
      flavourChoose: true,
      settings: {
        itemsToShow: 5,
        snapAlign: "start",
        wrapAround: true,
        transition: 300,
        modelValue: 0,
        itemsToScroll: 1,
      },
    };
  },
  methods: {
    //change picture when user changes the flavour of product
    handleChange(val) {
      this.flavour = val;
      let image = this.flavours.find((item) => item.name == val).image;
      this.flavourChoose = true;
      this.changeImage(image);
    },
    openNotification(type) {
      notification.config({
        duration: 3.5,
      });
      if (type == "success") {
        notification["success"]({
          message: "Product added to your cart",
          description: "",
        });
      } else {
        notification["error"]({
          message: "Please login or create an account",
          description: "",
        });
      }
    },
    //add product to the cart of authenticated user
    addItem() {
      if (this.userInfo) {
        if (this.flavour != "Select Flavour") {
          let data = {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            price_id: this.product.price_id,
            flavour: this.flavour,
            qty: this.qty,
            owner: auth.currentUser.uid,
            image: this.product.image,
          };
          this.$store.dispatch("addItem", data).then(() => {
            this.openNotification("success");
          });
        } else {
          this.flavourChoose = false;
        }
      } else {
        this.openNotification("error");
      }
    },
    changeImage(image, flav = "") {
      this.mainImage = image;
      if (flav != "") {
        this.flavour = flav;
      }
    },
  },
  computed: {
    ...mapGetters({
      products: "get_products",
      cart: "get_cart",
      user: "get_user",
      userInfo: "get_user_info",
    }),
    getFlavourChoose() {
      return this.flavourChoose;
    },
    multiPayment() {
      return this.discounts.sort((a, b) => b.discount - a.discount);
    },
    //calculate the final price
    getFinalPrice() {
      let finalPrice = this.product.price;
      this.discounts.forEach((element) => {
        if (element.max) {
          if (this.qty >= element.min && this.qty <= element.max) {
            finalPrice = element.discount;
          }
        } else {
          if (this.qty >= element.min) {
            finalPrice = element.discount;
          }
        }
      });
      return finalPrice;
    },
  },
  updated() {
    this.$store.dispatch("getProducts").then(() => {
      this.product = this.products.find(
        (product) => product.id == this.$route.params.id
      );
      this.mainImage = this.product.image;
      this.$store.dispatch("getFlavours", this.product.id).then((resp) => {
        this.flavours = resp;
      });
      this.$store
        .dispatch("getMultiPaymentDiscount", this.product.id)
        .then((resp) => {
          this.discounts = resp;
        });
    });
  },
  created() {
    //get all products from firebase
    this.$store.dispatch("getProducts").then(() => {
      this.product = this.products.find(
        (product) => product.id == this.$route.params.id
      );
      let name = this.product.name;
      console.log(name);
      if (name.includes("Geek Bar")) {
        this.additInfo = "Geek Bar";
      } else if (name.includes("IVG Bar")) {
        this.additInfo = "IVG Bar";
      } else if (name.includes("Frunk Bar")) {
        this.additInfo = "Frunk Bar";
      } else if (name.includes("ELF Bar")) {
        this.additInfo = "ELF Bar";
      }
      this.mainImage = this.product.image;
      this.$store.dispatch("getFlavours", this.product.id).then((resp) => {
        this.flavours = resp;
      });
      this.$store
        .dispatch("getMultiPaymentDiscount", this.product.id)
        .then((resp) => {
          this.discounts = resp;
        });
    });
  },
};
</script>
<style scoped>
#carouselExampleControls {
  width: 25% !important;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #dc3545;
  background-size: 100% 100%;
}

.ant-input-number-group-wrapper {
  width: 100% !important;
}
.example {
  text-align: center;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
.pointer {
  cursor: pointer;
}

#mainProduct {
  width: 70%;
}

@media screen and (max-width: 996px) {
  #mainProduct {
    width: 100%;
  }
  #carouselExampleControls {
    width: 50% !important;
  }
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 500px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.qty__product,
.price__product {
  margin: 0px;
}

.flavour__part {
  display: flex;
  flex-direction: row;
  margin: 30px;
  justify-content: center;
}

.flavour__product {
  margin: 0;
  margin-right: 20px;
}
.product_image_area .single_product_text p {
  margin: 0;
  margin-right: 15px;
}
.carousel__slide {
  margin: 26px;
}

.product_count {
  text-align: center;
  margin-bottom: 40px;
}

.product_count_item {
  width: 32px;
}

img {
  max-width: 100%;
}

.custom_table {
  margin: 15px 0px;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}
.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}
.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}
.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}
.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

.tab-content {
  overflow: hidden;
}
.tab-content img {
  width: 100%;
  -webkit-animation-name: opacity;
  animation-name: opacity;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}

.card {
  margin-top: 50px;
  background: #f0f0f2;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors,
.quantity {
  text-transform: UPPERCASE;
  font-weight: bold;
}

.quantity {
  margin-top: 10px;
}

.checked,
.price span {
  color: #ff2020;
}
.price {
  margin: 0;
}

.carousel {
  width: 100% !important;
}
.carousel__pagination {
  display: none;
}
.product-title,
.rating,
.product-description,
.vote,
.sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}
.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}
.color:first-of-type {
  margin-left: 20px;
}
.action {
  align-self: flex-end;
}

.add-to-cart,
.like {
  background: #ff2020;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.add-to-cart:hover,
.like:hover {
  background: #ff2020;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}
.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.container {
  margin-bottom: 50px;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}

.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
