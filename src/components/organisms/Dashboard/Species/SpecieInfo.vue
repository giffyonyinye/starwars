<template>
    <div class="flex" >
        <NavBar/>
        <div class="w-full">
           <Header :text="text" />
            <div class="p-4 mt-6 flex">
                <div>
                    <img src="../../../../assets/png/specie.png" alt="specie">
                </div>
                <div class="ml-10">
                    <h1 class="text-[38px] font-extrabold">{{name}}</h1>
                    <div class="text-[16px]">
                        <p>Designation: <span>{{specie.designation}}</span></p>
                        <p class="mt-2">Language: <span>{{specie.language}}</span></p>
                        <p class="mt-2">Eye Colors: <span>{{specie.eye_colors}}</span></p>
                        <p class="mt-2">Average Lifespan: <span>{{specie.average_lifespan}}</span></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Header from '../Header.vue'
import NavBar from "../NavBar.vue"
import axios from 'axios';
import {baseUrl} from '../../../../Config';
const url = baseUrl;
export default {
    name:"SpecieInfo",
    props:['name'],
    components:{
        NavBar, 
        Header,
    },

    data() {
        return {
            text: "< Back",
            specie:[]
        }
    },

    mounted() {
        this.getSpecie()
    },

    methods: {
        getSpecie() {
            axios({
                method:"GET",
                url:`${url}/species/3`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.specie = res.data;
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>