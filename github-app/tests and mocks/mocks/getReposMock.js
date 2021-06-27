import axios from 'axios'

export const getReposMock = async (BASE_URL, username) => {
    try {
        const repos = await axios.get(`${BASE_URL}/${username}/repos`)
        const user = await axios.get(`${BASE_URL}/${username}`)
        return {
            repos: repos.data,
            quantity: user.data.public_repos
        }
    } catch (error) {
        return error.response.data.message
    }
}