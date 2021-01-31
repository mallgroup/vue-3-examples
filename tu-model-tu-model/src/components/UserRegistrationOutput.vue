<template>
  <h2 class="text-xl text-black py-6 pt-0">Data z formuláře</h2>
  <pre>{{ credentials }}</pre>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'UserRegistrationOutput',
  props: {
    username: '',
    password: ''
  },
  setup (props) {
    const credentials = computed(() => {
      return {
        username: props.username,
        password: props.password
      }
    })

    return {
      credentials
    }
  }
}
</script>
