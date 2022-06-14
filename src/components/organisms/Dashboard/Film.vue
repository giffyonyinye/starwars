<template>
    <div class="mt-6 pl-10 pr-10">
        <div>
            <p class="text-[#A4A7B7]">Film</p>
        </div>
        <div class="overflow-x-hidden">
            <table class="p-4 w-full border border-separate mt-8 text-[16px] table-auto">
                <thead>
                    <tr class="text-[#A4A7B7] border border-b p-4">
                        <td><input class="mr-2" type="checkbox" name="check" id="check"></td>
                        <td>Film Title</td>
                        <td>Release&nbsp;Date</td>
                        <td>Director</td>
                        <td>Producer</td>
                        <td>Episode&nbsp;ID</td>
                        <td>Character</td>
                    </tr>
                </thead>
                <tr v-for="data in film" :key="data.id" class="border border-b">
                    <td ><input class="mr-2" type="checkbox" name="check" id="check"></td>
                    <td>{{data.title}}</td>
                    <td  >{{data.release_date}}</td>
                    <td>{{data.director}}</td>
                    <td>{{data.producer}}</td>
                    <td>{{data.episode_id}}</td>
                    <td>{{data.characters[0]}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {baseUrl} from '../../../Config';
const url = baseUrl;
export default {
    name:"FilmView",
    data() {
        return  {
            film: []
        }
    },

    mounted() {
        this.getFilms();
    },

    methods: {
        getFilms() {
            axios({
                method:"GET",
                url:`${url}/films`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.film = res.data.results;
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>