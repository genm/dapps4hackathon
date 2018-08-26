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

//  const neo_node = 'http://131.113.137.59:30333';
  const neo_node = 'http://localhost:30333';

  export default {
    components: {
      CardList,
    },
    methods: {

    },
    data(){
      return {
        cards: this.$store.state.list
      }
    },
    mounted(){
      const account = Neon.create.account(this.$store.state.wif);
      const myAddress = account.address;

      for( var item in data.symbols) {

        var key = item+Neon.u.reverseHex(neonjs.wallet.getScriptHashFromAddress('AUHvAsU45Ee7gDpgJGyEfDyuWJPBb5dakf'))

        Promise.all([axios.post(neo_node,{
          "jsonrpc": "2.0",
          "method": "getstorage",
          "params": [
            '030cc92f31b8868868e093239e26b351df232e32',//Neon.u.reverseHex(myAddress),
            key
          ],
          "id": 15
        }),
          // degree
          axios.post(neo_node,{
          "jsonrpc": "2.0",
          "method": "getstorage",
          "params": [
            '030cc92f31b8868868e093239e26b351df232e32',//Neon.u.reverseHex(myAddress),
            item.degree
          ],
          "id": 15
        })]).then((res) => {
          this.$store.commit('pushList', {"amount":"", "degree":Neon.u.hexstring2str(res[1].data.result) });
          console.log(res.data)
        })

      }

    }
  }
</script>
