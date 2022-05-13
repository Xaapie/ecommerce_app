<!-- Wishlist page-->
<template>
  <Layout>
    <TitlePage title="Wish List" />
    <ProductTable
      :columns="columns"
      :data="dataRefresh"
      @updateWish="updateWish"
    />
    <ProductTableMobile :data="dataRefresh" @updateWish="updateWish" />
  </Layout>
</template>
<script>
import TitlePage from "@/components/TitlePage";
import Layout from "@/views/layouts/Layout";
import ProductTableMobile from "@/components/ProductTableMobile";
import ProductTable from "@/components/ProductTable";
import { mapGetters } from "vuex";
const columns = [
  {
    title: "Product Name",
    dataIndex: "pname",
    key: "pname",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Action",
    key: "action",
  },
  {
    key: "actions",
  },
];

export default {
  name: "WishList",
  components: {
    Layout,
    ProductTable,
    TitlePage,
    ProductTableMobile,
  },
  data() {
    return {
      data: [],
      columns,
    };
  },
  computed: {
    ...mapGetters({
      products: "get_products",
    }),

    dataRefresh() {
      return this.data;
    },
  },
  methods: {
    updateWish(id) {
      this.data = this.data.filter((item) => item.id != id);
    },
  },
  created() {
    //Get all products from firebase and then verify the products in wishlist
    this.$store.dispatch("getProducts").then(() => {
      if (this.products.length > 0) {
        let wishList = JSON.parse(localStorage.getItem("wishs")); //get the list of products in wishlist using localStorage
        if (wishList.length > 0) {
          wishList.forEach((element) => {
            let product = this.products.find((item) => item.id == element); //verify if the product exists in the wishlist
            if (product) {
              this.data.push(product);
            }
          });
        }
      }
    });
  },
};
</script>
<style></style>
