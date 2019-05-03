import axios from 'axios'

export default function getPaginateRecipes (offset) {
    return axios.get(`/recipe/paginate/${offset}`)
      .then(response => {
        return response.data
      })
}
