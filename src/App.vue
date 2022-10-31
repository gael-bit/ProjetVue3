<template>
    <router-link to="/"><p>Accueil</p></router-link>
    <router-link to="/disney"><p>Disney</p></router-link>
    <div>
        <router-view></router-view>
    </div>
 
</template>

<script>
export default {
  name: "App",
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
