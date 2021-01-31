<template>
  <img alt="MALL Group IT" src="./assets/logo.png" width="100" class="m-auto mb-5" />
  <h1 class="text-center text-2xl text-black py-6 pt-0">Tu model, tu model</h1>
  <!-- <div class="flex min-h-screen self-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8"> -->
  <div class="grid grid-cols-2">
    <!-- <div class="p-8 w-1/2 bg-gray-50"> -->
    <div class="p-8 m-5 bg-gray-50">
      <UserRegistration
        v-model:username="username"
        v-model:password="password"
      />
    </div>
    <div class="p-8 m-5 bg-gray-100">
      <UserRegistrationOutput
        v-model:username="username"
        v-model:password="password"
      />
    </div>
  </div>
</template>

<script>
import UserRegistration from './components/UserRegistration.vue'
import UserRegistrationOutput from './components/UserRegistrationOutput.vue'

export default {
  name: 'App',
  components: {
    UserRegistration,
    UserRegistrationOutput
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
