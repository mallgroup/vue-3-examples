import { ref, onMounted } from 'vue'
import countriesRepository from '../repository/countries'

export default () => {
  const countries = ref([])
  const loading = ref(false)

  loading.value = true

  const findAll = async () => {
    try {
      countries.value = await countriesRepository.findAll().then(response => response)
    } catch (error) {
      // dummy error
    } finally {
      loading.value = false
    }
  }

  onMounted(findAll)

  return {
    loading,
    countriesData: countries
  }
}
