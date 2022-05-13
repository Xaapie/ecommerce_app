<!-- Load Homepage-->
<template>
    <div>
        <Header/>
        <Main/>
        <FooterPage/>
        <div class="search-model-box">
            <div class="h-100 d-flex align-items-center justify-content-center">
                <div class="search-close-btn">+</div>
                <form class="search-model-form">
                    <input type="text" id="search-input" placeholder="Searching key.....">
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import FooterPage from '../components/FooterPage.vue'
export default {
    name: 'Master',
    components:{
        Header,
        Main,
        FooterPage
    }
}
</script>
<style>
    
</style>