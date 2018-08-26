<template>
  <div class="container">
    <card-list v-bind:card="[{degree:$store.state.list.degree, owner:$store.state.list.owner ,amount:'33'},{degree:$store.state.list.degree, owner:$store.state.list.owner ,amount:'33'}]"></card-list>
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
const getamount = {
  "jsonrpc": "2.0",
  "method": "getstorage",
  "params": [
    '030cc92f31b8868868e093239e26b351df232e32',
    '6d11841807b62e3666c73c0b8f1078ea0fd9e3a04e656f4861636b6174686f6e616d6f756e74'
  ],
  "id": 15
};
const getdegree = {
  "jsonrpc": "2.0",
  "method": "getstorage",
  "params": [
    '030cc92f31b8868868e093239e26b351df232e32',
    '6d11841807b62e3666c73c0b8f1078ea0fd9e3a04e656f4861636b6174686f6e6e616d65'
  ],
  "id": 15
};

export default {
  props: ['cards'],
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

    Promise.all([axios.post(neo_node,getamount),axios.post(neo_node,getdegree)]).then((res) => {
      this.$store.commit('setList', {"amount":res[0].data.result, "degree":Neon.u.hexstring2str(res[1].data.result) });
      console.log(res.data)
    })

  }

}

</script>
