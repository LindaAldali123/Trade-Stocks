<template>
    <div class="home">
        <Slider />
        <div class="hom">
            <h1>Trade Or View Portfolio.</h1>
            <h6>You May Save & Load Your Data.</h6>
            <h6>Click on 'End Day' to Begin A new Day.</h6>
            <hr />
            <p>Your Funds: {{ funds }}</p>
        </div>
        <Card />
        <Footer />
        <!--{{funds | currency}}-->
    </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
// @ is an alias to /src

export default {
    name: "Home",
    components: {
        Slider: Slider,
        Card: Card,
        Footer: Footer,
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
    },
};
</script>
<style lang="scss" scoped>
.hom {
    margin-top: 20px;
    padding: 20px;
    background-image: linear-gradient(transparent, #0d0d0e);
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.hom h1 {
    color: rgb(136, 134, 134);
    font-size: 45px;
    font-weight: bolder;
}
.hom h6 {
    color: rgb(223, 217, 217);
    font-size: 24px;
    font-weight: bolder;
}
.hom p {
    color: rgb(146, 144, 144);
    font-size: 20px;
    font-weight: bolder;
}
.hom p:hover {
    color: gray;
}
</style>
