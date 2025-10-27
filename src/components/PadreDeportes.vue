<template>
    <h1 style="color: red">Padre Deportes</h1>
    <ul>
        <li v-for="deporte in deportes" :key="deporte">
            <HijoDeportes :nombreDeporte="deporte"/>
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
                deportes: ["Curling", "Peonza", "Canicas", "Bolos"]
            }
        }
    }
</script>