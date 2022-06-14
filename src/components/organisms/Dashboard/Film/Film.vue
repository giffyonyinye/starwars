<template>
    <div class="mt-6 pl-10 pr-10">
        <div>
            <p class="text-[#A4A7B7]">Film <i v-if="isLoading" class="fa fa-spinner fa-spin"></i></p>
        </div>
        <div class=" relative overflow-x-auto sm:rounded-lg">
            <table class="w-full border mt-6 text-[13px] table-auto">
                <thead>
                    <tr class="text-[#A4A7B7] border border-b p-2" style=" box-shadow:0px 0px 30px rgba(13, 47, 161, 0.07)">
                        <td class="px-6 py-3"><input type="checkbox" name="check" id="check"></td>
                        <td>Film Title</td>
                        <td class=" px-6 py-3">Release&nbsp;Date</td>
                        <td class="px-6 py-3">Director</td>
                        <td class="px-6 py-3">Producer</td>
                        <td>Episode&nbsp;ID</td>
                        <td class="px-6 py-3" >Character</td>
                    </tr>
                </thead>
                <tr v-for="data in film" :key="data.id" class="border border-b">
                    <td class="px-6 py-3" ><router-link :to="{name: 'film-info', params: {name:data.title}}" ><input class="mr-2" type="checkbox" name="check" id="check"></router-link></td>
                    <td>{{data.title}}</td>
                    <td class="px-6 py-3">{{data.release_date}}</td>
                    <td class="px-6 py-3">{{data.director}}</td>
                    <td class="px-6 py-3">{{data.producer}}</td>
                    <td>{{data.episode_id}}</td>
                    <td class="px-6 py-3">{{data.characters[0]}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {baseUrl} from '../../../../Config';
const url = baseUrl;
export default {
    name:"FilmView",
    data() {
        return  {
            film: [],
            isLoading:false
        }
    },

    mounted() {
        this.getFilms();
    },

    methods: {
        getFilms() {
            this.isLoading = true
            axios({
                method:"GET",
                url:`${url}/films`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.film = res.data.results;
                this.isLoading = false
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>