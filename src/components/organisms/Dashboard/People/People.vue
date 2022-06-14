<template>
    <div class="flex" >
        <NavBar/>
        <div class="w-full">
           <Header/>
           <div>
                <PeopleData/>
           </div>
        </div>
    </div>
</template>

<script>
import PeopleData from './PeopleData.vue'
import Header from '../Header.vue'
import NavBar from "../NavBar.vue"
export default {
    name:"PeopleView",
    components:{
        NavBar, 
        Header,
        PeopleData
        }
}
</script>