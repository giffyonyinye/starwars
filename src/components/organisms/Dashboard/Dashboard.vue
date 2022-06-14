<template>
    <div class="flex" >
        <NavBar/>
        <div class="w-full">
           <Header/>
           <div>
           <CategoryOverview/>
            <Film/>
           </div>
        </div>
    </div>
</template>

<script>
import CategoryOverview from './CategoryOverview.vue'
import Film from './Film.vue'
import Header from './Header.vue'
import NavBar from "./NavBar.vue"
export default {
    name:"DashBoard",
    components:{NavBar, Header, CategoryOverview,Film}
}
</script>