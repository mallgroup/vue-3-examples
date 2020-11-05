import axios from 'axios'

export default {
  url: 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json',
  countries : [],

  async findAll () {
    if (this.countries.length) {
      return Promise.resolve(this.countries)
    }

    try {
      this.countries = await axios.get(this.url).then(res => res.data)
    } catch (error) {
      // dummy error
    }

    return Promise.resolve(this.countries)
  }
}
