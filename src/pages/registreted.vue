<template>
  <section class="container">
    <card-list v-bind:cards="cards"></card-list>
  </section>
</template>

<script>
  import CardList from '../components/CardList.vue'
  import data from "~/static/dummy_data.json"

  export default {
    components: {
      CardList,
    },
    methods: {

    },
    data(){
      return {
        cards: data.degrees
      }
    }
  }
</script>
