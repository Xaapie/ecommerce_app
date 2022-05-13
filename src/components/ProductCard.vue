<!-- Whish list page-->
<template>
    <div class="single-popular-items mb-50 text-center">
        <div class="popular-img">
            <img :src="product.image" alt="">
            <div class="img-cap">
                <span @click="display">Select options</span>
            </div>
            <div class="favorit-items">
                <span v-if="wishExist"><i class="fas fa-heart red" @click="removeWish"></i></span>
                <span v-else><i class="far fa-heart red" @click="addWish"></i></span>
            </div>
        </div>
        <div class="popular-caption">
            <h6 class="category__title">{{product.category}}</h6>
            <h4 class="name__title">{{product.name}}</h4>
            <span class="price__title">£{{product.price}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'ProductCard',
    props:['product'],
    data(){
        return{
            wishExist: false,
        }
    },
    methods:{
        display(){
            window.scrollTo(0, 0);
            this.$router.push({name:'ProductDetails', params:{id:this.product.id}})
        },
        addWish(){
            let wishList = JSON.parse(localStorage.getItem('wishs'));
            wishList.push(this.product.id)
            localStorage.setItem('wishs', JSON.stringify(wishList))
            this.wishExist = true;
        },
        removeWish(){
            let wishList = JSON.parse(localStorage.getItem('wishs'));
            wishList = wishList.filter((item) => item != this.product.id)
            localStorage.setItem('wishs', JSON.stringify(wishList))
            this.wishExist = false;
        },
        verifyProductWish(){
            let wishList = JSON.parse(localStorage.getItem('wishs'));
            if(wishList.length > 0){
                let item = wishList.find((item) => item == this.product.id)
                if(item){
                    this.wishExist = true;
                }else{
                    this.wishExist = false;
                }
            }
        }
    },
    mounted(){
        this.verifyProductWish()
    }
}
</script>
<style scoped>
.red{
    color: red;
}
    
</style>