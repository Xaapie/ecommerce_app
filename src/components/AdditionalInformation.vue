<!--Additional Information-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h4>Specifications</h4>
        <ul>
          <li v-for="(spec, index) in getInfo?.specifications" :key="index">
            {{ spec }}
          </li>
        </ul>
        <h4>Product Highlights</h4>
        <ul>
          <li v-for="(spec, index) in getInfo?.highlights" :key="index">
            {{ spec }}
          </li>
        </ul>
        <h4>Kit Content</h4>
        <ul>
          <li v-for="(spec, index) in getInfo?.kit" :key="index">{{ spec }}</li>
        </ul>
        <p>
          Simple packing. Customary Packing from the factory, the packing is
          subject to change without notice.
        </p>
        <img
          src="/frontend/img/other_images/additional_info.jpg"
          alt=""
          style="width: 100%"
          class="addit_image"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdditionalInformation",
  props: ["name"],
  data() {
    return {
      information: [
        {
          name: "Geek Bar",
          specifications: [
            "Size: 23.2 × 14.3 × 105mm",
            "Battery: 500mAh inbuilt battery",
            "Pod capacity: Pre-refilled juice",
            "Puffs: ≥575 Puffs",
            "Nicotine content: 2%Nic Salt",
            "Cigarette material: PCTG + heating wire organic cotton + non-woven fabric + needle cotton",
            "Main material: PC+ABS two-colour injection",
            "Standard resistance: 1.40-1.50ohm",
            "Maximum power: 9W",
            "Output: Constant voltage 3.6V output",
          ],
          highlights: [
            "500mAh High Voltage Battery",
            "2%Nic Salt pre-refilled juice for real &smooth taste",
            "Solid Throat hit with deep satisfaction",
            "Fashion Design with comfortable hand feeling",
            "Various delicious flavours are available",
          ],
          kit: ["1 x GEEK BAR Disposable Pod Device 500mAh"],
        },
        {
          name: "Frunk Bar",
          specifications: [],
          highlights: [
            "400mAh internal battery (non-rechargeable)",
            "2ml pre-refilled juice with 2% nicotine strength",
            "550 to 600 puffs",
            "Draw activated",
            "Multiple flavours for your selection",
          ],
          kit: ["1 x Frunk Bar Disposable Pod Device 600 Puffs"],
        },
        {
          name: "IVG Bar",
          specifications: [],
          highlights: [
            "Most fashionable design with portable body.",
            "2ml pre-refilled juice with 2% nicotine strength.",
            "Large 500mAh inbuilt battery for 600 puffs.",
            "Multiple flavours for your selection.",
          ],
          kit: ["1 x IVG Bar Disposable Pod Device 600 Puffs."],
        },
        {
          name: "ELF Bar",
          specifications: [
            "Size: Φ16 x 104 mm",
            "E-juice capacity: 2ml",
            "Nicotine strength: 2% Nicotine",
            "Battery: 550mAh",
            "Puffs: 600 Puffs",
          ],
          highlights: [
            "Most fashionable design with portable body",
            "2ml pre-refilled juice with 2% nicotine strength.",
            "Large 500mAh inbuilt battery for 600 puffs.",
            "Multiple flavours for your selection.",
          ],
          kit: ["1 x Elf Bar Disposable Pod Device 600 Puffs."],
        },
      ],
    };
  },
  computed: {
    getInfo() {
      return this.information.find((item) => item.name == this.name);
    },
  },
};
</script>
<style scoped>
p {
  color: black;
}
ul {
  margin-left: 30px;
  list-style: disc;
}

.addit_image {
  display: block;
}

@media screen and (max-width: 997px) {
  .addit_image {
    display: none;
  }
}
</style>
