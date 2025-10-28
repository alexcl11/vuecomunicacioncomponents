<template>
    <h1>Padre Comics</h1>
    <h3 v-if="comicFavorito">Mi comic favorito es: {{comicFavorito.titulo}}</h3>
    <hr>
    <form v-on:submit.prevent="crearComic">
        <label>Titulo: </label>
        <input type="text" v-model="comicNuevo.titulo"/>
        <label>Imagen: </label>
        <input type="text" v-model="comicNuevo.imagen"/>
        <label>Descripcion: </label>
        <input type="text" v-model="comicNuevo.descripcion"/>
        <label>Año: </label>
        <input type="number" v-model="comicNuevo.year"/>
        <button>Nuevo Comic</button>
    </form>
    <hr>
    <div id="comics" v-for="comic, index in comics" :key="comic">
        <ComicComponent :comic="comic" :indiceComic="index" v-on:seleccionarFavorito="seleccionarFavorito" v-on:eliminarComic="eliminarComic"/>
    </div>
</template>

<script>
import ComicComponent from './ComicComponent.vue'
    
    export default{
        name: "ComicsComponent",
        components: {
            ComicComponent
        }, 
        methods:{
            seleccionarFavorito(comic){
                this.comicFavorito = comic
            },
            crearComic(){
                this.comics.push(this.comicNuevo)
            },
            eliminarComic(indice){
                this.comics.splice(indice, 1)
            }
        },
        data(){
            return{
                comicFavorito: null,
                comicNuevo: {
                    titulo: "",
                    imagen: "",
                    descripcion: "",
                    year: 0
                },
                comics:[
                    {
                        titulo: "Spiderman",
                        imagen:
                            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                        descripcion: "Hombre araña"
                        , year: 1997
                    },
                    {
                        titulo: "Wolverine",
                        imagen:
                            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                        descripcion: "Lobezno"
                        , year: 2003
                    },
                    {
                        titulo: "Guardianes de la Galaxia",
                        imagen:
                            "https://th.bing.com/th/id/OIP.Do8JzHDHufnDCrGCZQ8TKAAAAA?w=199&h=304&c=7&r=0&o=7&pid=1.7&rm=3",
                        descripcion: "Yo soy Groot"
                        , year: 2006
                    },
                    {
                        titulo: "Avengers",
                        imagen:
                            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                        descripcion: "Los Vengadores"
                        , year: 1993
                    },
                    {
                        titulo: "Spawn",
                        imagen:
                            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                        descripcion: "Al Simmons"
                        , year: 2000
                    },
                    {
                        titulo: "Batman",
                        imagen:
                            "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                        descripcion: "Murcielago"
                        , year: 2001
                    }
                ]
            }
        }
    }
</script>