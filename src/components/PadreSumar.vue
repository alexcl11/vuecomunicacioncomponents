<template>
    <h1>Dieguito....🙌</h1>
    <h4 style="color:red" v-if="suma">La suma es: {{ suma }}</h4>
    <button v-on:click="nuevoNumero">Nuevo número</button>
    <ul v-for="n in numerosHijos" :key="n">
        <HijoSumar :numero="n" v-on:sumarNumerosParent="sumarNumeros"/>
    </ul>
</template>

<script>
import HijoSumar from './HijoSumar.vue';

    export default {
        name: "PadreSumar",
        components: {
            HijoSumar
        },
        data(){
            return{
                suma: null,
                numerosHijos: []
            }
        },
        methods: {
            sumarNumeros(numero){
                this.suma += numero
            },
            nuevoNumero(){
                this.numerosHijos.push(parseInt(Math.random()*100))
            }
        }
    }
</script>