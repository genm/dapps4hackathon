import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      wif: "",
      address:"",
      degree:[{
        name: "",
        amount: "",
        publisher: "",
      }],
      published:[{
        name: "",
        amount: "",
      }],
    },
    mutations: {
      import_wallet(state, text) {
        state.wif = text

      }
    }
  })
}

export default createStore
