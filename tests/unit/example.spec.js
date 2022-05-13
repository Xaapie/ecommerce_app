import Login from "../../src/views/Login.vue";
import Register from "../../src/views/Register.vue";
import Shop from "../../src/views/Shop.vue";
import NotFound from "../../src/views/NotFound.vue";
import Contact from "../../src/views/Contact.vue";
import { shallowMount, mount } from "@vue/test-utils";

//5 unit tests done.

describe("Login", () => {
  test("Check Login form", () => {
    const wrapper = shallowMount(Login);

    expect(wrapper.exists()).toBe(true);
  });
});

describe("Register", () => {
  test("Check Register form", () => {
    const wrapper = shallowMount(Register);

    expect(wrapper.exists()).toBe(true);
  });
});

describe("Not Found Page", () => {
  it("Check display of 404 page", () => {
    const wrapper = shallowMount(NotFound);

    expect(wrapper.exists()).toBe(true);
  });
});

describe("Contact Page", () => {
  it("Check display of contact page", () => {
    const wrapper = shallowMount(Contact);

    expect(wrapper.exists()).toBe(true);
  });
});

describe("Shop Page", () => {
  test("Check display of all products in shop", () => {
    const wrapper = shallowMount(Shop);

    expect(wrapper.exists()).toBe(true);
  });
});
