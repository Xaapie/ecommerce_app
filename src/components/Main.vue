<!-- Homepage-->
<template>
    <main>
        <!--? slider Area Start -->
        <div class="slider-area ">
            <div class="slider-active">
                <!-- Single Slider -->
                <div class="single-slider slider-height d-flex align-items-center slide-bg">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-md-12">
                                <img style="width: 100%; margin-top:20px;" src="/frontend/img/other_images/Nicotine.png" alt=""/>
                            </div>
                        </div>
                        <div class="row justify-content-between align-items-center">
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div class="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Disposable Vape Kits</h1>
                                    <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">The most vape-licious of flavours consisting of succulent fusions of fruit, a confection of desserts, stimulating bursts of delicious drinks and a hint for mint with the menthol choice.</p>
                                    <!-- Hero-btn -->
                                    <div class="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                                        <router-link to="/shop" class="btn hero-btn">Shop Now</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                <div class="hero__img" data-animation="bounceIn" data-delay=".4s">
                                    <img src="frontend/img/hero/vapBackground.png" alt="" class=" heartbeat">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- slider Area End-->
        <!-- ? New Product Start -->
        <NewProducts/>
        <!--  New Product End -->
        <!--? Gallery Area Start -->
        <GalleryProducts/>
        <!-- Gallery Area End -->
        <!--? Popular Items Start -->
        <OurProducts/>
        <!-- Popular Items End -->
        <!--? Video Area Start -->
        <VideoCard/>
        <!-- Video Area End -->
        <!--? Vape Choice  Start-->
        <VapeChoice/>
        <!-- Vape Choice  End-->
        <!--? Shop Method Start-->
        <ShopMethod/>
        <!-- Shop Method End-->
    </main>
</template>
<script>
import OurProducts from './OurProducts.vue'
import VideoCard from './VideoCard.vue'
import ShopMethod from './ShopMethod.vue'
import GalleryProducts from './GalleryProducts.vue'
import VapeChoice from './VapeChoice.vue'
import NewProducts from './NewProducts.vue'
export default {
    name: 'Main',
    components:{
        OurProducts,
        VideoCard,
        ShopMethod,
        GalleryProducts,
        VapeChoice,
        NewProducts
    }
}
</script>
<style>
    
</style>