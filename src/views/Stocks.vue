<template>
    <div class="Stock">
        <Stocks />
    </div>
</template>

<script>
// @ is an alias to /src
import Stocks from "@/components/Stocks.vue";

export default {
    name: "Stock",
    components: {
        Stocks: Stocks,
    },
};
</script>
