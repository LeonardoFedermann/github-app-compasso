import axios from 'axios'

export const getFollowingUsersMock = async (BASE_URL, username) => {
    try {
        const followingUsers = await axios.get(`${BASE_URL}/${username}/following`)
        const user = await axios.get(`${BASE_URL}/${username}`)
        return {
            followingUsers: followingUsers.data,
            quantity: user.data.following
        }
    } catch (error) {
        return error.response.data.message
    }
}