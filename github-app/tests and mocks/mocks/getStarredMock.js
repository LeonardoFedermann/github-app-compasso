import axios from 'axios'

export const getStarredMock = async (BASE_URL, username) => {
    try {
        const starredRepos = await axios.get(`${BASE_URL}/${username}/starred`)
        return (starredRepos.data)
    } catch (error) {
        return error.response.data.message
    }
}
