<template>
    <h1>Tabla del numero: {{numero}}</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Operación</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody v-for="conjunto in tabla" :key="conjunto">
            <tr>
                <td>{{conjunto.operacion}}</td>
                <td>{{conjunto.resultado}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default{
        name: "TablaMultiplicar",
        data(){
            return {
                numero: 0,
                tabla:[]
            }
        },
        watch:{
            "$route.params.num"(oldVal, newVal){
                if(oldVal!=newVal){
                    this.numero = this.$route.params.num
                    this.rellenarTabla()
                }
            }
        }, mounted(){
            this.numero = this.$route.params.num
            this.rellenarTabla()
        }, 
        methods: {
            rellenarTabla(){
                this.tabla = []
                let conjunto = {
                    operacion: "",
                    resultado: ""
                }
                for (let i = 1; i <= 10 ; i++) {
                    conjunto = {}
                    conjunto.operacion =`${this.numero} * ${i}`
                    conjunto.resultado = this.numero*i
                    this.tabla.push(conjunto)
                }
            }
        }
    }
</script>