<!-- Flavours info -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12" v-for="(flav, index) in flavours" :key="index">
        <p>
          <b>{{ flav.name }}</b> – {{ flav.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoFlavours",
  props: ["flavours"],
};
</script>
<style></style>
