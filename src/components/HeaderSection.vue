<template>

    <!-- Struttura sezione Header -->
    <header class="d-flex align-items-center justify-content-evenly">
        <ul class="d-flex">
            <li v-for="(item, index) in headerLinks" :key="index" class="d-flex align-items-center me-4 gap-1">
                {{ item.text }} <img src="../assets/img/arrow-list.svg" alt="dropdown-arrow" class="fl-dropdown">
            </li>
        </ul>
        <div class="d-flex justify-content-center align-items-center h-100 fl-header">
            <img src="../assets/img/dark-logo.png" alt="logo" class="h-50">
        </div>
        <div class="d-flex justify-content-end align-items-center fl-header">
            <img src="../assets/img/cart.svg" alt="logo">
            <i class="fa-regular fa-circle-user"></i>
            <div class="d-flex align-items-center rounded-2 fl-searchbox">
                <input type="text" placeholder="Search..." class="fl-searchbox">
                <i class="fa-solid fa-magnifying-glass fl-searchbutton"></i>
            </div>
        </div>
    </header>

</template>

<script>
export default {

    name: 'HeaderSection',

    data () {
        return {

            // Array per l'inserimento dinamico dei link nell'header
            headerLinks: [

                {
                    text: "Home"
                },
                {
                    text: "Pages"
                },
                {
                    text: "Courses"
                },
                {
                    text: "Features"
                },
                {
                    text: "Blog"
                },
                {
                    text: "Shop"
                }

            ]
        }
    }
}
</script>

<style lang="scss" scoped>

header {
    height: 8vh;
    width: 100vw;
    padding: 0 10vw;
    color: black;
    background-color: white;
    font-size: 15px;
    font-weight: 500;
    position: fixed;
    z-index: 999;

    .fl-dropdown {
        height: 10px;
        width: 10px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: calc(100% / 3);
    }

    .fl-header {
        width: calc(100% / 3);
    }

    .fl-searchbox {
        border: none;
        padding: 3px 15px;
        background-color: #f5f5f5;
    }

    .fl-searchbutton {
        border: none;
        background-color: #f5f5f5;
        padding: 15px 15px;
        color: #20ad96;
    }
}

</style>