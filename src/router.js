import {createRouter, createWebHistory} from 'vue-router';
import Login from "./components/organisms/LandingPage/Login.vue"
import Dashboard from "./components/organisms/Dashboard/Dashboard.vue"
import Starships from "./components/organisms/Dashboard/Starship/Starships.vue"
import People from "./components/organisms/Dashboard/People/People.vue"
import Species from "./components/organisms/Dashboard/Species/Species.vue"
const routes = [
    {path: "/", name: 'home', component: Login},
    {path: "/dashboard", name: 'dashboard', component: Dashboard},
    {path: "/starships", name: 'starships', component: Starships},
    {path: "/people", name: 'people', component: People},
    {path: "/species", name: 'species', component: Species},
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;