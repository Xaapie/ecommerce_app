<!-- Handle page errors-->
<template>
  <div>
    <Layout>
      <div class="slider-area">
        <div class="single-slider slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>404 - Page not found</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
import Layout from "./layouts/Layout.vue";
export default {
  name: "NotFound",
  components: {
    Layout,
  },
};
</script>
<style></style>
