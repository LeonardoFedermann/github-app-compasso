import axios from 'axios'

export const getUserMock = async (BASE_URL, username) => {
    try {
        const user = await axios.get(`${BASE_URL}/${username}`)
        const starred = await axios.get(`${BASE_URL}/${username}/starred`)
        return {
            user: user.data,
            starred: starred.data
        }
    } catch (error) {
        return error.response.data.message
    }
}