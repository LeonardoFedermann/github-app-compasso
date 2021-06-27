import { getFollowersMock } from '../mocks/getFollowersMock'

export const getFollowersTest = async (BASE_URL, username) => {
    const result = await getFollowersMock(BASE_URL, username)
    const { followers, quantity } = result
    expect(quantity).toBe(29)
    expect(followers[28].login).toBe('philoureiro')
}