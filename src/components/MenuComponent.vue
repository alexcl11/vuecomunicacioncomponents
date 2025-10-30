<template>
    <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/deportes">Deportes</router-link>
                </li>

                <li class="nav-item">
                <router-link class="nav-link" to="/comics">Comics</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/numeros">Números</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/numerodoble">Número Doble</router-link>
                </li>                
                <li class="nav-item" v-for="numero in numeros" :key="numero"> 
                <router-link class="nav-link" :to="`/numerodoble/${numero}`">Doble {{numero}}</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default{
        name: "MenuComponent",
        data(){
            return{
                numeros: [2,5,44]
            }
        }
    }
</script>