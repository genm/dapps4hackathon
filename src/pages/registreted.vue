<template>
  <section class="container">
    <card></card>
  </section>
</template>

<script>
  import Card from '../components/Card.vue'
  export default {
    props: {
      title: String,
      sub: String,
      description: String,
      time: String
    },
    components: {
      Card
    }
  }
</script>
