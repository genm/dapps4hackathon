<template>
  <section class="container">
    <div class="list-group ">
      <div class="list-group-item">
        <p class="is-size-2">Give a degree</p>
      </div>
      <div class="list-group-item has-text-left">
        <p class="is-size-4">wif</p>
      </div>
      <div class="list-group-item">
        <input id="wif" class="input" type="text" placeholder="your key">
      </div>
      <div class="list-group-item has-text-left">
        <p class="is-size-4">Degree</p>
      </div>
      <div class="list-group-item">
        <input id="degree"  class="input" type="text" placeholder="e.g. NeoHackathonw2018">
      </div>
      <div class="list-group-item has-text-left">
        <p class="is-size-4">Address</p>
      </div>
      <div  class="list-group-item">
        <input id="address" class="input" type="text" placeholder="send to">
      </div>
      <div class="list-group-item">
        <a v-on:click="submit" class="button is-primary is-medium">Submit</a>
      </div>

    </div>

  </section>
</template>

<script>
  var neonjs = require('@cityofzion/neon-js')
  var Neon = neonjs.default;
  const ContractHash = '030cc92f31b8868868e093239e26b351df232e32';

  export default {
    components: {

    },
    methods: {
      submit: () => {
        const PrivateNeonDB = 'http://131.113.137.59:5000';
        const account = Neon.create.account(document.getElementById('wif').value);
        const myAddress = account.address;

        var sc = neonjs.sc;
        function giveDegree(recieverAddress,degree) {
          console.log(recieverAddress);
          console.log(degree);
          const giveDegreeProps = {
            scriptHash: ContractHash,
            operation: 'giveDegree',
            args: [
              sc.ContractParam.byteArray(myAddress, 'address'), // owner address
              sc.ContractParam.byteArray(recieverAddress, 'address'), // reciever address
              sc.ContractParam.string(degree)  // name
            ]
          };
          const tx_config = {
            net: PrivateNeonDB,
            script: Neon.create.script(giveDegreeProps),
            address: myAddress,
            privateKey: document.getElementById('wif').value,
            gas: 0,
          };
          console.log('About to send RPC request.');
          Neon.doInvoke(tx_config)
            .then(res => {
              console.log('RPC request sent.');
              console.log('Request successful: ' + res.response.result);
              console.log('Transaction Id: ' + res.response.txid);
              console.log('Transaction will be invoked in the next block.')
            })
            .catch(err => {
              console.log("hello there");
              console.log('error',err);
            });
        }
        giveDegree(document.getElementById('address').value, document.getElementById('degree').value)
      }
    },
    data(){
      return {

      }
    }
  }
</script>
