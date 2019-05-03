import axios from 'axios'

export default function getRecipesFromSearchAndAuthor (searchTerm, author) {
    return axios.get(`/recipe/search/${searchTerm}/author/${author}`)
      .then(response => {
        return response.data
      })
}
