import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "jquery";
import "jquery/dist/jquery.min.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.js";
import store from "./store";
/*import VueResource from "vue-resource";*/

import "normalize.css";
import "./scss/main.scss";
Vue.config.productionTip = false;
/*Vue.http.options.root =
    "https://console.firebase.google.com/project/vuejs-stock-trader-fb9e6";*/

Vue.use("bootstrap");
/*Vue.use("VueResource");*/
Vue.filter("currency", (value) => {
    return "$" + value.toLocalString();
});
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
