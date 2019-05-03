import axios from 'axios'

export default function getAllRecipes () {
    return axios.get('/recipe')
      .then(response => {
        return response.data
      })
}
