<template>
    <div class="flex" >
        <NavBar/>
        <div class="w-full">
           <Header :text="text" />
            <div class="p-4 mt-6 flex">
                <div>
                    <img src="../../../../assets/png/people.png" alt="specie">
                </div>
                <div class="ml-10">
                    <h1 class="text-[38px] font-extrabold">{{name}}</h1>
                    <div class="text-[16px]">
                        <p>Gender: <span>{{people.gender}}</span></p>
                        <p class="mt-2">Year of Birth: <span>{{people.birth_year}}</span></p>
                        <p class="mt-2">Skin Colors: <span>{{people.skin_color}}</span></p>
                        <p class="mt-2">Height: <span>{{people.height}}</span></p>
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
    name:"PeopleInfo",
    props:['name'],
    components:{
        NavBar, 
        Header,
    },

    data() {
        return {
            text: "< Back",
            people:[]
        }
    },

    mounted() {
        this.getPeople()
    },

    methods: {
        getPeople() {
            axios({
                method:"GET",
                url:`${url}/people/1/`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.people = res.data;
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>