import { createWebHistory, createRouter } from "vue-router";
import PadreDeportes from './components/PadreDeportes.vue'
import ComicsComponent from './components/ComicsComponent.vue'
import PadreSumar from './components/PadreSumar.vue'
import NumeroDoble from './components/NumeroDoble.vue'
import HomeComponent from './components/HomeComponent.vue'
import TablaMultiplicar from './components/TablaMultiplicar.vue'

const myRoutes = [
    {path:"/", component: HomeComponent},
    {path:"/deportes", component: PadreDeportes},
    {path:"/comics/:id?", component: ComicsComponent},
    {path:"/numeros", component: PadreSumar},
    {path:"/numerodoble/:num?", component: NumeroDoble},
    {path:"/tabla/:num?", component: TablaMultiplicar},
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;