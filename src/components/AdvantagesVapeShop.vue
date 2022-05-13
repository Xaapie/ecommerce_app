<!-- Delivery Information section for: Free shipping, Quick payment, Tracking number, Mon-Fri -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 flex_card border-left border-right">
        <div class="card__image">
          <img src="/frontend/img/elements/shipping.webp" alt="" />
        </div>
        <div class="card__details">
          <h2>FREE SHIPPING</h2>
          <p>ON ORDERS ABOVE £10</p>
        </div>
      </div>
      <div class="col-lg-3 flex_card border-left border-right">
        <div class="card__image">
          <img src="/frontend/img/elements/payment.webp" alt="" />
        </div>
        <div class="card__details">
          <h2>QUICK PAYMENT</h2>
          <p>100% SECURE PAYMENT</p>
        </div>
      </div>
      <div class="col-lg-3 flex_card border-left border-right">
        <div class="card__image">
          <img src="/frontend/img/elements/tracking.webp" alt="" />
        </div>
        <div class="card__details">
          <h2>TRACKING NUMBER</h2>
          <p>TRACKING PROVIDED ON ALL ORDERS</p>
        </div>
      </div>
      <div class="col-lg-3 flex_card border-right border-left">
        <div class="card__image">
          <img src="/frontend/img/elements/calendar.webp" alt="" />
        </div>
        <div class="card__details">
          <h2>MON-FRI</h2>
          <p>9am - 5pm</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.flex_card {
  display: flex;
  justify-content: space-around;
}

.container-fluid {
  padding: 0px 65px;
  margin-top: 30px;
}

.border-left {
  border-left: 2px black solid !important;
}

.border-right {
  border-right: 2px black solid !important;
}
</style>
