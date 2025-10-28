<template>
  <SumaCheckbox/>
  <hr>
  <SeleccionMultiple/>
  <hr>
  <SeleccionMultipleV2/>
  <hr>
  <PadreDeportes/> 
  <hr>
  
</template>

<script>
import PadreDeportes from './components/PadreDeportes.vue'
import SeleccionMultiple from './components/SeleccionMultiple.vue'
import SeleccionMultipleV2 from './components/SeleccionMultipleV2.vue'
import SumaCheckbox from './components/SumaCheckbox.vue'


export default {
  name: 'App',
  components: {
    SumaCheckbox,
    SeleccionMultiple,
    SeleccionMultipleV2,
    PadreDeportes 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
