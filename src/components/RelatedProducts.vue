<!-- Related products -->
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Related products</h2>
            </div>
            <div class="col-md-4" v-for="product in getRelatedProducts" :key="product.id">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>
<script>
import ProductCard from '@/components/ProductCard'
export default {
    name:'RelatedProducts',
    props:['products'],
    components:{
        ProductCard
    },
    computed:{
        getRelatedProducts(){
            return this.products.filter((item) => item.id != this.$route.params.id)
        }
    }
}
</script>
<style>
    
</style>