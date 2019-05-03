import axios from 'axios'

export default function getAllUsers () {
    return axios.get('/user')
      .then(response => {
        return response.data
      })
}
