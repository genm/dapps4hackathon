<template>
  <section class="container">
    <div class="list-group">
      <div class="list-group-item">
        <h1>All Issued Degrees</h1><hr>
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
  import Neon from '@cityofzion/neon-js';
  const neo_node = 'http://localhost:30333';

  export default {
    components: {
      CardList,
    },
    methods: {

    },
    mounted(){
      const account = Neon.create.account(this.$store.state.wif);
      const myAddress = account.address;
      this.$store.state.list =[];

      for (var item of data.all_degree ){
        Promise.all([axios.post(neo_node,{
          "jsonrpc": "2.0",
          "method": "getstorage",
          "params": [
            '1737736d82de84b7ded7f83a3c0cc14b1c5fdab6',//Neon.u.reverseHex(myAddress),
            item.amount
          ],
          "id": 15
        }), axios.post(neo_node,{
          "jsonrpc": "2.0",
          "method": "getstorage",
          "params": [
            '1737736d82de84b7ded7f83a3c0cc14b1c5fdab6',//Neon.u.reverseHex(myAddress),
            item.degree
          ],
          "id": 15
        })]).then((res) => {
          this.$store.commit('pushList', {"amount":res[0].data.result, "degree":Neon.u.hexstring2str(res[1].data.result) });
          console.log(res.data)
        })

      }

    },
    data(){
      return {
        cards: this.$store.state.list
      }
    }
  }
</script>
