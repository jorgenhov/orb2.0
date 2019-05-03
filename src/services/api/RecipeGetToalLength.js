import axios from 'axios'

export default function getAllRecipesLength () {
    return axios.get('/recipe/collectionlength')
      .then(response => {
        return response.data
      })
}
