<template>
  <section class="container">
    <div class="list-group">
      <div class="list-group-item">
        <h1>あなたの称号一覧</h1><hr>
      </div>
      <div class="list-group-item">
        <card-list v-bind:cards="cards"></card-list>
      </div>
    </div>
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
