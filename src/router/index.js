import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/Quiz",
        name: "Quiz",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Quiz.vue"),
    },
    {
        path: "/Stocks",
        name: "Stocks",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Stocks.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
