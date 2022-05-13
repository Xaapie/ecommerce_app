<!-- Return Policy -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 space">
        <p class="title">Returning Unwanted Items</p>
        <p>
          We understand that from time to time, things can go wrong. If you have
          received an incorrect item or simply changed your mind, we can help
          you resolve any issues. As long as the item is still in its original
          condition, we accept returns, subject to the terms below.
        </p>
      </div>
      <div class="col-md-12 space">
        <p class="title">You No Longer Want The Product</p>
        <p>
          You can return an unwanted item to us for refund or exchange, provided
          it is in its original, unused condition. Just return the product to us
          within 14 days of receiving your order. Please let us know your order
          number and reason for return before sending your products back to us.
          The cost of returning the unwanted item to us is your responsibility.
          We recommend that you send the parcel using a trackable delivery
          service that insures you for the items’ value. Please note we will not
          refund any postage you may have paid on the original order.
        </p>
      </div>
      <div class="col-md-12 space">
        <p class="title">I Have Received The Wrong Item</p>
        <p>
          We make every effort to ensure that your order is shipped correctly.
          However, if the item you received is not what you originally ordered,
          please contact as soon as possible. Ensure the item or items remain
          unopened, and we will resolve the problem for you immediately.
        </p>
      </div>
      <div class="col-md-12 space">
        <p class="title">Damaged Product</p>
        <p>
          In the unlikely event that you receive an item which you consider to
          be damaged, then please contact to explain what is wrong with the
          product. We will aim to resolve the issue as quickly as possible.
        </p>
      </div>
      <div class="col-md-12 space">
        <p class="title">Replacement Or Refunds</p>
        <p>
          We will send you a replacement product or refund the card account you
          used to pay for your order. You should receive your refund within five
          days of the reported issue, although in most cases, it will be sooner.
        </p>
      </div>
      <div class="col-md-12 space">
        <p class="title">Contact Us</p>
        <p>
          If you have any questions on how to return your item to us,
          <router-link to="/contact">contact us</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PolicyDetails",
};
</script>
<style scoped>
.space {
  margin: 15px 0;
}
.title {
  font-size: 15px;
  font-weight: bold;
  color: black;
}
</style>
