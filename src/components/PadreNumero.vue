<template>
    <div>
        <h1>Padre Numero={{suma}}</h1>
        <button @click="calcularArrayRandom">
            Generar numero aleatorio
        </button>
        <ul>
            <!-- Hacemos un bucle que recorra el array de numeros y definimos num -->
            <li v-for="num in numeros" :key="num">
                <!-- Metemos al componente hijo -->
            <!-- num son los numeros aleatorios generados   -->
            <!-- :numeroAleatorio es el PROP -->
            <!-- Y lo enlazamos con num -->
                <HijoNumero :numeroAleatorio="num"
                v-on:sumarAleatorios="sumarAleatorios" />
            </li>
        </ul>
    </div>
</template>
<script>
//Importamos el componente Hijo HijoNumeros
import HijoNumero from './HijoNumero.vue';
export default {
    name:"PadreNumero",
    components:{
        HijoNumero
    },
    data(){
        // Mas o menos esto es como el state de react
        // definimos el array para los numeros aleatorios
        // Tambien el numero aleatorio
        // Y la suma
        return{
            numeros:[],
            numero:0,
            suma:0
        }
    },
    methods:{
        //Esta es la funcion que suma los numeros aleatorios
        sumarAleatorios(num){
            console.log(num)
            this.suma += num
        },
        //Esta funcion calcula numeros aleatorios
        calcularArrayRandom(){
            this.numero = (Math.floor(Math.random() * 100));
            this.numeros.push(this.numero);
            console.log(this.numero);
        }
    },
    
}
</script>