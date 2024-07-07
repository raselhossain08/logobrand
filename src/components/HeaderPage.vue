<template>
    <header>
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
                         <input
                            type="text"
                            class="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder="dd"
                        />
                    </div>
                    <button type="button" class="ml-2 text-yellow" @click="toggleSearchBar()">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </nav>
        </div>
    </header>
</template>

<style>
    header{
        height: 121px;
    }    
    header ul li{
        padding: 0 20px;
    }
    header ul li a{
        font-family: "Public Sans",sans-serif;
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

</style>

<script>
    export default {
        data(){
            return{
                searchBar:false
            }
        },
        methods: {
            toggleSearchBar(){
                this.searchBar =!this.searchBar;
            }
        }
    }
</script>