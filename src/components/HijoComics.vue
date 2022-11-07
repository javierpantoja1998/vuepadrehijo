<template>
  <div>
    <h1 style="color:blanchedalmond; background-color:darkcyan">{{ comic.titulo }}</h1>
    <h4>{{ comic.descripcion }}</h4>
    <h4
      :class="{
        rojo: comic.year <= 2000,
        verde: comic.year > 2000,
      }"
    >
      {{ comic.year }}
    </h4>
    <img :src="comic.imagen" :tittle="comic.titulo" />
  </div>
  <button @click="seleccionarFavorito()">
    Seleccionar favorito
  </button>
  <button @click="eliminarComic()">
    Eliminar comic
  </button>
</template>
<script>
export default {
  name: "PadreComics",
  props: ["comic", "index"],
  methods:{
    seleccionarFavorito(){
        //Metodo para llamar al padre y enviar el comic
        this.$emit("seleccionarFavorito",this.comic)
    },
    eliminarComic(){
        this.$emit("eliminarComic",this.index)
    }
  }
};
</script>
<style scoped>
@import "./../assets/css/estilocomic.css";
</style>
