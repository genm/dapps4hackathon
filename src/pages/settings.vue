<template>
  <section class="container">
    <div class="list-group  has-text-left">
      <div class="list-group-item">
        <p class="is-size-2">Setting</p>
      </div>
      <div class="list-group-item">
        <p class="is-size-4">Your WIF Key</p>
      </div>
      <div class="list-group-item">
        <input v-model="wif" class="input" type="text" placeholder="">
      </div>
      <div class="list-group-item">
        <!--<a class="button is-primary is-medium" v-on:click=import_wif()>Save</a>-->
        <a class="button is-primary is-medium" v-on:click="$store.commit('import_wallet', wif)">Save</a>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    computed: {

//      import_wif(txt) { return this.$store.commit('import_wallet', txt)}
    }
  }
</script>
