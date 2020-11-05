<template>
  <img alt="MALL Group IT" src="../assets/logo.png" width="100" class="m-auto mb-5" />
  <h1 class="text-center text-xl">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'MallGroup',
  props: {
    msg: String
  }
}
</script>
