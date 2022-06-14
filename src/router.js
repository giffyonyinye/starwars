import {createRouter, createWebHistory} from 'vue-router';
const routes = [
    {path: "/", name: 'home', component:() => import("./components/organisms/LandingPage/Login.vue")},
    {path: "/dashboard", name: 'dashboard', component:() => import("./components/organisms/Dashboard/Dashboard.vue")},
    {path: "/starships", name: 'starships', component:() => import("./components/organisms/Dashboard/Starship/Starships.vue")},
    {path: "/people", name: 'people', component:() => import("./components/organisms/Dashboard/People/People.vue")},
    {path: "/species", name: 'species', component:() => import("./components/organisms/Dashboard/Species/Species.vue")},
    {path: "/specie-info/:name", name: 'specie-info', component:() => import("./components/organisms/Dashboard/Species/SpecieInfo.vue"), props:true},
    {path: "/people-info/:name", name: 'people-info', component:() => import("./components/organisms/Dashboard/People/PeopleInfo.vue"), props:true},
    {path: "/starship-info/:name", name: 'starship-info', component:() => import("./components/organisms/Dashboard/Starship/StarshipInfo.vue"), props:true},
    {path: "/film-info/:name", name: 'film-info', component:() => import("./components/organisms/Dashboard/Film/FilmInfo.vue"), props:true},
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;