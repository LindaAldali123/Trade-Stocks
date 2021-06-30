<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{ danger: insufficientFunds }"
                    />
                </div>
                <div class="pull-right">
                    <button
                        class="btn btn-primary"
                        @click="buyStock"
                        :disabled="insufficientFunds || quantity <= 0"
                    >
                        <!---|| !Number.IsInteger(quantity) في حال كان الزر لايظهر بفواصل -->
                        {{ insufficientFunds ? " Insuf Funds" : "Buy" }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["stock"],
    data() {
        return {
            quantity: 0,
        };
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        },
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            console.log(order);
            this.$store.dispatch("buyStock", order);
            this.quantity = 0;
        },
    },
};
</script>
<style lang="scss" scoped>
.panel {
    border: 1px solid #ddd;
    margin: 20px;
}
.panel-heading {
    background-color: rgb(204, 202, 202);
    padding: 6px;
    color: rgb(40, 40, 41);
}
.panel-body {
    padding: 12px;
}
.panel-body .pull-left {
    float: left;
}
input {
    width: 160px;
}
.btn {
    margin: 1px;
}
.danger {
    border: 1px solid red;
}
</style>
