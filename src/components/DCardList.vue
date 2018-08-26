

<template>
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-narrow" v-for="cd in cards" :key="cd.degree">
      <card v-bind:card="cd"></card>
    </div>

  </div>
</template>

<script>
  import Card from '../components/DCard.vue'

  export default {
    props: ['cards'],
    components: {
      Card

    }
  }
</script>

<style>

</style>
