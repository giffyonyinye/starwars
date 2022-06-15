<template>
    <div class="mt-6 pl-10 pr-10 md:pl-4 mb-5">
        <div>
            <p class="text-[#A4A7B7]">Starships <i v-if="isLoading" class="fa fa-spinner fa-spin"></i></p>
        </div>
        <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="p-4 w-full border mt-8 text-[13px] table-auto">
                <thead>
                    <tr class="text-[#A4A7B7] border border-b" style=" box-shadow:0px 0px 30px rgba(13, 47, 161, 0.07)">
                        <td class="px-6 py-3"><input class="mr-2" type="checkbox" name="check" id="check"></td>
                        <td >Name</td>
                        <td class="px-6 py-3">Model</td>
                        <td class="px-6 py-3">Class</td>
                        <td class="px-6 py-3">Passenger</td>
                        <td class="px-6 py-3">Length</td>
                        <td class="px-6 py-3">Character</td>
                    </tr>
                </thead>
                <tr v-for="data in starships" :key="data.id" class="border border-b p-2">
                    <td class="px-6 py-3" ><router-link :to="{name: 'starship-info', params: {name:data.name}}" ><input class="mr-2" type="checkbox" name="check" id="check"></router-link></td>
                    <td>{{data.name}}</td>
                    <td  class="px-6 py-3" >{{data.model}}</td>
                    <td class="px-6 py-3">{{data.starship_class}}</td>
                    <td class="px-6 py-3">{{data.passengers}}</td>
                    <td class="px-6 py-3">{{data.length}}</td>
                    <td class="px-6 py-3">{{data.characters}}</td>
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
    name:"StarshipData",
    data() {
        return  {
            starships: [],
            isLoading: false
        }
    },

    mounted() {
        this.getStarships();
    },

    methods: {
        getStarships() {
            this.isLoading = true
            axios({
                method:"GET",
                url:`${url}/starships`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.starships = res.data.results;
                this.isLoading = false;
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>