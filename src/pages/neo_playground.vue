<template>
  <div class="container">
    Hello, This is Neo Playground

  </div>


</template>

<script>
import Neon from '@cityofzion/neon-js';

export default {


  // 作成時に呼ばれる。詳しくはライフサイクルを参照
  created() {
    //ここで色々試してみて
    console.log(Neon.CONST.NEO_NETWORK.MAIN);
    const MYNET = "MyNet"
    const privnet_protcol = require('../protocol.json');

    const privateNet = new rpc.Network(privnet_protcol, MYNET);

    const sb = Neon.create.scriptBuilder();

    sb.emitAppCall('5b7074e873973a6ed3708862f219a6fbf4d1c411', 'name');

    rpc.Query.invokeScript(sb.str).execute('http://127.0.0.1:30333')
      .then(res => {
        console.log(res);

      })
      .catch(res => {
        console.log(res);
      })

  },

}

</script>
