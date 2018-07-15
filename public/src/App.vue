<template>
  <div id="app">
    <sidebar style="float:left"></sidebar>
    <router-view/>
  </div>
</template>

<script>
import sidebar from './components/utils/sidebar.vue'
export default {
  name: 'App',
  components: {
    sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* font-family: 'Montserrat', sans-serif */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}

body {
  height:100%;
}
</style>
