<template>
  <section class="container">
    <div class="list-group">
      <div class="list-group-item">
        <h1>All Issued Degrees</h1><hr>
      </div>
      <div class="list-group-item">
        <card-list v-if="$store.state.wif" v-bind:pbcards="pbcards"></card-list>
      </div>
    </div>
  </section>
</template>

<script>
  import CardList from '../components/DCardList.vue'
  import data from "~/static/dummy_data.json"

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

      for (var item of data.dm_degree ){
        Promise.all([axios.post(neo_node,{
          "jsonrpc": "2.0",
          "method": "getstorage",
          "params": [
            '030cc92f31b8868868e093239e26b351df232e32',//Neon.u.reverseHex(myAddress),
            item.amount
          ],
          "id": 15
        }), axios.post(neo_node,{
          "jsonrpc": "2.0",
          "method": "getstorage",
          "params": [
            '030cc92f31b8868868e093239e26b351df232e32',//Neon.u.reverseHex(myAddress),
            item.degree_pb
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
        pbcards: this.$store.state.list
      }
    }
  }
</script>
