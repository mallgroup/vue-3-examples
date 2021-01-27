<template>
  <div class="flex items-center content-center justify-center h-screen">
    <div class="bg-blue-800 text-white rounded-lg border shadow-lg p-10 w-5/12">
      <div>
        <div class="m-auto">
          <MallGroup msg="Component - Countries" />
        </div>
        <div class="mt-8 m-auto">
          <MallGroupSearchCountries
            placeholderLocale="filtrovat země"
            loadingLocale="loading..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MallGroup from './components/MallGroup.vue'
import MallGroupSearchCountries from './components/MallGroupSearchCountries.vue'

export default {
  name: 'App',
  components: {
    MallGroup,
    MallGroupSearchCountries
  }
}
</script>
