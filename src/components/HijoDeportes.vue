<template>
    <h1 style="color: blue">Hijo Deportes</h1>
    <p>Me gusta el {{nombreDeporte}}</p>
    <button @click="seleccionarFavorito">Seleccionar como favotito</button>
</template>
<script>
    export default{
        name: "HijoDeportes",
        props: ["nombreDeporte"],
        methods:{
            seleccionarFavorito(){
                // PARA ENVIAR INFORMACION SE REALIZA A PARTIR DE LA LLAMADA
                // CON CADA PARANETRO SEPARADO CON COMAS, DENTRO DEL METODO EMIT
                this.$emit("seleccionarFavoritoParent", this.nombreDeporte)
            }
        }
    }
</script>