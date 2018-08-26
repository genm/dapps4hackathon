import Vuex from 'vuex'
import Neon from '@cityofzion/neon-js';

const createStore = () => {
  return new Vuex.Store({
    state: {
      wif: "",
      reload:true,
      address:"",
      published:[],
      mylist: [],
      list: []
    },
    mutations: {
      import_wallet(state, text) {
        state.wif = text
        const account = Neon.create.account(this.wif);
        state.address = account.address;

      },
      setList(state, list){
        state.list = list
      },
      pushList(state, list){
        state.list.push(list)
      },
      pushmyList(state, list){
        state.mylist.push(list)
      },
      setReload(state){
        state.reload = true;
      },
      stopReload(state){
        state.reload = false;
      }


    }
  })
}

export default createStore
