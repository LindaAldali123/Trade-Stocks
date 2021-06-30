<template>
    <div class="row">
        <appStock
            v-for="stock in stocks"
            v-bind:key="stock.id"
            :stock="stock"
        ></appStock>
    </div>
</template>
<script>
import Stock from "./Stock.vue";
export default {
    components: {
        appStock: Stock,
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        },
    },
};
</script>
