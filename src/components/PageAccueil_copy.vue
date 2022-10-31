<template>
  <header>
    <nav><p id="hello">Hello !</p></nav>
    <h1><span>Book</span>.Store</h1>
    <nav class="nav2">
      <div><p>Roman</p></div>

      <router-link to="/pageAccueil_copy"><p>Disney</p></router-link>

      <div><p>Comics</p></div>
      <div><p>Mangas</p></div>
      <div id="panier"><p>Panier</p></div>
    </nav>
  </header>
  <CardBook />
</template>

<script>
import CardBook from "@/components/CardBook.vue";
export default {
  name: "PageAccueil",
  props: {},
  components: {
    CardBook,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #3e3d40;
  color: white;
}
.nav2 {
  padding-left: 18.7%;
  display: flex;
}
h1 {
  margin-left: 20%;
}
header {
  background-color: #ebebed;
}
span {
  color: ##b3cdeb;
  font-size: 3em;
}

div {
  /* padding-right: 2%;*/
  padding-left: 2%;
}

#hello {
  color: #3e3d40;
  padding-top: 1%;
}

#panier {
  padding-left: 48%;
}
</style>
