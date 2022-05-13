<!-- Title page-->
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
<style>
h2 {
  margin: 0 !important;
}
</style>
