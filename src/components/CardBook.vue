<template>
  <article>
    <img src="../assets/cendrillon.jpg" />
    <h1>{{ books.title }}</h1>
    <p>prix : {{ books.price }}€</p>
  </article>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.getBooks();
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    getBooks() {
      axios.get("http://localhost:3000/books").then((response) => {
        (this.books = response.data[1]), console.log(response.data[1]);
      });
    },
  },
};
</script>

<style scoped>
article {
  margin-top: 3%;
  margin-left: 20%;
  width: 10%;
  border: solid #ebebed;
  text-align: center;
}

img {
  width: 100px;
  height: 150px;
}

p {
  color: #d05f66;
}
</style>
