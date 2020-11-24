<template>
  <div class="toto-item">
    <div class="toto-header">
      <h2>{{ item.name }}</h2>
    </div>
    <div class="toto-body">
      <h3>Par {{ item.author }}</h3>
      <p>Publié le {{ item.publicationDate }}</p>
    </div>
    <div class="toto-footer">
      <a
        :href="item.urlBiography"
        class="btn btn-secondary"
      >
        Lien
      </a>
    </div>
  </div>
</template>

<script>
import Toto from '../models/Toto'

export default {
  name: 'toto-item',
  props: {
    item: Toto
  },
}
</script>

<style>

</style>
