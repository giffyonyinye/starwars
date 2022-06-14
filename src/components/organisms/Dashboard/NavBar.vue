<template>
    <div class="bg-[#031434] w-1/4 p-4" style="height:100vh">
        <img class="w-[107px] m-auto" src="../../../assets/svg/starwars-logo.svg" alt="starwars">

        <div class="pl-6 mt-11">
            <div class="flex p-4 rounded-sm text-[16px]" :class="{active: $route.name === 'dashboard'}" >
                <img src="../../../assets/svg/overview.svg" alt="overview">
                <router-link class="text-white ml-5"  to="/dashboard">Overview</router-link>
            </div>

            <div class="flex p-4 rounded-sm text-[16px] mt-[70px]" :class="{active: $route.name === 'starships'}" >
                <img src="../../../assets/svg/blue.svg" alt="blue">
                <router-link class="text-white ml-5"  to="/starships">Starships</router-link>
            </div>

            <div class="flex p-4 rounded-sm text-[16px]" :class="{active: $route.name === 'people'}" >
                <img src="../../../assets/svg/purple.svg" alt="overview">
                <router-link class="text-white ml-5"  to="/people">People</router-link>
            </div>

            <div class="flex p-4 rounded-sm text-[16px]" :class="{active: $route.name === 'species'}" >
                <img src="../../../assets/svg/yellow.svg" alt="overview">
                <router-link class="text-white ml-5"  to="/species">Species</router-link>
            </div>
        </div>
    </div>
</template>