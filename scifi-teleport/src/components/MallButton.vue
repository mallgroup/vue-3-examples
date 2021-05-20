<template>
  <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" type="button"
    @click="alertMe"
  >
    {{ btnLabel }}
  </button>
</template>

<script>
export default {
  name: 'MallButton',
  props: {
    btnLabel: ''
  },
  methods: {
    alertMe () {
      alert(this.btnLabel)
    }
  }
}
</script>
