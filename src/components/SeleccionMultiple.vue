<template>
    <h1>Seleccion multiple Librería</h1>
    <v-select multiple v-model="selected" :options="options" />
    <h2>Elementos Seleccionados: {{selected}}</h2>
</template>

<script>
    import vSelect from 'vue-select'
    // importar estilos del componente (webpack procesará esto)
    import 'vue-select/dist/vue-select.css'

    export default{
        name: "SeleccionMultiple",
        components: {
            // registro local compatible con Vue 3
            'v-select': vSelect
        },
        data(){
            return{
                // v-model necesita una propiedad para enlazarse
                selected: null,
                options:["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"]
            }
        }
    }
</script>
