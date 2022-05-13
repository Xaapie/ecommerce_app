<!-- Footer -->
<template>
  <footer>
    <div class="footer-area footer-padding">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="col-xl-2 col-lg-2 col-md-5 col-sm-6">
            <div class="single-footer-caption mb-50">
              <div class="single-footer-caption mb-30">
                <!-- logo -->
                <div class="footer-logo">
                  <router-link to="/"
                    ><img src="frontend/img/logo/logo2_footer.png" alt=""
                  /></router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Help</h4>
                <ul>
                  <li>
                    <router-link to="/delivery-information"
                      >Delivery Information</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/return-policy">Return Policy</router-link>
                  </li>
                  <li><router-link to="/faqs">FAQs</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-7">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>SHOP WITH US</h4>
                <ul>
                  <li><router-link to="/dashboard">Dashboard</router-link></li>
                  <li><router-link to="/about-us">About Us</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-5 col-sm-7">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <router-link to="/terms-conditions"
                      >Terms & Conditions</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/privacy-policy"
                      >Privacy Policy</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Footer bottom -->
        <div class="row align-items-center">
          <div class="col-xl-7 col-lg-8 col-md-7">
            <div class="footer-copy-right">
              <p>Copyright 2022 © Disposable Vape Kits</p>
            </div>
          </div>
          <div class="col-xl-5 col-lg-4 col-md-5">
            <div class="footer-copy-right f-right">
              <!-- social -->
              <div class="footer-social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterPage",
};
</script>
<style scoped></style>
