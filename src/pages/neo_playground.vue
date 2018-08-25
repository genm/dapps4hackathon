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

  },

}

</script>
