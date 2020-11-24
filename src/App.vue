<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">

          <header class="mb-3">
            <h2>LISTE DES TOTOS</h2>
            <button
              @click="reverseItems"
              class="btn btn-light"
            >
              RETOURNER la liste
            </button>
          </header>

          <totos-list :items="sortedItems"></totos-list>

          <add-toto-form @new-toto="addItem"></add-toto-form>

      </div>
    </div>
  </div>
</template>

<script>

import TotoList from './components/toto-list'
import AddTotoForm from './components/add-toto-form'

import Author from './models/Author'
import Toto from './models/Toto'

export default {
  name: 'App',
  components: {
    'totos-list': TotoList,
    'add-toto-form': AddTotoForm,
  },
  data() {
    return {
      isReversed: false,
      authors: [
        new Author(0, "Jean-Paul Sartre"),
        new Author(1, "Marquis de Sade"),
        new Author(2, "Jean-Pierre Foucault"),
        new Author(3, "Plein de mecs"),
      ],
      items: [
        new Toto(0, "Toto va à la CAF", this.authors[0], "20 Janvier 2002", "http://google.fr/"),
        new Toto(1, "A Toto va à la plage", this.authors[2], "20 Janvier 2002", "http://google.fr/"),
        new Toto(2, "Toto va à l'orphelinat", this.authors[3], "20 Janvier 2002", "http://google.fr/",),
        new Toto(3, "Z Toto va à Pôle Emploi", this.authors[4], "20 Janvier 2002", "http://google.fr/"),
        new Toto(4, "Toto va à Leclerc", this.authors[1], "20 Janvier 2002", "http://google.fr"),
      ],
      computed: {
        sortedItems() {
          if (!this.isReversed) {
            return this.items.sort((a, b) => a.name.localeCompare(b.name));
          } else {
            return this.items.sort((a, b) => b.name.localeCompare(a.name));
          }
        },
      },
      methods: {
        urlLink(url) {
          return `<a href="${url}">Lien</a>`;
        },
        reverseItems() {
          this.isReversed =! this.isReversed;
        },
        addItem(e) {
          // Get the max possible id in the array
          let maxId = Math.max(...this.items.map(toto => toto.id));

          let newItem = new Toto(
              maxId + 1,
              e.name,
              e.author,
              e.publicationDate,
              e.urlBiography
          );

          this.items.push(newItem);
        },
      },
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
    position: relative;
    color: white;
    background: black;
}

.content {
    padding: 50px;
    width: 50%;
}

ul {
    list-style-type: none;
    opacity: .75;
    padding-right: 25px;
}

li {
    margin-bottom: 25px;
}

li .toto-body,
li .toto-footer {
    margin-left: 20px;
}

form {
    padding-left: 25px;
    width: 50%;
    position: fixed;
    top: 50px;
    right: 50px;
}
</style>
