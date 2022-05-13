<!-- Roo of the application defined-->
<template>
  <a-modal
    v-model:visible="visible"
    :footer="null"
    :closable="false"
    :maskClosable="false"
  >
    <template #footer> </template>
    <p class="bigTitle">Are you over 18?</p>
    <p class="smallTitle">
      You must be 18 years of age or older to access the Totally Vapour website.
      Please verify your age to enter.
    </p>
    <div class="regroup_buttons">
      <a-button class="older" type="primary" @click="popupChange('older')"
        >I AM 18 OR OLDER</a-button
      >
      <a-button class="younger" type="primary" @click="popupChange('younger')"
        >I AM UNDER 18</a-button
      >
    </div>
  </a-modal>
  <!-- <a-modal v-model:visible="access" :footer="null" :closable="false">
      <template #footer>
      </template>
      <p class="bigTitle">Access forbidden</p>
      <p class="smallTitle">You access is restricted because of your age.</p>
    </a-modal> -->
  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      access: false,
    };
  },
  methods: {
    popupChange(data) {
      if (data == "older") {
        this.visible = false;
        localStorage.setItem("older", "yes");
      } else if (data == "younger") {
        this.visible = false;
        window.location.href =
          "https://digital.nhs.uk/data-and-information/publications/statistical/smoking-drinking-and-drug-use-among-young-people-in-england/2018/part-4-electronic-cigarette-use-vaping#:~:text=New%20legislation%20came%20into%20force,under%20the%20age%20of%2018.";
      }
    },
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("getProducts");
    if (!localStorage.getItem("wishs")) {
      localStorage.setItem("wishs", JSON.stringify([]));
    }

    if (localStorage.getItem("older") === "yes") {
      this.visible = false;
    }
  },
};
</script>
<style scoped>
.bigTitle {
  font-size: 35px;
  font-weight: bold;
  color: black;
  text-align: center;
}

.smallTitle {
  text-align: center;
  font-size: 15px;
  color: black;
  margin: 10px;
}

.regroup_buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.older {
  background: black;
  border: unset;
}

.older:hover {
  background: black;
  border: unset;
}

.younger {
  background: ghostwhite;
  color: black;
  border: unset;
}

.younger:hover {
  background: ghostwhite;
  color: black;
  border: unset;
}
</style>
