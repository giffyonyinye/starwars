<template>
    <div class="flex" >
        <div class="w-1/4">
            <NavBar/>
        </div>
        <div class="w-full">
           <Header/>
           <div>
                <StarshipData/>
           </div>
        </div>
    </div>
</template>

<script>
import StarshipData from './StarshipData.vue'
import Header from '../Header.vue'
import NavBar from "../NavBar.vue"
export default {
    name:"StarShips",
    components:{
        NavBar, 
        Header,
        StarshipData
        }
}
</script>