import { createWebHistory, createRouter } from "vue-router";
import PadreDeportes from './components/PadreDeportes.vue'
import ComicsComponent from './components/ComicsComponent.vue'
import PadreSumar from './components/PadreSumar.vue'
import NumeroDoble from './components/NumeroDoble.vue'

const myRoutes = [
    {path:"/", component: PadreDeportes},
    {path:"/comics/:id?", component: ComicsComponent},
    {path:"/numeros", component: PadreSumar},
    {path:"/numerodoble/:num?", component: NumeroDoble},
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;