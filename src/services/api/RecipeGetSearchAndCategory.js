import axios from 'axios'

export default function getRecipesFromSearchAndCategory (searchTerm, category) {
    return axios.get(`/recipe/search/${searchTerm}/category/${category}`)
      .then(response => {
        return response.data
      })
}
