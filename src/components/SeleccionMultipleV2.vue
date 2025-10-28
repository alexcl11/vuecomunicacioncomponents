<template>
    <h1>Seleccion Multiple manual</h1>
    <form @submit.prevent="verSeleccionados">
        <select v-model="select" multiple>
            <option v-for="option in options" :key="option" :value="option">{{option}}</option>
        </select>
    </form>

    <h2>Elementos seleccionados: {{select}}</h2>
</template>

<script>
    export default{
        name: "SeleccionMultipleV2",
        data(){
            return{
                options: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"],
                select: []
            }
        },
        methods: {
            verSeleccionados() {
                console.log('Elementos seleccionados:', this.select);
            }
        }
    }
</script>