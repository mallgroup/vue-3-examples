import { computed } from 'vue'

export default (countries, search) => {
  const filteredCountries = computed(() => {
    if (!search.value.length) {
      return []
    }

    return countries.value.filter((country) => {
      return country.name.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase()) > -1
    })
  })

  return {
    countries: filteredCountries
  }
}
