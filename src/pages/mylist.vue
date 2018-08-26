<template>
  <section class="container">
    <div class="list-group">
      <div class="list-group-item">
        <h1>Your degree list</h1><hr>
      </div>
      <div class="list-group-item">
        <card-list v-if="$store.state.wif" v-bind:cards="cards"></card-list>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import CardList from '../components/DCardList.vue'
  import data from "~/static/dummy_data.json"
  const neonjs = require('@cityofzion/neon-js');
  var Neon = neonjs.default;

  const neo_node = 'http://localhost:30333';

  export default {
    components: {
      CardList,
    },
    methods: {},
    data() {
      return {
        cards: this.$store.state.mylist
      }
    },
    mounted() {
      const account = Neon.create.account(this.$store.state.wif);
      const myAddress = account.address;
      this.$store.state.mylist =[];
      for (var item in data.symbols) {

        var key = item + Neon.u.reverseHex(neonjs.wallet.getScriptHashFromAddress('AUHvAsU45Ee7gDpgJGyEfDyuWJPBb5dakf'))

      }

      Promise.all([axios.post(neo_node, {
        "jsonrpc": "2.0",
        "method": "getstorage",
        "params": [
          '1737736d82de84b7ded7f83a3c0cc14b1c5fdab6',//Neon.u.reverseHex(myAddress),
          key
        ],
        "id": 15
      }),
        // degree
        axios.post(neo_node, {
          "jsonrpc": "2.0",
          "method": "getstorage",
          "params": [
            '1737736d82de84b7ded7f83a3c0cc14b1c5fdab6',//Neon.u.reverseHex(myAddress),
            item.degree
          ],
          "id": 15
        })]).then((res) => {
        this.$store.commit('pushmyList', {"amount": "", "degree": Neon.u.hexstring2str(res[1].data.result)});
        console.log(res.data)
      })

    }
  }
</script>
