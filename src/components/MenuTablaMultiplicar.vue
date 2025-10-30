<template>
    <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-for="num in numeros" :key="num">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" :to="'/tabla/'+num">Tabla del {{num}}</router-link>
                </li>                
            </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default{
        name: "MenuTablaMultiplicar",
        data(){
            return{
                numeros: [], 
            }
        },
        mounted(){
            this.numerosAleatorios()
        },
        methods: {
            numerosAleatorios() {
                for (let i = 0; i < 5; i++) {
                    this.numeros.push(parseInt(Math.random()*100+1))                    
                }
            }
        }
    }
</script>