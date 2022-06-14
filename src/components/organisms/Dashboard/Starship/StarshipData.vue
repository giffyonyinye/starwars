<template>
    <div class="mt-6 pl-10 pr-10">
        <div>
            <p class="text-[#A4A7B7]">Starships <i v-if="isLoading" class="fa fa-spinner fa-spin"></i></p>
        </div>
        <div class="overflow-x-hidden">
            <table class="p-4 w-full border mt-8 text-[16px] table-auto">
                <thead>
                    <tr class="text-[#A4A7B7] border border-b">
                        <td><input class="mr-2" type="checkbox" name="check" id="check"></td>
                        <td>Name</td>
                        <td>Model</td>
                        <td>Class</td>
                        <td>Passenger</td>
                        <td>Length</td>
                        <td>Character</td>
                    </tr>
                </thead>
                <tr v-for="data in starships" :key="data.id" class="border border-b p-2">
                    <td ><router-link :to="{name: 'starship-info', params: {name:data.name}}" ><input class="mr-2" type="checkbox" name="check" id="check"></router-link></td>
                    <td>{{data.name}}</td>
                    <td  >{{data.model}}</td>
                    <td>{{data.starship_class}}</td>
                    <td>{{data.passenger}}</td>
                    <td>{{data.length}}</td>
                    <td>{{data.characters}}</td>
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