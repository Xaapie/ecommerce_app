<!-- Homepage small section for the products -->
<template>
  <div class="popular-items section-padding30">
    <div class="container">
      <!-- Section tittle -->
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-10">
          <div class="section-tittle mb-70 text-center">
            <h2>Welcome to our Vape Store!</h2>
            <p>
              We offer a wide range of quality products, an easy shopping
              experience, express delivery and first-class service.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-xl-4 col-lg-4 col-md-6 col-sm-6"
        >
          <product-card :product="product" />
        </div>
      </div>
      <!-- Button -->
      <div class="row justify-content-center">
        <div class="room-btn pt-70">
          <router-link to="/shop" class="btn view-btn1"
            >View More Products</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "./ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "OurProducts",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters({
      products: "get_products",
    }),
  },
};
</script>
<style></style>
