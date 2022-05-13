<!-- Product images in the shop page-->
<template>
    <div class="gallery-area">
        <div class="container-fluid p-0 fix">
            <div class="row">
                <div class="col-xl-6 col-lg-4 col-md-6 col-sm-4">
                    <div class="single-gallery mb-30">
                        <img class="mobile_display" src="frontend/img/gallery/gallery1.png" />
                        <div class="gallery-img big-img" style="background-image: url(frontend/img/gallery/gallery1.png);"></div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div class="single-gallery mb-30">
                        <img class="mobile_display" src="frontend/img/gallery/gallery2.png" />
                        <div class="gallery-img big-img" style="background-image: url(frontend/img/gallery/gallery2.png);"></div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-12">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                            <div class="single-gallery mb-30">
                                <img class="mobile_display" src="frontend/img/gallery/gallery3.png" />
                                <div class="gallery-img small-img" style="background-image: url(frontend/img/gallery/gallery3.png);"></div>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12  col-md-6 col-sm-6">
                            <div class="single-gallery mb-30">
                                <img class="mobile_display" src="frontend/img/gallery/gallery4.png" />
                                <div class="gallery-img small-img" style="background-image: url(frontend/img/gallery/gallery4.png);"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GalleryProducts'
}
</script>
<style scoped>
.mobile_display{
    display: none;
    width: 100%;
}

@media only screen and (max-width: 600px) {
  .mobile_display{
      display: block;
  }
  .gallery-img{
      display: none;
  }
}
    
</style>