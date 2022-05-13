<!-- Dashbord Page-->
<template>
    <Layout>
        <TitlePage title="Dashboard" />
        <DetailsUser :info="info"/>
    </Layout>
</template>
<script>
import Layout from './layouts/Layout.vue'
import TitlePage from '@/components/TitlePage'
import DetailsUser from '@/components/DetailsUser.vue'
import { mapGetters } from 'vuex'
export default {
    name:'Dashboard',
    components:{
        Layout,
        TitlePage,
        DetailsUser
    },
    computed:{
        ...mapGetters({
            info: 'get_user_info'
        })
    },
    created(){
        //we get the info of authenticated user from firebase
        this.$store.dispatch('getUserInfo')
    }
}
</script>
<style>
    
</style>