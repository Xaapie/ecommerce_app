<!-- Wholesale page-->
<template>
  <Layout>
    <TitlePageCustom title="Wholesale" />
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img
            style="width: 100%"
            src="/frontend/img/other_images/Wholesale.png"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <h1>Become a Wholesaler?</h1>
          <p>
            We have a great selection of some of the best disposable vape kits
            and pod devices. New flavours are coming in every week and leaving
            our warehouse within days! We stick to the orientation of
            high-quality products and excellent customer service, not just sell
            products, also are trying to find ways to develop deep cooperation
            with our customers.
          </p>
          <p>
            Please feel free to contact us to be a wholesaler: <br />
            Email:
            <a href="mailto:ecommercewebsite22@gmail.com"
              >ecommercewebsite22@gmail.com</a
            >
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from "@/views/layouts/Layout";
import TitlePageCustom from "@/components/TitlePageCustom";
export default {
  name: "Wholesale",
  components: {
    Layout,
    TitlePageCustom,
  },
};
</script>
<style scoped>
.container {
  margin-top: 50px;
}

.row {
  text-align: center;
}

h1 {
  font-size: 60px;
}
</style>
