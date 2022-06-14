<template>
    <div class="mt-6 pl-10 pr-10">
        <div>
            <p class="text-[#A4A7B7]">People <i v-if="isLoading" class="fa fa-spinner fa-spin"></i></p>
        </div>
        <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="p-4 w-full border mt-8 text-[13px] table-auto">
                <thead>
                    <tr class="text-[#A4A7B7] border border-b" style=" box-shadow:0px 0px 30px rgba(13, 47, 161, 0.07)">
                        <td class="px-6 py-3"><input class="mr-2" type="checkbox" name="check" id="check"></td>
                        <td>Name</td>
                        <td class="px-6 py-3">Birth&nbsp;Year</td>
                        <td class="px-6 py-3">Gender</td>
                        <td class="px-6 py-3">Hair&nbsp;Color</td>
                        <td class="px-6 py-3">Height</td>
                        <td class="px-6 py-3">Created</td>
                    </tr>
                </thead>
                <tr v-for="data in people" :key="data.id" class="border border-b p-2">
                    <td class="px-6 py-3"><router-link :to="{name: 'people-info', params: {name:data.name}}"><input class="mr-2" type="checkbox" name="check" id="check"></router-link></td>
                    <td>{{data.name}}</td>
                    <td  class="px-6 py-3" >{{data.birth_year}}</td>
                    <td class="px-6 py-3">{{data.gender}}</td>
                    <td class="px-6 py-3">{{data.hair_color}}</td>
                    <td class="px-6 py-3">{{data.height}}</td>
                    <td class="px-6 py-3">{{moment(data.created).format('DD/MM/YYYY')}}</td>
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
            people: [],
            isLoading: false
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
            this.isLoading = true
            axios({
                method:"GET",
                url:`${url}/people`,
                headers:{'Content-type': 'application/json'}
            })
            .then((res) => {
                this.people = res.data.results;
                this.isLoading = false
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>