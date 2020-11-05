<template>
  <p v-if="loading">
    {{ loadingLocale }}
  </p>
  <div v-else class="mb-5 text-center">
    <input type="text" v-model="search" :placeholder="placeholderLocale" class="p-2 text-black w-full" />
  </div>

  <ul v-if="countries" class="h-40 overflow-y-auto">
    <li v-for="country in countries">
      {{ country.emoji }} {{ country.name }}
    </li>
  </ul>
</template>

<script>
import { ref, toRefs } from 'vue'
import searchCountries from '../composables/searchCountries'
import filterCountries from '../composables/filterCountries'

export default {
  name: 'MallGroupSearchCountries',
  props: {
    placeholderLocale: {
      type: String,
      required: true
    },
    loadingLocale: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const { placeholderLocale, loadingLocale } = toRefs(props)

    const search = ref('')

    const { countriesData, loading } = searchCountries()

    const { countries } = filterCountries(countriesData, search)

    return {
      search,
      countries,
      loading
    }
  }
}
</script>
