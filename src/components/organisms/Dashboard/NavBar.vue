<template>
    <div class="bg-[#031434] p-4 h-screen md:h-auto">
        <img class="w-[107px] m-auto" src="../../../assets/svg/starwars-logo.svg" alt="starwars">

        <div class="pl-6 mt-11">
            <div class="flex p-4 rounded-sm text-[16px]" :class="{active: $route.name === 'dashboard' || $route.name === 'film-info'}" >
                <img src="../../../assets/svg/overview.svg" alt="overview">
                <router-link class="text-white ml-5"  to="/dashboard">Overview</router-link>
            </div>

            <div class="flex p-4 rounded-sm text-[16px] mt-[70px] md:mt-[20px]" :class="{active: $route.name === 'starships' || $route.name === 'starship-info'}" >
                <img src="../../../assets/svg/blue.svg" alt="blue">
                <router-link class="text-white ml-5"  to="/starships">Starships</router-link>
            </div>

            <div class="flex p-4 rounded-sm text-[16px]" :class="{active: $route.name === 'people' || $route.name === 'people-info'}" >
                <img src="../../../assets/svg/purple.svg" alt="overview">
                <router-link class="text-white ml-5"  to="/people">People</router-link>
            </div>

            <div class="flex p-4 rounded-sm text-[16px]" :class="{active: $route.name === 'species' || $route.name === 'specie-info'}" >
                <img src="../../../assets/svg/yellow.svg" alt="overview">
                <router-link class="text-white ml-5"  to="/species">Species</router-link>
            </div>
        </div>
    </div>
</template>