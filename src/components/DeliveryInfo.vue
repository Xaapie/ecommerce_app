<!-- Delivery information page-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <p class="title">DELIVERY</p>
        <p>
          Orders being shipped via Standard Delivery and Express Tracked will be
          delivered by Royal Mail. Your tracking number will be available in the
          My Account section on the website. Please note there are no deliveries
          on Bank Holidays and orders will be delivered the next working day.
        </p>
        <br />
        <p>
          If you are not available to receive your order, your delivery will be
          left in a safe place or a card will be left allowing you to collect
          your parcel from your local Royal Mail sorting office.
        </p>
      </div>
    </div>
    <div class="row space">
      <div class="col-md-5 border-card">
        <ul>
          <li><b>Shipping Method: </b> Royal Mail</li>
          <li><b>Cost: </b>£0.00 on Orders Above £10</li>
          <li><b>Order Before: </b>Monday – Friday</li>
          <li><b>Time Frame: </b>1-2 working days from date of dispatch</li>
        </ul>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-5 border-card">
        <ul>
          <li><b>Shipping Method: </b>Royal Mail Special Delivery</li>
          <li><b>Cost: </b>£7.99 + additional if QTY is increased</li>
          <li><b>Order Before: </b>2 PM Monday – Thursday</li>
          <li><b>Time Frame: </b>Next Day from date of dispatch</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  margin-top: 20px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration: underline;
}
li {
  margin: 20px 0px;
  font-size: 16px;
}
.space {
  justify-content: space-around;
}

.border-card {
  border: 3px black solid;
}
</style>
