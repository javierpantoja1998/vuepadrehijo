<template>
    <div>
        <h1>{{numeroAleatorio}}</h1>
        <!-- Este boton llama a la funcion sumarAleatorios cuando es clickado -->
        <button @click="sumarAleatorios">Sumar {{numeroAleatorio}}</button>
    </div>
</template>
<script>
export default {
    name:"HijoNumero",
    //Este es el prop que luego se asocia al padre
    props:["numeroAleatorio"],
    methods:{
        //LLamamos al metodo del padre sumarAleatorios()
        //Le pasamos el numero aleatorio(this.numeroAleatorio) y 
        //Se lo sumamos y añadimos al padre 
        sumarAleatorios(){
            this.$emit("sumarAleatorios",this.numeroAleatorio);
        }
    }
}
</script>