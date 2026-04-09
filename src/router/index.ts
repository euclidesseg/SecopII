import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LegalView from "../views/LegalView.vue";

const routes = [
    {path: "/",   component: HomeView, name: "home"},
    {path: "/legal",   component: LegalView, name:'legal'},
    {path:"/contrato",name:"detalle", component: () => import("../views/DetalleContratoView.vue")},
    {path:"/contrato/:id",name:"detalle", component: () => import("../views/DetalleContratoView.vue")},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})


export default router;