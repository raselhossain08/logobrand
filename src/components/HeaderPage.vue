<template>
    <header class="desktop-version">
        <div class="container mx-auto">
            <nav class="flex justify-between items-center py-4 px-6 bg-white w-full">
                <div class="logo-area flex items-center">
                    <a href="">
                        <img src="@/assets/logo.svg" alt="">
                    </a>
                    <img src="@/assets/flag.svg" alt="" class="mx-2">
                </div>
                <div class="navbar">
                    <ul class="flex">
                        <li class="nav-item">
                            <a href="" class="font-public">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="font-public">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="font-public">Docs</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="font-public">Eventos</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="font-public">Prensa</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="font-public">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div class="search-bar flex items-center justify-end">
                    <div v-if="searchBar">
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                            placeholder="dd" />
                    </div>
                    <button type="button" class="ml-2 text-yellow" @click="toggleSearchBar()">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </nav>
        </div>
    </header>
    <header class="mobile-version">
        <div class="container mx-auto">
            <nav class="flex justify-between items-center py-4 bg-white w-full">
                <div class="logo-area flex items-center">
                    <a href="">
                        <img src="@/assets/logo.svg" alt="">
                    </a>
                </div>
                <div class="bar w-2/4 flex items-center justify-end">
                    <button type="button" class="flex items-center menu-bar z-20 relative" @click=" toggleMenuBar()">
                        <font-awesome-icon :icon="['fas', 'angle-down']" class="mx-2" />
                        Menu
                    </button>
                </div>
                <div class="navbar  absolute left-0 right-0 w-full" v-if="menuBar">
                    <ul class="flex flex-col justify-center items-center pt-10">
                        <li class="nav-item pb-4">
                            <a href="" class="font-public text-white">Inicio</a>
                        </li>
                        <li class="nav-item pb-4">
                            <a href="" class="font-public text-white">Inicio</a>
                        </li>
                        <li class="nav-item pb-4">
                            <a href="" class="font-public text-white">Docs</a>
                        </li>
                        <li class="nav-item pb-4">
                            <a href="" class="font-public text-white">Eventos</a>
                        </li>
                        <li class="nav-item pb-4">
                            <a href="" class="font-public text-white">Prensa</a>
                        </li>
                        <li class="nav-item pb-4">
                            <a href="" class="font-public text-white">Contacto</a>
                        </li>
                    </ul>
                    <div class="search-bar flex items-center justify-center pt-5">
                        <div class=" relative">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                placeholder="dd" />
                                <button type="button" class=" text-black h-full flex items-center justify-end top-0 right-0 absolute px-4" >
                                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                               </button>    
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style>
header {
    height: 121px;
}

header ul li {
    padding: 0 20px;
}

header ul li a {
    font-family: "Public Sans", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.5px;
    text-align: center;
    color: #4F5DA3;
}

header input {
    background: #f2f2f2;
    padding: 10px 20px;
    color: #111;
    border-radius: 10px;
    margin-right: 7px;
}

.desktop-version {
    display: block;
}

.mobile-version {
    display: none;
}

@media only screen and (max-width: 768px) {
    .mobile-version {
        display: block;
    }

    .desktop-version {
        display: none;
    }
    .menu-bar{
        font-family:" Public Sans",sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 18.8px;
        text-align: center;
        color: #4F5DA3;
    }
    .navbar{
        position: absolute; 
        left: 0;
        right: 0;
        top: 100px;
        width: 100%;
        height: 100vh;
        z-index: 11111;
        background-color: #111;
    }
    .navbar a{
        color: #fff !important;
        text-decoration: none;
    }

}
</style>

<script>
export default {
    data() {
        return {
            searchBar: false,
            menuBar:false
        }
    },
    methods: {
        toggleSearchBar() {
            this.searchBar = !this.searchBar;
        } ,    
         toggleMenuBar() {
            this.menuBar = !this.menuBar;
        }
    }
}
</script>