<template>
    <div class="header">
        <!--Start Navbar-->
        <div class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="logo">
                <router-link to="/" class="navbar-brand"
                    >Stock Trader</router-link
                >
            </div>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/stocks" tag="li" exact
                            ><a class="nav-link">Stocks</a></router-link
                        >
                    </li>
                    <li class="nav-item active">
                        <router-link to="/about" tag="li" replace
                            ><a class="nav-link">Portfolio</a></router-link
                        >
                    </li>
                    <li class="nav-item active">
                        <router-link to="/quiz" tag="li" replace
                            ><a class="nav-link">Quiz</a></router-link
                        >
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li
                        class="dropdown"
                        :class="{ open: isDropDownOpen }"
                        @click="isDropDownOpen = !isDropDownOpen"
                    >
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Save & Load<span class="caret"></span
                        ></a>
                    </li>
                    <li class="navbar-text navbar-right">Funds: {{ funds }}</li>
                    <!--{{funds | currency}}-->
                </ul>
            </div>
        </div>
        <ul v-if="isDropDownOpen" :class="isDropDownOpen ? 'op' : 'co'">
            <li>
                <a class="dropdown-item" href="#" @click="saveData"
                    >Save Data</a
                >
            </li>
            <li>
                <a class="dropdown-item" href="#" @click="loadData"
                    >Load Data</a
                >
            </li>
        </ul>
        <!--End Navbar-->
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "AppHeader",
    data() {
        return {
            isDropDownOpen: false,
        };
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
    },
    methods: {
        ...mapActions({
            randomizeStocks: "randomizeStocks",
            fetchData: "loadData",
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks,
            };
            this.$http.put("data.json", data);
        },
        loadData() {
            this.fetchData();
        },
    },
};
</script>
<style lang="scss" scoped>
.header {
    overflow: hidden;
    .logo {
        font-size: 24px;
        padding: 20px;
        float: left;
        width: 200px;
    }
    ul {
        float: left;
        width: calc(100% - 200px);
        margin: 0;
    }
    li {
        padding: 10px;
        display: inline-block;
        font-size: 18px;
        a {
            color: #fff;
            text-decoration: none;
        }
    }
}
.op {
    width: 160px !important;
    margin-left: 800px !important;
    background-color: rgb(37, 37, 37);
    margin-top: -30px !important;
    z-index: 1;
    position: absolute;
}
</style>
