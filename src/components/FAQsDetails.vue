<!-- Frequently Asked Questions -->
<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-md-12">
        <p class="faqs__title">
          If your questions aren’t answered here, please contact us at The
          <router-link to="/contact">Contact Page</router-link>. We’re happy to
          help!
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- Order Issues-->
        <h1>ORDER ISSUES</h1>
        <a-collapse ghost>
          <a-collapse-panel
            key="1"
            header="I'm having trouble placing an order can you help?"
          >
            <p>
              If using a mobile device or the app, try using the website to
              complete your order. If using the website make sure you clear your
              cache and cookies, and if this doesn’t work try changing your
              browser.
            </p>
            <p>
              Still, having trouble? Send our customer services team an e-mail
              at: ecommercewebsite22@gmail.com and make sure you include the
              browser/device you’re using, any screenshots or photos, and make
              sure you e-mail us using the same one you have an account with.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Where is my order?">
            <p>
              Once your order has been dispatched from our warehouse you’ll
              receive an Order Shipped e-mail with your tracking link. You can
              then track the parcel directly with the courier. If you can’t find
              your e-mail make sure you double check your junk/spam folders.
            </p>
            <p>
              Orders are normally dispatched within a few working days, however,
              due to higher volumes than normal over the festive period our
              couriers are extremely busy which may impact your delivery time.
              Please check your order confirmation email for your estimated
              delivery time.
            </p>
            <p>
              If the tracking on your order hasn’t updated for several days get
              in touch with Customer Services who can look into it for you.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="Can I cancel or change my order?">
            <p>
              Once an order is placed, unfortunately, it cannot be amended
              online.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="4" header="Can I change my delivery address?">
            <p>
              Once an order has been placed unfortunately it cannot be cancelled
              or amended.
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="5"
            header="Do you offer a price match service?"
          >
            <p>
              Unfortunately, we do not offer a price matching service. We do our
              utmost to remain as competitive as we can on the market to ensure
              our customers get the best value from shopping with us.
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="6"
            header="I haven't got my delivery confirmation"
          >
            <p>
              Make sure you double-check your junk/spam folder as it sometimes
              can be found in there. If you have an online account you can also
              log into your my account page where you will be able to find your
              order history, order confirmation number and tracking links.
            </p>
            <p>
              If you do not have an account and cannot find your order
              confirmation email, please contact Customer Services.
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="7"
            header="I didn't get an invoice in my parcel"
          >
            <p>
              We’ve gone paperless so you won’t receive any paperwork in your
              parcel. You’ll still get your order confirmation and dispatch via
              e-mail.
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="8"
            header="Can I amend the delivery option for my order?"
          >
            <p>
              As there is a price difference in the delivery options we offer,
              we, unfortunately, cannot change the delivery option once an order
              is placed.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="9" header="Where do you deliver to?">
            <p>We offer delivery within the UK as of right now.</p>
          </a-collapse-panel>
          <a-collapse-panel
            key="10"
            header="How do I find out what's happening with my delivery?"
          >
            <p>
              If you have not yet had a despatch confirmation email please
              contact customer services on ecommercewebsite22@gmail.com.
            </p>
            <p>
              Our Customer Service Team are available:<br />
              Monday to Friday: 9am – 5pm <br />
              Saturday/Sunday: Closed
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="11"
            header="How do I find out what's happening with my delivery?"
          >
            <p>
              It can take a little longer for our couriers to get your order to
              you. Please wait for 7 days before contacting us.
            </p>
          </a-collapse-panel>
        </a-collapse>

        <!-- Payment Options-->
        <h1>PAYMENT OPTIONS</h1>
        <a-collapse ghost>
          <a-collapse-panel
            key="1"
            header="What methods of payment do you accept?"
          >
            <p>We accept the following payment options:</p>
            <p>
              Still, having trouble? Send our customer services team an e-mail
              at: ecommercewebsite22@gmail.com and make sure you include the
              browser/device you’re using, any screenshots or photos, and make
              sure you e-mail us using the same one you have an account with.
            </p>
            <ul>
              <li>MasterCard</li>
              <li>Visa</li>
              <li>Visa Delta</li>
              <li>Maestro</li>
              <li>American Express</li>
            </ul>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Order Refunds">
            <p>
              Any refunds made will be sent to the default payment option. With
              PayPal, the refund will show straight away, but for Debit or
              Credit Card refunds, it may take 5-7 working days to show in your
              bank account.
            </p>
          </a-collapse-panel>
        </a-collapse>

        <!-- Delivery-->
        <h1>DELIVERY</h1>
        <a-collapse ghost>
          <a-collapse-panel
            key="1"
            header="My order is showing as delivered but I haven't received it?"
          >
            <p>
              If your order is showing as delivered and you can’t locate it,
              firstly check with your neighbours, anyone else in your household
              and any safe places it could have been left. If you track your
              parcel using the tracking number in the shipping e-mail, you
              should be able to see if the parcel was left in a safe place or
              with a neighbour.
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="2"
            header="The tracking hasn't updated on my order"
          >
            <p>
              If when you track your order you can’t see an update on your
              parcel and it’s been more than 5 days, get in touch with Customer
              Services who can investigate further with Royal Mail.
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="3"
            header="What if I'm not home for my delivery?"
          >
            <p>
              If you’re not home when Royal Mail try to deliver they will locate
              a safe place to leave your parcel, or leave it with a neighbour
              (usually either opposite or either side of your property). If they
              can’t find a safe place or neighbour to leave it with, they will
              reattempt delivery up to two times. They’ll leave a calling card
              for you so you know what’s happened to your parcel.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="4" header="Where do you deliver to?">
            <p>We currently ship within the UK as of now.</p>
          </a-collapse-panel>
          <a-collapse-panel
            key="5"
            header="What happens if I haven't received my order?"
          >
            <p>
              We will always endeavour to resolve any delivery issues as quickly
              as possible. If you believe your order has been lost, please get
              in touch with our Customer Service Team with your order reference
              number within 14 days from your order despatch date. The order
              will not be re-sent or refunded until a full investigation is
              complete.
            </p>
          </a-collapse-panel>
        </a-collapse>

        <!--Returns -->
        <h1>RETURNS</h1>
        <a-collapse ghost>
          <a-collapse-panel key="1" header="Can I return an online order?">
            <p>
              You can return your online order. You’ve got 14 days to return
              your order and it must be returned in an unused and unopened
              state. We cannot return a product if it has been personalised in
              any way. If the product is returned in a condition which is not
              fully resaleable or the packaging is damaged, we reserve the right
              to refuse a refund or exchange on the item. This does not affect
              your statutory rights. We are unable to refund postage if your
              product is unwanted or you have changed your mind.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="How do I return an unwanted item?">
            <p>
              You can return an item purchased online. Items must be returned
              within 14 days of purchase and in good condition.
            </p>
            <p>
              If returning via post, we’re not able to cover the cost of the
              return. Please make sure you include your order number and contact
              details within the parcel.
            </p>
            <p>
              For detailed information about returns please our
              <router-link to="/return-policy">Returns Policy</router-link>.
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="3"
            header="What do I do if I receive a faulty item?"
          >
            <p>
              If you have received a faulty item, please return the item back to
              our warehouse with a note explaining the fault or damage to the
              product for review. You can return an item purchased online. Items
              must be returned within 14 days of purchase.
            </p>
            <p>
              If returning via post, we’re not able to cover the cost of the
              return. Please make sure you include your order number and contact
              details within the parcel.
            </p>
          </a-collapse-panel>
          <a-collapse-panel
            key="4"
            header="What do I do if I receive an incorrect item?"
          >
            <p>
              We have a number of checks in place to try and ensure the accuracy
              of the orders we send, however, if a mistake has happened and the
              item you’ve received is not correct, then please contact our
              customer service team who will assist you.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="5" header="How are refunds paid?">
            <p>
              Refunds will be paid onto the same method of payment used on the
              original order. The refund value will be for the price paid when
              the order was placed. Refunds will only be processed once the item
              is received back.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="6" header="How long will my refund take?">
            <p>
              Once your items have arrived at our warehouse, your return will be
              processed in up to 10 working days. Once your order has been
              refunded we will contact you using the email address that your
              order was placed with to confirm.
            </p>
            <p>
              Please be aware that some banks take longer than others to process
              the funds back into your account, so please allow additional time
              for this to take place before getting in touch with Customer
              Services.
            </p>
          </a-collapse-panel>
          <a-collapse-panel key="7" header="Return Adress">
            <p>
              Return Address will be on the postage that is sent to you,
              however, if you no longer have that, please contact us with your
              order number.
            </p>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
h1 {
  margin: 10px;
}

.ant-collapse-header {
  font-weight: bold !important;
  font-size: 17px !important;
}
.faqs__title {
  text-align: center;
  font-size: 19px;
}
</style>
