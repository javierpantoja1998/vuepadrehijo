<template>
  <!-- <PadreDeporte/> -->
  <!-- <PadreNumero/> -->
  <!-- <PadreComics/> -->
  <MenuComponentes/>
  <router-view></router-view>
</template>

<script>
// import PadreDeporte from './components/PadreDeporte.vue'
// import PadreNumero from './components/PadreNumero.vue'
// import PadreComics from './components/PadreComics.vue';
import MenuComponentes from './components/MenuComponentes.vue';

export default {
  name: 'App',
  components: {
    // PadreDeporte, 
    // PadreNumero
    // PadreComics
    MenuComponentes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
