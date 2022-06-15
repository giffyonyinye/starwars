<template>
    <div class="flex lg:flex-col">
        <div class="w-1/4 lg:w-full">
            <NavBar/>
        </div>
        <div class="w-full">
           <Header :text="text" />
            <div class="p-4 mt-6 flex">
                <div>
                    <img src="../../../../assets/png/film.png" alt="specie">
                </div>
                <div class="ml-10 md:ml-4">
                    <h1 class="text-[38px] md:text-[24px] font-extrabold">{{name}} <i v-if="isLoading" class="fa fa-spinner fa-spin"></i></h1>
                    
                    <div class="text-[16px]">
                        <p>Director: <span>{{film.director}}</span></p>
                        <p class="mt-2">Producer: <span>{{film.producer}}</span></p>
                        <p class="mt-2">Release Date: <span>{{film.release_date}}</span></p>
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
    name:"FilmInfo",
    props:['name'],
    components:{
        NavBar, 
        Header,
    },

    data() {
        return {
            text: "< Back",
            film:[],
            isLoading: false
        }
    },

    mounted() {
        this.getFilmInfo()
    },

    methods: {
        getFilmInfo() {
            this.isLoading = true
            axios({
                method:"GET",
                url:`${url}/films/1`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.film = res.data;
                this.isLoading = false
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>