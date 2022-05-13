<!-- Disposables page-->
<template>
  <Layout>
    <TitlePageCustom title="Disposables" />
    <div class="container-fluid">
      <p class="main__text">
        Disposable vape kits are great for those who are looking to quit smoking
        and don't want to commit to buying coils or replacing pods. They are
        also fantastic options for back-up vapes to be used when travelling or
        on nights out.
      </p>
      <div class="row justify-content-md-center">
        <div class="border__card col-lg-5">
          <h6>WHAT ARE DISPOSABLE VAPES?</h6>
          <p>
            <router-link to="/shop" class="shop__link"
              >Disposable vape kits</router-link
            >
            are small, compact and incredibly portable single use e-cigarettes.
            They contain a pre-charged battery and a pre-filled e-liquid pod.
            They require zero maintenance, and offer you a satisfying mouth to
            lung style throat hit.
          </p>
        </div>
        <div class="border__card col-lg-5 offset-md-1">
          <h6>How Do Disposable Vape Kits Work?</h6>
          <p>
            Disposable vape kits can be used straight out of the box. You simply
            inhale and dispose of it once it’s finished. You will know it’s
            empty through the decline in vapour and flavour. Some kits may even
            have light indicators which will change colour or flash when they’re
            empty.
          </p>
        </div>
      </div>
      <div class="row group__images">
        <div class="col-md-3">
          <h4>Pre-charged battery</h4>
          <p class="description">
            Disposable vapes are supplied with a pre-charged lithium battery
            making it super simple to use and ready to use out of the box.
          </p>
          <img
            src="/frontend/img/other_images/Pre-charged-battery.png"
            alt=""
          />
        </div>
        <div class="col-md-3">
          <h4>Pre-filled pod</h4>
          <p class="description">
            The pod is pre-filled with flavoured nicotine-containing e-liquid.
            No need to replace the coil or refill it with e-liquid.
          </p>
          <img src="/frontend/img/other_images/Pre-filled-pod.png" alt="" />
        </div>
        <div class="col-md-3">
          <h4>Inhale activation</h4>
          <p class="description">
            With no fire button, they are inhale-activated and upon inhaling the
            battery is activated and draws heat through to the pre-filled pod.
            The generated heat then converts the e-liquid into vapour, which you
            then inhale.
          </p>
          <img src="/frontend/img/other_images/Inhale-activation.jpg" alt="" />
        </div>
        <div class="col-md-3">
          <h4>Disposable</h4>
          <p class="description">
            The device can be used continuously until the battery is depleted,
            at which point it can be disposed of.
          </p>
          <img src="/frontend/img/other_images/Disposable.jpg" alt="" />
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from "@/views/layouts/Layout";
import TitlePageCustom from "@/components/TitlePageCustom";
export default {
  name: "Disposables",
  components: {
    Layout,
    TitlePageCustom,
  },
};
</script>
<style scoped>
.border__card {
  border: 4px solid black;
  padding: 8px 3px;
  font-size: 18px;
  text-align: center;
}

.group__images {
  margin-top: 40px;
}

.group__images .col-md-3 {
  text-align: center;
}

.description {
  font-weight: 400;
}

.main__text {
  font-size: 18px;
  text-align: center;
  margin: 30px 0px;
}

.shop__link {
  color: #321de8;
}

.shop__link:hover {
  color: red;
}
</style>
