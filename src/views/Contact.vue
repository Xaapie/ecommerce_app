<!-- Contact us Page-->
<template>
  <Layout>
    <TitlePageCustom title="Contact Us" />
    <section class="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="contact-title">General Inquiries​</h2>
          </div>
          <div class="col-lg-4">
            <p>
              Here at Disposable Vape Kits, our top priority is to ensure that
              your shopping experience is the best it possibly can be. With this
              in mind, our dedicated customer service team are happy to answer
              any of your queries.
            </p>
            <br />
            <p>
              If you have any questions about your order, please set the subject
              as Order Number. Please check your inbox or spam messages to find
              the order number.
            </p>
          </div>
          <div class="col-lg-7 offset-lg-1">
            <form
              class="form-contact contact_form"
              @submit.prevent="handleSubmit"
              id="contactForm"
            >
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      class="form-control w-100"
                      name="message"
                      id="message"
                      cols="30"
                      rows="9"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Message'"
                      placeholder=" Enter Message"
                      v-model="formState.message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="name"
                      id="name"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                      v-model="formState.name"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter email address'"
                      placeholder="Email"
                      v-model="formState.email"
                      required
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Subject'"
                      placeholder="Enter Subject"
                      v-model="formState.subject"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mt-3">
                <button
                  type="submit"
                  class="button button-contactForm boxed-btn"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
<script>
import Layout from "@/views/layouts/Layout";
import TitlePageCustom from "@/components/TitlePageCustom";
import { notification } from "ant-design-vue";

export default {
  name: "Contact",
  components: {
    Layout,
    TitlePageCustom,
  },
  data() {
    return {
      formState: {},
    };
  },
  methods: {
    openNotification(type) {
      notification.config({
        duration: 3.5,
      });
      if (type == "success") {
        notification["success"]({
          message: "Message sent",
          description: "Thank you for contacting us",
        });
      } else {
        notification["error"]({
          message: "Oops!",
          description: "Can you try to contact us another time",
        });
      }
    },
    handleSubmit() {
      //we save the contact details in firebase and we display a notification
      this.$store.dispatch("saveContact", this.formState).then(() => {
        this.formState = {};
        this.openNotification("success");
      });
    },
  },
};
</script>
<style scoped></style>
