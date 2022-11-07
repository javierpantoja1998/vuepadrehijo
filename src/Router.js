import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PadreDeporte from "./components/PadreDeporte.vue";
import PadreComics from "./components/PadreComics.vue";
import NumeroDoble from './components/NumeroDoble.vue'


const routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        //Se usa la ? para decirle que es opcional
        path: "/doble/:numero?", component: NumeroDoble
    },
    {
        path: "/deportes", component: PadreDeporte
    },
    {
        path: "/comics", component: PadreComics
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;