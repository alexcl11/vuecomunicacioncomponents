<template>
    <h1 style="color: blue">Hijo Deportes</h1>
    <p>Me gusta el {{nombreDeporte}}</p>
</template>
<script>
    export default{
        name: "HijoDeportes",
        props: ["nombreDeporte"]
    }
</script>