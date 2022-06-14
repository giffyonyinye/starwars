<template>
    <div>
        <div class="flex justify-between pr-6 shadow-md pb-4">
                <div @click="goBack" class="flex items-center ml-6 cursor-pointer">
                    {{text}}
                </div>
            <div class="flex pt-6 pb-4">
                <div class="pr-10">
                    <img class="mt-1" src="../../../assets/svg/Shape.svg" alt="bell">
                </div>
                <div class="flex mr-14">
                    <img class="mr-6 border-l pl-8" src="../../../assets/svg/account.svg" alt="account">
                    <p>John Doe</p>
                </div>
                <div class="mt-4">
                    <img src="../../../assets/svg/ellipsis.png" alt="ellipsis">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"TheHeader",
    props:['text'],

    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>