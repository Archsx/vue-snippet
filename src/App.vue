<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <p>nihao</p>
    <custom/>
    <global/>
    <hello/>
  </div>
</template>

<script>
import Custom from './components/Custom.vue'
export default {
  name: 'App',
  components:{
    Custom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
