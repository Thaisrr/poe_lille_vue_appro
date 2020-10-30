<template>
  <div id="app">
    <navigation :title="title"></navigation>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bienvenue dans votre première app Vue.JS !"/>
    <MyFirstComponent></MyFirstComponent>
    <Users></Users>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyFirstComponent from "@/components/MyFirstComponent";
import Navigation from "@/components/Navigation";
import Users from "@/components/Users";


export default {
  name: 'App',
  components: {
    Users,
    HelloWorld,
    MyFirstComponent,
    Navigation,
  },
  data: function () {
    return {
      title: 'My First App'
    }
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
}

.main-width {
  width: 75%;
  margin: auto;
}

@media screen and (min-width: 500px){
  .main-width {
    width: 90%
  }
}
</style>
