<template>
  <div id="app">
    <Navigation :title="title"></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components: {
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
