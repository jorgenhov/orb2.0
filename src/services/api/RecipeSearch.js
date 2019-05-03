import axios from 'axios'

export default function getRecipesFromSearch (searchTerm) {
    return axios.get(`/recipe/search/${searchTerm}`)
      .then(response => {
        return response.data
      })
}
