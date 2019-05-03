import axios from 'axios'

export default function getAllRecipesByCategoryAndAuthor (category, author) {
    return axios.get(`/recipe/categoryandauthor/${category}/${author}`)
      .then(response => {
        return response.data
      })
}
