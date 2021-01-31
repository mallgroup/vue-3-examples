<template>
  <img alt="MALL Group IT" src="./assets/logo.png" width="100" class="m-auto mb-5" />
  <h1 class="text-center text-2xl text-black py-6 pt-0">Tu model, tu model</h1>
  <div class="grid grid-cols-2">
    <div class="p-8 m-5 bg-gray-50">
      <UserRegistration
        v-model:username="username"
        v-model:password="password"
      />
    </div>
    <div class="p-8 m-5 bg-gray-100">
      <UserRegistrationOutput
        :username="username"
        :password="password"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import UserRegistration from './components/UserRegistration.vue'
import UserRegistrationOutput from './components/UserRegistrationOutput.vue'

export default {
  name: 'App',
  components: {
    UserRegistration,
    UserRegistrationOutput
  },
  setup () {
    const username = ref('')
    const password = ref('')

    return {
      username,
      password
    }
  }
}
</script>
