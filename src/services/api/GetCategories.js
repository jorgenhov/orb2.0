import axios from 'axios'

export default function getAllCategories () {
    return axios.get('/category')
      .then(response => {
        return response.data
      })
}
