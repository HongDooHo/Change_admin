<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- <router-link to="/"></router-link> -->
      <Admin />
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import 'primeflex/primeflex.css';
// import Dropdown from 'primevue/dropdown';
import Admin from '@/components/Admin.vue';

export default {
  components: {
    Admin
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
