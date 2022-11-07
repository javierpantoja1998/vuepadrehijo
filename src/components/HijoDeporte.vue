<template>
    <div>
        <h1 style="color:skyblue">{{nombredeporte}}</h1>
        <button @click="seleccionarFavorito">
            Seleccionar favorito
        </button>
    </div>
</template>
<script>
export default {
    name:"HijoDeporte",
    props:["nombredeporte"],
    methods:{
        seleccionarFavorito(){
            //LLamamos al metodo padre que nos han enviado por props
            this.$emit("seleccionarFavoritoParent","Su favorito es:" + this.nombredeporte);
        }
    },
    mounted(){
        console.log(this.nombredeporte)
    }
    
}
</script>