import axios from 'axios'

export const getFollowersMock = async (BASE_URL, username) => {
    try {
        const followers = await axios.get(`${BASE_URL}/${username}/followers`)
        const user = await axios.get(`${BASE_URL}/${username}`)
        return {
            followers: followers.data,
            quantity: user.data.followers
        }
    } catch (error) {
        return error.response.data.message
    }
}