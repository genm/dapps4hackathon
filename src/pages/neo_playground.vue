<template>
  <div class="container">
    <card-list v-if="$store.state.wif" v-bind:cards="cards"></card-list>
    <!--<card v-bind:card="{degree:'aaaa', owner:'who' ,amount:'33'}"></card>-->

  </div>

</template>

<script>
import axios from 'axios'
import CardList from '../components/DCardList.vue'
import data from "~/static/dummy_data.json"

import { mapActions } from 'vuex'
import Neon from '@cityofzion/neon-js';

const neo_node = 'http://131.113.137.59:30333';


export default {
  components: {
    CardList

  },


  // 作成時に呼ばれる。詳しくはライフサイクルを参照
  created() {
    //ここで色々試してみて


  },
  mounted() {
//    axios.post(neo_node,getamount).then((res) => {
//      this.$store.commit('setList', {"amount":res.data.result});
//      console.log(res.data);
//    }),

//    axios.post(neo_node,getdegree).then((res) => {
//      this.$store.commit('setList', {"degree":res.data.result});
//      console.log(res.data);
//      })
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
          item.degree_my
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
