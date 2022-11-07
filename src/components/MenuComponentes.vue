<template>
  <nav>
    <ul id="menu">
      <li>
        <router-link to="/">HOME</router-link> |
      </li>
      <li>
        <router-link to="/doble/23">DOBLE 23</router-link> |
      </li>
      <li>
        <router-link to="/doble/43">DOBLE 43</router-link> |
      </li>
      <li>
        <router-link to="/doble/10">DOBLE 10</router-link> |
      </li>
      <li>
        <router-link to="/doble">NUMERO DOBLE SIN NUMERO</router-link> |
      </li>
      <li>
        <router-link to="/deportes" component:>DEPORTES</router-link> |
      </li>
      <li>
        <router-link to="/comics">COMICS</router-link>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
    name: "MenuComponentes",
    
};
</script>



<style scoped>
  
  ul{
    list-style-type: none;

    margin: 0;

    padding: 0;

    overflow: hidden;

    background-color:black;
  }
  li {
    float: left;
  }
  li a {
    display: block;

    color:#04aa6d;

    text-align: center;

    padding: 14px 16px;

    text-decoration: none;
  }
  li a:hover:not(.active) {
    background-color:darkmagenta;
  }



  .active {
    background-color: #04aa6d;
  }
</style>
