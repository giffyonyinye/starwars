<template>
    <div class="flex lg:flex-col" >
        <div class="w-1/4 lg:w-full">
            <NavBar/>
        </div>
        <div class="w-full">
           <Header :text="text" />
            <div class="p-4 mt-6 flex">
                <div>
                    <img src="../../../../assets/png/starship.png" alt="specie">
                </div>
                <div class="ml-10 md:ml-4">
                    <h1 class="text-[38px] md:text-[24px] font-extrabold">{{name}}<i v-if="isLoading" class="fa fa-spinner fa-spin"></i></h1>
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
            starship:[],
            isLoading:false
        }
    },

    mounted() {
        this.getStarshipInfo()
    },

    methods: {
        getStarshipInfo() {
            this.isLoading = true
            axios({
                method:"GET",
                url:`${url}/starships/9/`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.starship = res.data;
                this.isLoading = false
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>