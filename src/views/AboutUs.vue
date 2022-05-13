<!-- About us Page -->
<template>
  <Layout>
    <TitlePageCustom title="About Us" />
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="/frontend/img/other_images/about_us.gif" alt="" />
        </div>
        <div class="col-md-6">
          <h1>Extortion? Not at these prices!</h1>
          <p>
            We stock a range of disposable vape kits with varying battery sizes,
            puff counts and flavour choices. Our website makes shopping more
            effortless than ever, so you can get the best disposable vape pen
            you love, for less. All this is only a couple of clicks away!
          </p>
          <router-link to="/shop">
            <a-button size="large"> Shop Now ></a-button></router-link
          >
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import TitlePageCustom from "@/components/TitlePageCustom";
import Layout from "./layouts/Layout.vue";
export default {
  name: "AboutUs",
  components: {
    TitlePageCustom,
    Layout,
  },
};
</script>
<style scoped>
img {
  width: 100%;
}

.container {
  margin-top: 50px;
}

.row {
  text-align: center;
}

h1 {
  font-size: 60px;
}

.ant-btn {
  margin-top: 30px;
  background: black;
  color: white;
  border-color: black;
}
</style>
