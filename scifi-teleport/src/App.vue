<template>
  <img alt="MALL Group IT" src="./assets/logo.png" width="100" class="m-auto mb-5" />
  <h1 class="text-center text-2xl text-black py-6 pt-0">Scifi & Teleport</h1>

  <div class="grid grid-cols-2">
    <div class="p-8 m-5 bg-gray-50">
      <pre>
<code>&#x3C;mall-button btnLabel=&#x22;prvn&#xED; tla&#x10D;&#xED;tko&#x22; /&#x3E;
</code>
      </pre>

      <mall-button btnLabel="první tlačítko" />
    </div>
    <div class="p-8 m-5 bg-gray-50">
      <p>Tady mělo být druhé tlačítko, ale teleportovali jsme jej před konec elementu BODY.</p>
      <pre>
        <code>
&#x3C;mall-button btnLabel=&#x22;druh&#xE9; tla&#x10D;&#xED;tko&#x22; /&#x3E;</code>
      </pre>
      <teleport to="#teleport_here">
        <mall-button btnLabel="druhé tlačítko" />
      </teleport>
    </div>
  </div>

</template>

<script>
// import { ref } from 'vue'
import MallButton from './components/MallButton.vue'

export default {
  name: 'App',
  components: {
    MallButton
  }
}
</script>
