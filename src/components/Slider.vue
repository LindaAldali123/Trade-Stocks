<template>
    <!--Start Slider -->
    <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
    >
        <ol class="carousel-indicators">
            <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
            ></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    class="d-block w-100"
                    src="../assets/s1.jpg"
                    alt="First slide"
                    width="1100"
                    height="518"
                    style="opacity: 1.1"
                />
            </div>
        </div>
    </div>
    <!-- End Slider -->
</template>
<style lang="scss" scoped>
@media (max-width: 700px) {
    .carousel-inner img {
        width: 480px !important;
    }
}
</style>
