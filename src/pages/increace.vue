<template>
  <div class="reg">
    <div>
      <p>wif</p>
      <input id="wif" class="input" type="text" placeholder="your key">
    </div>
    <div>
      <p>Degree</p>
      <input id="dgr" class="input" type="text" placeholder="e.g. Neo Blockchain Challenge">
    </div>
    <div>
      <p>GAS</p>
      <input id="gas" class="input" type="text" placeholder="1 GAS = 10 Degrees">
    </div>
    <a v-on:click="rgs" class="button is-primary">Publish</a>
  </div>
</template>

<script>
  var neonjs = require('@cityofzion/neon-js');
  var Neon = neonjs.default;

  const ContractHash = '1737736d82de84b7ded7f83a3c0cc14b1c5fdab6';


  export default {

    methods: {
      rgs: (event) => {
        const PrivateNeonDB = 'http://localhost:5000';

        const account = Neon.create.account(document.getElementById('wif').value);
        function registerDegree(attachGas, degree){
          const myAddress = account.address;

          var CONST = neonjs.CONST;
          var sc = neonjs.sc;
          const registerDegreeProps = {
            scriptHash: ContractHash,
            operation: 'increaseDegreeAmount',
            args: [
              sc.ContractParam.byteArray(myAddress, 'address'),
              sc.ContractParam.string(degree)
            ]
          };
          const outputProps = [{
            assetId: CONST.ASSET_ID.GAS,
            value: new neonjs.u.Fixed8(attachGas),
            scriptHash: ContractHash
          }];

          console.log(outputProps);

          const tx_config = {
            net: PrivateNeonDB,
            script: Neon.create.script(registerDegreeProps),
            address: myAddress,
            privateKey: document.getElementById('wif').value,
            intents: outputProps,
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
        registerDegree(document.getElementById("gas").value,document.getElementById("dgr").value)
      }
    }
  }

</script>
