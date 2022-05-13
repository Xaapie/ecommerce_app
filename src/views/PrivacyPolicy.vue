<!-- Load Privacy Policy page-->
<template>
    <Layout>
        <TitlePageCustom title="Privacy Policy"/>
        <PrivacyPolicyDetails />
    </Layout>
</template>
<script>
import Layout from './layouts/Layout.vue'
import TitlePageCustom from '@/components/TitlePageCustom'
import PrivacyPolicyDetails from '@/components/PrivacyPolicyDetails'
export default {
    name: 'PrivacyPolicy',
    components:{
        TitlePageCustom,
        Layout,
        PrivacyPolicyDetails
    }
}
</script>
<style>
    
</style>