import axios from 'axios'

export default function getAllRecipesByAuthor (author) {
    return axios.get(`/recipe/author/${author}`)
      .then(response => {
        return response.data
      })
}
