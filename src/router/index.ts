import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LegalView from "../views/LegalView.vue";

const routes = [
    {path: "/",   component: HomeView, name: "home"},
    {path: "/legal",   component: LegalView, name:'legal'}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})


export default router;