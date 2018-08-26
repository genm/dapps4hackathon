import Vuex from 'vuex'
import Neon from '@cityofzion/neon-js';

const createStore = () => {
  return new Vuex.Store({
    state: {
      wif: "",
      address:"",
      published:[],
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
      }

    }
  })
}

export default createStore
