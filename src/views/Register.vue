<template>
  <Layout>
    <div class="slider-area">
      <div class="single-slider slider-height2 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="hero-cap text-center">
                <h2>Register</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                  Welcome<br />
                  Enter all the fields to Sign Up!
                </h3>

                <a-alert
                  v-if="lengthPass && lengthPass < 8"
                  style="margin-bottom: 10px"
                  message="Passwords must be at least 8 characters in length"
                  type="error"
                />
                <a-alert
                  v-if="notMatch"
                  style="margin-bottom: 10px"
                  message="Password and confirm password does not match"
                  type="error"
                />
                <a-alert
                  v-if="checkEmail"
                  style="margin-bottom: 10px"
                  message="We just need to verify your email address before you can access, can you please check your inbox."
                  type="error"
                />

                <form @submit.prevent="handleSubmit" class="row contact_form">
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      v-model="formState.firstName"
                      required
                    />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      v-model="formState.lastName"
                      required
                    />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      v-model="formState.email"
                      required
                    />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      v-model="formState.password"
                      required
                    />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="password"
                      class="form-control"
                      id="c_password"
                      name="c_password"
                      placeholder="Confirm Password"
                      v-model="formState.confirmPassword"
                      required
                    />
                  </div>
                  <div class="col-md-12 form-group">
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
                      >Register</a-button
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
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/index";
import { mapGetters } from "vuex";
import { notification } from "ant-design-vue";
export default {
  name: "Register",
  components: { Layout },
  data() {
    return {
      formState: {},
      loading: false,
      checkEmail: false,
    };
  },
  computed: {
    notMatch() {
      if (
        this.formState.confirmPassword &&
        this.formState.confirmPassword.length >= 3 &&
        this.lengthPass >= 8
      ) {
        if (this.formState.password === this.formState.confirmPassword) {
          return false;
        } else {
          return true;
        }
      }
    },
    lengthPass() {
      if (this.formState.password) {
        return this.formState.password.length;
      }
    },
  },
  methods: {
    openNotification(type) {
      notification.config({
        duration: 3.5,
      });
      if (type == "success") {
        notification["success"]({
          message: "Verify Account",
          description: "Please verify your email to login in",
        });
      } else {
        notification["error"]({
          message: "Oops!",
          description: "Please verify your information before register",
        });
      }
    },
    //To add a new user in firebase
    async addUser() {
      let infos = {
        firstName: this.formState.firstName,
        lastName: this.formState.lastName,
        email: this.formState.email,
        streetAddress: "",
        town: "",
        postCode: "",
        birthDate: "",
      };

      await setDoc(doc(db, "users", auth.currentUser.uid), infos);
    },
    handleSubmit() {
      this.loading = true;
      let credentials = {
        email: this.formState.email,
        password: this.formState.password,
      };
      if (this.lengthPass >= 8 && !this.notMatch) {
        this.$store.dispatch("register", credentials).then(() => {
          this.addUser();
          if (auth.currentUser.emailVerified) {
            this.$store
              .dispatch("getUserInfo", credentials.email)
              .then(() => {
                this.loading = false;
                this.openNotification("success");
                setTimeout(() => {
                  window.scrollTo(0, 0);
                  this.$router.push("/");
                }, 1000);
              })
              .catch(() => {
                this.loading = false;
                this.openNotification("error");
              });
          } else {
            this.checkEmail = true;
            this.loading = false;
            this.openNotification("success");
            setTimeout(() => {
              this.checkEmail = false;
            }, 1000);
            this.$router.push("/login");
          }
        });
      } else {
        this.loading = false;
      }
    },
  },
};
</script>
<style></style>
