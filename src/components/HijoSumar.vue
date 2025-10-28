<template>
    <h1 style="color:blue">Número Hijo: {{ numero }}</h1>
    <button v-on:click="enviarNumero">Sumar número {{ numero }}</button>
</template>

<script>
    export default{
        name: "HijoSumar",
        props: ["numero"],
        methods:{
            enviarNumero(){
                this.$emit("sumarNumerosParent", this.numero)
            }
        }
    }
</script>
