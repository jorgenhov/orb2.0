import axios from 'axios'

export default function createRecipe (recipe) {
    return axios.post('/recipe', recipe)
}
