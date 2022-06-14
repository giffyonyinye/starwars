<template>
    <div class="flex md:flex-col" >
        <div class="w-1/4 md:w-full">
            <NavBar/>
        </div>
        <div class="w-screen">
            <div>
            <Header/>
            </div>
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