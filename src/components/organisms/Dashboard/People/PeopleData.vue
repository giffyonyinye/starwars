<template>
    <div class="mt-6 pl-10 pr-10">
        <div>
            <p class="text-[#A4A7B7]">People</p>
        </div>
        <div class="overflow-x-hidden">
            <table class="p-4 w-full border mt-8 text-[16px] table-auto">
                <thead>
                    <tr class="text-[#A4A7B7] border border-b">
                        <td><input class="mr-2" type="checkbox" name="check" id="check"></td>
                        <td>Name</td>
                        <td>Birth&nbsp;Year</td>
                        <td>Gender</td>
                        <td>Hair&nbsp;Color</td>
                        <td>Height</td>
                        <td>Created</td>
                    </tr>
                </thead>
                <tr v-for="data in people" :key="data.id" class="border border-b p-2">
                    <td ><router-link :to="{name: 'people-info', params: {name:data.name}}"><input class="mr-2" type="checkbox" name="check" id="check"></router-link></td>
                    <td>{{data.name}}</td>
                    <td  >{{data.birth_year}}</td>
                    <td>{{data.gender}}</td>
                    <td>{{data.hair_color}}</td>
                    <td>{{data.height}}</td>
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
    name:"PeopleData",
    data() {
        return  {
            people: []
        }
    },

    mounted() {
        this.getPeople();
    },

    methods: {
        moment(date) {
            return moment(date);
        },
        getPeople() {
            axios({
                method:"GET",
                url:`${url}/people`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.people = res.data.results;
                console.log(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>