<!-- Forgotten Password page -->
<template>
  <Layout>
    <TitlePage title="Reset Password" />
    <section class="login_part section_padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="login_part_text text-center">
              <div class="login_part_text_iner">
                <h2>Already have an account?</h2>
                <p>
                  Go on, treat your taste buds and Sign In to find the most
                  vape-licious of flavours consisting of succulent fusions of
                  fruit, a confection of desserts, stimulating bursts of
                  delicious drinks and a hint for mint with the menthol choice.
                </p>
                <router-link to="/login" class="btn_3">Login</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="login_part_form">
              <div class="login_part_form_iner">
                <h3>
                  Enter your email address & you will receive a link to create a
                  new password via email!
                </h3>
                <form @submit.prevent="handleSubmit" class="row contact_form">
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <router-link to="/login" style="float: right"
                      >Login?</router-link
                    >
                    <br />
                    <a-button
                      v-if="loading"
                      type="primary"
                      loading
                      size="large"
                      style="margintop: 15px"
                      >Loading</a-button
                    >
                    <a-button
                      v-else
                      type="primary"
                      html-type="submit"
                      size="large"
                      style="margintop: 15px"
                      >Reset password</a-button
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
<script>
import Layout from "./layouts/Layout.vue";
import TitlePage from "../components/TitlePage";
import { notification } from "ant-design-vue";
export default {
  name: "ForgotPassword",
  components: { Layout, TitlePage },
  data() {
    return {
      email: "",
      loading: false,
    };
  },
  methods: {
    openNotification(type) {
      notification.config({
        duration: 3.5,
      });
      if (type == "success") {
        notification["success"]({
          message: "Email send",
          description: "Can you please check your email",
        });
      } else {
        notification["error"]({
          message: "OOPS!",
          description: "Please verify your email",
        });
      }
    },
    //send email to the user to reset password
    handleSubmit() {
      this.loading = true;
      if (this.email != "") {
        this.$store
          .dispatch("resetPassword", this.email)
          .then(() => {
            this.loading = false;
            this.email = "";
            this.openNotification("success");
            setTimeout(() => {
              this.$router.push("/login");
            }, 1000);
          })
          .catch(() => {
            this.openNotification("error");
          });
      }
    },
  },
};
</script>
<style scoped></style>
