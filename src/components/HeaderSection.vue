<template>

    <!-- Struttura sezione Header -->
    <header class="d-flex align-items-center justify-content-evenly">
        <ul class="d-flex">
            <li v-for="(item, index) in headerLinks" :key="index" class="d-flex align-items-center me-4 gap-1">
                {{ item.text }} <img src="../assets/img/arrow-list.svg" alt="dropdown-arrow" class="fl-dropdown">
            </li>
        </ul>
        <div class="d-flex justify-content-center align-items-center h-100 fl-header">
            <img src="../assets/img/dark-logo.png" alt="logo" class="h-50 fl-logo">
        </div>
        <div class="d-flex justify-content-end align-items-center fl-header">
            <div class="fl-headericon d-flex align-items-center gap-3">
                <div class="fl-carticonbadge d-flex justify-content-center align-items-center">0</div>
                <img src="../assets/img/cart.svg" alt="logo" class="h-100">
                <i class="fa-regular fa-circle-user h-100"></i>
            </div>
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

@import "../style/common.scss"; 

header {
    height: 8vh;
    width: 100vw;
    padding: 0 10vw;
    color: $genericText;
    background-color: $blank;
    font-size: 15px;
    font-weight: 500;
    position: fixed;
    z-index: 999;

    .fl-logo:hover {
        cursor: pointer;
    }

    .fl-headericon {
        height: 20px;
        padding: 0px 15px;
        position: relative;

        img:hover, .fa-circle-user:hover {
            cursor: pointer;
        }

    }

    .fl-carticonbadge {
        position: absolute;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: $primary;
        color: $blank;
        font-size: 10px;
        bottom: 10px;
        right: 42px;
    }

    .fl-dropdown {
        height: 10px;
        width: 10px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: calc(100% / 3);
        
        li:hover {
            cursor: pointer;
        }
    }

    .fl-header {
        width: calc(100% / 3);
    }

    .fl-searchbox {
        border: none;
        padding: 3px 15px;
        background-color: $lightBackground;

        &:focus {
            outline-width: 0;
        }
    }

    .fl-searchbutton {
        border: none;
        background-color: $lightBackground;
        padding: 15px 15px;
        color: $primary;

        &:hover {
            cursor: pointer;
        }
    }
}

</style>