<template>
    <div class="flex justify-evenly pl-10 mt-11 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:pl-0 ">
        <div v-for="data in categoryData" :key="data">
            <div class="p-6 shadow-lg rounded-lg lg:mt-4 lg:m-2">
                <div>
                    <div class="flex justify-between">
                        <h3 class="text-[16px] font-bold">{{data.title}}</h3>
                        <img :src="data.icon" alt="...">
                    </div>
                    <div class="mt-[23px]">
                        <p class="text-[16px] font-bold">{{data.count}}</p>
                        <p class="text-[9px] text-[#00992B]">{{data.description}}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import categoryData from "../../../componentData/categoryData"
export default {
    name:"CategoryOverview",
    data() {
        return  {
            categoryData
        }
    }
}
</script>