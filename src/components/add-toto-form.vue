<template>
  <form @submit.prevent="addTotoEvent">
    <h2>Ajout d'un toto</h2>
    <div class="input-group-sm mb-3">
      <label>Titre</label>
      <input
        v-model="inputToto.name"
        type="text"
        class="form-control"
      >
    </div>
    <div class="input-group-sm mb-3">
      <label>Auteur</label>
      <input
        v-model="inputToto.author"
        type="text"
        class="form-control"
      >
    </div>
    <div class="input-group-sm mb-3">
      <label>Publié le</label>
      <input
        v-model="inputToto.publicationDate"
        type="text"
        class="form-control"
      >
    </div>
    <div class="input-group-sm mb-3">
      <label>Lien vers la biographie</label>
      <input
        v-model="inputToto.urlBiography"
        type="text"
        class="form-control"
      >
    </div>
    <button
      type="submit"
      class="btn btn-light"
    >
      Ajouter
    </button>
</form>
</template>

<script>

export default {
  name: 'add-toto-form',
  data() {
    return {
      inputToto: {
        name: '',
        author: '',
        publicationDate: '',
        urlBiography: '',
      }
    }
  },
  methods: {
    addTotoEvent() {
      this.$emit('new-toto', this.inputToto);
    }
  }
}

</script>

<style>

</style>
