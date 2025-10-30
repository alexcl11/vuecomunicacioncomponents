

<template>
    <h1>Ejemplo Checkbox</h1>
    <button @click="generarNumerosAleatorios">Generar CheckBox</button>
    <form  @change.prevent="sumarSeleccionados">
        <div v-for="numero in numeros" :key="numero">
            <input type="checkbox" :value="numero" v-model="numerosSeleccionados"/>
            <label>{{numero}}</label>
        </div>
    </form>
    <h3 v-if="suma">La suma es: {{suma}}</h3>
</template>

<script>
    export default{
        name: "SumaCheckbox",
        data(){
            return{
                numeros: [],
                numerosSeleccionados: [],
                suma: null
            }
        },
        methods:{
            generarNumerosAleatorios(){
                for (let i = 1; i <= 10; i++) {
                    this.numeros.push(parseInt(Math.random()*100))                    
                }
            },
            sumarSeleccionados(){
                this.suma = this.numerosSeleccionados.reduce((sum, num)=> sum + num, 0)
            }
        }
    }
</script>