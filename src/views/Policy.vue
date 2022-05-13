<!-- Load Return Policy page-->
<template>
  <Layout>
    <TitlePageCustom title="Return Policy" />
    <PolicyDetails />
  </Layout>
</template>
<script>
import TitlePageCustom from "@/components/TitlePageCustom";
import Layout from "./layouts/Layout.vue";
import PolicyDetails from "@/components/PolicyDetails";
export default {
  name: "Policy",
  components: {
    TitlePageCustom,
    Layout,
    PolicyDetails,
  },
};
</script>
<style></style>
