<template>
  <h2 class="text-xl text-black py-6 pt-0">Registrační formulář</h2>
  <div>
    <label class="block text-white text-sm font-bold mb-2" for="username">
      Uživatelské jméno
    </label>
    <input
      @input="$emit('update:username', $event.target.value)"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
      id="username"
      type="text"
      placeholder="jméno"
    />
  </div>
  <div class="mb-6">
    <label class="block text-white text-sm font-bold mb-2" for="password">
      Heslo
    </label>
    <input
      @input="$emit('update:password', $event.target.value)"
      class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-500 mb-3"
      id="password"
      type="password"
      placeholder="******************"
    />
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" type="button">
      Sign In
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserRegistration',
  props: {
    username: '',
    password: ''
  }
}
</script>
