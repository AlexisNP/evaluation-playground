<template>
  <ul
    v-if="items.length > 0"
    class="toto-list"
  >
    <li
      v-for="(toto, index) in items" :key="index"
    >
      <toto-item :item="toto"></toto-item>
    </li>
  </ul>
</template>

<script>
import TotoItem from './toto-item'

export default {
  name: 'totos-list',
  props: {
    items: Array
  },
  component: {
    'toto-item': TotoItem
  }
}
</script>

<style>

</style>
