<!-- Header and footer-->
<template>
    <div>
        <Header/>
        <slot></slot>
        <FooterPage/>
    </div>
</template>
<script>
import FooterPage from '../../components/FooterPage.vue'
import Header from '../../components/Header.vue'
export default {
    name:'Layout',
    components:{
        FooterPage,
        Header
    }
}
</script>
<style>
    
</style>