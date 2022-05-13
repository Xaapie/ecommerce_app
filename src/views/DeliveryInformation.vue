<!--  Load Delivery Information page -->
<template>
    <Layout>
        <TitlePageCustom title="Delivery Information" />
        <AdvantagesVapeShop />
        <DeliveryInfo />
    </Layout>
</template>
<script>
import Layout from './layouts/Layout.vue'
import TitlePageCustom from '@/components/TitlePageCustom.vue'
import AdvantagesVapeShop from '@/components/AdvantagesVapeShop.vue'
import DeliveryInfo from '@/components/DeliveryInfo.vue'
export default {
    name: 'DeliveryInformation',
    components:{
        Layout,
        TitlePageCustom,
        AdvantagesVapeShop,
        DeliveryInfo
    }
}
</script>
<style scoped>


    
</style>