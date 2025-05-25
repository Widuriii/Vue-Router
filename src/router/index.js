import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue';
import Shop from '../views/Shop.vue';
import Tutorial from '../views/Tutorial.vue';
import AboutUs from '../views/AboutUs.vue';

const routes = [
    {
        path:'/',
        redirect: '/dashboard',
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component: Dashboard,
    },
    {
        path:'/shop',
        name:'Shop',
        component: Shop,
    },
    {
        path:'/tutorial',
        name:'Tutorial',
        component: Tutorial,
    },
    {
        path:'/about',
        name:'AboutUs',
        component: AboutUs,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;