import axios from 'axios'

export default function getAllRecipesByCategory (category) {
    return axios.get(`/recipe/category/${category}`)
      .then(response => {
        return response.data
      })
}
