<!-- Load Terms & Conditions Policy page-->
<template>
    <Layout>
        <TitlePageCustom title="Terms & Conditions"/>
        <TermsConditionsData />
    </Layout>
</template>
<script>
import TitlePageCustom from '@/components/TitlePageCustom'
import TermsConditionsData from '@/components/TermsConditionsData'
import Layout from './layouts/Layout.vue'
export default {
    name:'AboutUs',
    components:{
        TitlePageCustom,
        Layout,
        TermsConditionsData
    }
}
</script>
<style>
    
</style>