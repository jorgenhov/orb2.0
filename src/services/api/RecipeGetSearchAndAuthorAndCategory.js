import axios from 'axios'

export default function getRecipesFromSearchAndAuthorAndCategory (searchTerm, author, category) {
    return axios.get(`/recipe/search/${searchTerm}/author/${author}/category/${category}`)
      .then(response => {
        return response.data
      })
}
