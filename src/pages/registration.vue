<template>
  <section class="container">
    <registration/>
  </section>
</template>

<script>

  import Registration from '~/components/Registration.vue'
  import Neon from '@cityofzion/neon-js';

  function registerDegree(attachGas, degree){
    const registerDegreeProps = {
      scriptHash: ContractHash,
      operation: 'registerDegree',
      args: [
        sc.ContractParam.byteArray(myAddress, 'address'),
        sc.ContractParam.string(degree)
      ]
    };
    const outputProps = [{
      assetId: CONST.ASSET_ID.GAS,
      value: new Neon.u.Fixed8(attachGas),
      scriptHash: ContractHash
    }];

    console.log(outputProps);

    const tx_config = {
      net: PrivateNeonDB,
      script: Neon.create.script(registerDegreeProps),
      address: myAddress,
      privateKey: myWifKey,
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

  export default {
    components: {
      Registration
    },


  }

</script>
