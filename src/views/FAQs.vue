<!-- Load FAQ page-->
<template>
    <Layout>
        <TitlePageCustom title="Frequently Asked Questions"/>
        <FAQsDetails />
    </Layout>
</template>
<script>
import Layout from './layouts/Layout.vue'
import TitlePageCustom from '@/components/TitlePageCustom'
import FAQsDetails from '@/components/FAQsDetails'
export default {
    name:'FAQs',
    components:{
        Layout,
        TitlePageCustom,
        FAQsDetails
    }
}
</script>
<style>
    
</style>