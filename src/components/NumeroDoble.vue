<template>
  <div>
    <h1>Numero Doble con parámetros</h1>
    <h1 style="color:darkorchid" v-if="mensaje">
      {{mensaje}}
    </h1>
    <div v-else>
        <h2 style="color:deepskyblue">
          El numero recibido es: {{numero}}
        </h2>
        <h2 style="color:deepskyblue">
          El doble es: {{doble}}
        </h2>
        <button @click="redirectHome()">Ir a Home</button>
    </div>
  </div>
</template>

<script>
export default {

  name:"NumeroDoble",
  methods: {
    redirectHome (){
      this.$router.push("/")
    },
    mostrarDoble(){
      this.numero = this.$route.params.numero;
      this.doble = parseInt(this.numero)  * 2;
    }
  },
  watch: {
    //El control de la variable se realiza mediante string
    // Y no se usa la palabra this
    '$route.params.numero'(nextVal, oldVal){
      //Si ha cambiado realizamos la accion
      if(nextVal !== oldVal){
        //Acciones
        this.mostrarDoble();
      }
    }
    //Recibimos el nuevo valor del param routing
    //Y tambien el antiguo valor del param routing
  },
  mounted(){
    //Vamos a capturar los parametros en este metodo
    if(this.$route.params.numero == ""){
      this.mensaje = "NO tenemos parametros"
    }else{
      this.mostrarDoble();
    }
  }, 
  data(){
  return{
    mensaje:null,
    numero:0,
    doble:0
  }
}

}

</script>

<style>

</style>