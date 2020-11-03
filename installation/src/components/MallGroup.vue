<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">počítadlo je: {{ count }}</button>
  <p>Abyste otestovali hot module replacement, upravte soubor <code>components/HelloWorld.vue</code></p>
</template>

<script>
export default {
  name: 'MallGroup',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
