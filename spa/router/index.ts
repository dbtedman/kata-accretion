import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";

export const HOME_ROUTE = "home";
export const ABOUT_ROUTE = "about";

export const routes = [
    {
        path: "/",
        name: HOME_ROUTE,
        component: HomeView,
    },
    {
        path: "/about",
        name: ABOUT_ROUTE,
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../view/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
