<template>
    <h1 style="color: red">Padre Deportes</h1>
    <h3 style="color:green" v-if="deporteSeleccionado">Mi deporte favorito es: {{ deporteSeleccionado }}</h3>
    <ul>
        <li v-for="deporte in deportes" :key="deporte">
            <HijoDeportes :nombreDeporte="deporte" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
        </li>        
    </ul>
    
</template>
<script>
    import HijoDeportes from './HijoDeportes.vue'

    export default{
        name: "PadreDeportes",
        
        components: {
            HijoDeportes
        },
        data(){
            return{
                deportes: ["Curling", "Peonza", "Canicas", "Bolos"],
                deporteSeleccionado: null,
            }
        },
        methods: {
            seleccionarFavoritoParent(deporte){
                this.deporteSeleccionado = deporte
            }
        }
    }
</script>