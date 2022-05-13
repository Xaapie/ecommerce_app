<!-- Search page -->
<template>
    <Layout>
        <TitlePage title="Shop"/>
        <section class="popular-items latest-padding" v-if="products">
            <div class="container">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="row">
                            <div v-for="product in getProducts" :key="product.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <ProductCard :product="product" />
                            </div>
                            <div v-if="getProducts.length == 0" class="col-md-12">
                                <p class="empty__search">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ShopMethod/>
    </Layout>
</template>
<script>
import Layout from './layouts/Layout.vue'
import ShopMethod from '../components/ShopMethod.vue'
import TitlePage from '../components/TitlePage.vue'
import ProductCard from '../components/ProductCard.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Shop',
    components:{
        Layout,
        ShopMethod,
        TitlePage,
        ProductCard
    },
    computed:{
        ...mapGetters({
            products: 'get_products'
        }),

        getProducts(){
            if(this.$route.params.id){
                return this.products.filter((item) => item.name.toLowerCase().includes(this.$route.params.id.toLowerCase()))
            }else{
                return this.products
            }
        }
    },
    mounted(){
        
    }
}
</script>
<style scoped>
    .category__title{
        color: #B5B5B5
    }
    .name__title{
        font-size: 20px;
    }
    .popular-caption span{
        font-size: 20px;
        font-weight: bold;
        color: red;
    }
    
</style>