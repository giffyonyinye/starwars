<template>
    <div class="flex" >
        <NavBar/>
        <div class="w-full">
           <Header/>
           <div>
                <SpecieData/>
           </div>
        </div>
    </div>
</template>

<script>
import SpecieData from './SpecieData.vue'
import Header from '../Header.vue'
import NavBar from "../NavBar.vue"
export default {
    name:"SpecieView",
    components:{
        NavBar, 
        Header,
        SpecieData
        }
}
</script>