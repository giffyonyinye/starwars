<template>
    <div class="mt-6 pl-10 pr-10">
        <div>
            <p class="text-[#A4A7B7]">Species</p>
        </div>
        <div class="overflow-x-hidden">
            <table class="p-4 w-full border mt-8 text-[16px] table-auto">
                <thead>
                    <tr class="text-[#A4A7B7] border border-b">
                        <td><input class="mr-2" type="checkbox" name="check" id="check"></td>
                        <td>Name</td>
                        <td>Classification</td>
                        <td>Eye&nbsp;Colors</td>
                        <td>Hair&nbsp;Color</td>
                        <td>Height</td>
                        <td>Created</td>
                    </tr>
                </thead>
                <tr v-for="data in species" :key="data.id" class="border border-b p-2">
                    <td ><router-link :to="{name: 'specie-info', params: {name:data.name}}" ><input class="mr-2" type="checkbox" name="check" id="check"></router-link></td>
                    <td>{{data.name}}</td>
                    <td  >{{data.classification}}</td>
                    <td>{{data.eye_colors}}</td>
                    <td>{{data.hair_colors}}</td>
                    <td>{{data.average_height}}</td>
                    <td>{{moment(data.created).format('DD/MM/YYYY')}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import {baseUrl} from '../../../../Config';
const url = baseUrl;
export default {
    name:"SpecieData",
    data() {
        return  {
            species: []
        }
    },

    mounted() {
        this.getSpecies();
    },

    methods: {
        moment(date) {
            return moment(date);
        },
        getSpecies() {
            axios({
                method:"GET",
                url:`${url}/species`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.species = res.data.results;
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>