<template>
    <div>
        <h1 style="color:ghostwhite; background-color:hotpink;">Padre Deportes</h1>
        <h1 style="color:purple; background-color: blanchedalmond;">{{favorito}}</h1>
        <ul>
            <li v-for="depor in deportes" :key="depor">
                <HijoDeporte :nombredeporte="depor" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent" />
            </li>
        </ul>
    </div>
</template>
<script>
import HijoDeporte from './HijoDeporte.vue';

export default {
    name:"PadreDeporte",
    components:{
        HijoDeporte
    },
    methods:{
        seleccionarFavoritoParent(nombre){
           console.log(nombre)
           this.favorito = nombre
        }
    },
    data(){
        return{
            deportes:["Futbol","Padel","Tenis","Basket","Surf" ],
            favorito:null
        }
    }
}
</script>