<!-- Order list page-->
<template>
  <Layout>
    <TitlePage :title="title" />
    <ProductOrderTable :columns="columns" :data="refreshProducts" />
    <ProductOrderTableMobile :data="refreshProducts" />
  </Layout>
</template>
<script>
import Layout from "./layouts/Layout.vue";
import TitlePage from "@/components/TitlePage";
import ProductOrderTable from "@/components/ProductOrderTable";
import ProductOrderTableMobile from "@/components/ProductOrderTableMobile";
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
    title: "Quantity",
    dataIndex: "qty",
    key: "qty",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Action",
    key: "action",
  },
];
export default {
  name: "ShowDetailsOrder",
  components: {
    Layout,
    TitlePage,
    ProductOrderTable,
    ProductOrderTableMobile,
  },
  data() {
    return {
      columns,
      numOrder: 0,
      allProducts: [],
    };
  },
  computed: {
    ...mapGetters({
      products: "get_products",
    }),
    title() {
      return "Details Order " + this.numOrder;
    },
    refreshProducts() {
      return this.allProducts;
    },
  },
  created() {
    //Get all orders of authenticated user from firebase
    this.numOrder = this.$route.params.nbr;
    this.$store.dispatch("getOrder", this.numOrder).then((resp) => {
      let data = resp;
      data.forEach((elm1) => {
        this.products.forEach((elm2) => {
          if (elm1.id == elm2.id) {
            let item = {
              ...elm2,
              qty: elm1.qty,
            };
            this.allProducts.push(item);
          }
        });
      });
    });
  },
};
</script>
<style></style>
