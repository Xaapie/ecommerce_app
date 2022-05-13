<!-- Banner-->
<template>
  <div class="slider-area">
    <div class="single-slider slider-height2 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="hero-cap text-center">
              <h2>{{ title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TitlePage",
  props: ["title"],
};
</script>
<style scoped>
.slider-height2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/frontend/img/other_images/Neon-Banner.gif") !important;
  min-height: unset;
  height: 200px;
}
h2 {
  margin: 0;
  color: white;
}
</style>
