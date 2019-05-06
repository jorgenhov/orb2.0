import axios from 'axios'

export default function getAllUsers () {
    return axios.get('/author')
      .then(response => {
        return response.data
      })
}
