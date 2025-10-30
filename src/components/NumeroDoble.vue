<template>
    <h1>Numero Doble</h1>
    <h3>{{mensaje}}</h3>
    <h3 v-if="numeroDoblado">El número doblado es: {{numeroDoblado}}</h3>
    <button v-on:click="redirectHome" class="btn btn-primary">Volver al Home</button>
</template>
<script>
    export default{
        name: "NumeroDoble",
        data(){
            return {
                mensaje: "",
                numeroDoblado : null
            }
        },
        watch:{
            '$route.params.num'(nextVal, oldVal){
                if(oldVal!= nextVal){                    
                    let numero = this.$route.params.num
                    if(numero == ""){
                        this.mensaje = "Sin parametros en Routing"
                        this.numeroDoblado = null
                    } else {
                        this.mensaje = "Parámetro recibido: "+numero
                        this.doblarNumero()
                    }
                    console.log("Cambió de "+oldVal+" a "+nextVal)
                }
            }
        },
        mounted(){
            console.log("Params: "+this.$route.params.num)
            //LOS PARAMETROS SIEMPRE SON STRING, NO IMPORTA SI SON NUMÉRICOS
            let numero = this.$route.params.num
            if(numero == ""){
                this.mensaje = "Sin parametros en Routing"
            } else {
                this.mensaje = "Parámetro recibido: "+numero
                this.doblarNumero()
            }
        },
        methods: {
            doblarNumero() {
                let numeroParam =  this.$route.params.num;
                this.numeroDoblado = numeroParam*2
            },
            redirectHome(){
                this.$router.push("/")
            }
        }
    }
</script>