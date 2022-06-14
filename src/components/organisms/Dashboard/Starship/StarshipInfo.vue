<template>
    <div class="flex" >
        <NavBar/>
        <div class="w-full">
           <Header :text="text" />
            <div class="p-4 mt-6 flex">
                <div>
                    <img src="../../../../assets/png/starship.png" alt="specie">
                </div>
                <div class="ml-10">
                    <h1 class="text-[38px] font-extrabold">{{name}}</h1>
                    <div class="text-[16px]">
                        <p>Model: <span>{{starship.model}}</span></p>
                        <p class="mt-2">Passengers: <span>{{starship.passengers}}</span></p>
                        <p class="mt-2">Pilot: <span>{{starship.pilot}}</span></p>
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
    name:"StarshipInfo",
    props:['name'],
    components:{
        NavBar, 
        Header,
    },

    data() {
        return {
            text: "< Back",
            starship:[]
        }
    },

    mounted() {
        this.getStarshipInfo()
    },

    methods: {
        getStarshipInfo() {
            axios({
                method:"GET",
                url:`${url}/starships/9/`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.starship = res.data;
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>