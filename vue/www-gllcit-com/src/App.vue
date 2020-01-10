<template>
  <div id="app">
    <!--
    <h1>Guilin Lian Chao IT</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    -->
    <PageHeader />
    <router-view />
    <PageFooter />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
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

body {
  background: #879294;
  color: #eef2f7;
  margin: 0px;
}
</style>

<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "app",

  components: { PageHeader, PageFooter }
};
</script>
