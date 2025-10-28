<template>
    <h1>{{comic.titulo}}</h1>
    <button @click="enviarComicFavorito">Seleccionar Favorito</button>
    <button @click="eliminarComic">Eliminar cómic</button>
    <p>{{comic.descripcion}}</p>
    <img :src="comic.imagen"/>
    <h4 :class="{
        rojo: comic.year < 2000,
        verde: comic.year > 2000,
        azul: comic.year == 2000
    }"
    >
    Year: {{comic.year}}</h4>

</template>

<script>
    export default{
        name: "ComicComponent",
        props: ["comic", "indiceComic"],
        methods: {
            enviarComicFavorito() {
                this.$emit("seleccionarFavorito", this.comic)
            },
            eliminarComic(){
                this.$emit("eliminarComic", this.indiceComic)
            }
        }
    }
</script>

<style scoped>
    @import './../assets/css/comic.css';
</style>